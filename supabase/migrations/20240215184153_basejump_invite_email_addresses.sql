alter table "basejump"."invitations" add column email_address character varying(255);

create policy "View own invitations based on email address."
on "basejump"."invitations"
as permissive
for select
to authenticated
using (((created_at > (now() - '24:00:00'::interval)) AND (auth.email() = email_address)));


set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_invitation(account_id uuid, account_role basejump.account_role, invitation_type basejump.invitation_type, email_address character varying)
 RETURNS json
 LANGUAGE plpgsql
AS $function$
declare
    new_invitation basejump.invitations;
begin
    insert into basejump.invitations (account_id, account_role, invitation_type, email_address, invited_by_user_id)
    values (account_id, account_role, invitation_type, email_address, auth.uid())
    returning * into new_invitation;

    return json_build_object('token', new_invitation.token);
end
$function$
;

grant execute on function public.create_invitation(uuid, basejump.account_role, basejump.invitation_type, character varying) to authenticated;


create or replace function public.get_own_invitations()
    returns json
    language plpgsql
as
$$
BEGIN
    -- any authenticated user can access this function
    return (select json_agg(
                           json_build_object(
                                   'account_name', i.account_name,
                                   'created_at', i.created_at,
                                   'invitation_token', i.token
                               )
                       )
            from basejump.invitations i
            where i.email_address = auth.email() 
              and i.created_at > now() - interval '24 hours');
END;
$$;

grant execute on function public.get_own_invitations() to authenticated;


create or replace function public.decline_invitation(lookup_invitation_token text)
    returns void
    language plpgsql
    security definer
as
$$
begin
    -- verify email address for the invitation
    if (select email_address from basejump.invitations where token = decline_invitation.lookup_invitation_token) <> auth.email() then
        raise exception 'Only the invited user can decline the invitation';
    end if;

    delete from basejump.invitations where token = decline_invitation.lookup_invitation_token;
end
$$;

grant execute on function public.decline_invitation(text) to authenticated;