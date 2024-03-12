<script>
	import { supabase } from '../supabase';
	import { currentUser } from './';
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher(); 

	let invites = [];

	const getUserInvites = async (email_address) => {
		if (email_address) {
			let { data, error } = await supabase.rpc('get_own_invitations');
			if (Array.isArray(data)) {
				invites = data;
			} else {
				invites = [];
			}
			dispatch('invites', invites);

		}
	};

	const acceptInvite = async (invite) => {
		const { invitation_token } = invite;
		if (invitation_token) {
			const { data, error } = await supabase.rpc('accept_invitation', {
				lookup_invitation_token: invitation_token
			});
			getUserInvites($currentUser.email);

		}
	};

	const declineInvite = async (invite) => {
		const { invitation_token } = invite;
		if (invitation_token) {
			const { data, error } = await supabase.rpc('decline_invitation', {
				lookup_invitation_token: invitation_token
			});
			getUserInvites($currentUser.email);
		}
	};

	$: {
		getUserInvites($currentUser.email);
	}
	
</script>

{#each invites as invite}
	<div class="m-3 alert alert-success alert-dismissible bg-light" role="alert">
		<h3 class="mb-1">You're Invited!</h3>
		<p>Would you like to join the <strong>{invite.account_name}</strong> workspace now?</p>
		<div class="btn-list">
			<a href="#" on:click|preventDefault={() => acceptInvite(invite)} class="btn btn-success"
				>Yes, please!</a
			>
			<a href="#" on:click|preventDefault={() => declineInvite(invite)}  class="btn">No thanks</a>
		</div>
		<a class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>
	</div>
{/each}
