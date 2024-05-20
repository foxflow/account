<script>
	import { supabase } from '../supabase';
	import { currentAccount } from './';
	let email_address = '',
		sentTo = [];

	let account_role = 'owner';
	export const submitCreateInvite = async () => {
		if ($currentAccount && email_address) {
			const { account_id } = $currentAccount;
			const { data, error } = await supabase.rpc('create_invitation', {
				account_id,
				account_role,
				email_address,
				invitation_type: 'one_time'
			});
			if (!error) {
				sentTo = sentTo.concat([email_address]);
				email_address = '';
			}
		}
	};
</script>

{#if $currentAccount}
	{#each sentTo as sent}
		<div class="alert alert-success alert-dismissible mb-4" role="alert">
			<div class="d-flex">
				<div class="me-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-circle-check"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="10" />
						<path d="M9 12l2 2 4-4" />
					</svg>
				</div>
				<div>
					<h4 class="alert-title">{sent} has been authorized.</h4>
					<div class="text-secondary">
						<strong> Note - you still need to notify them to sign in within 24h! </strong>
						Once they are signed in with <strong>{sent}</strong> they can accept or decline your invitation.
					</div>
				</div>
			</div>
		</div>
	{/each}
	<form class="" on:submit|preventDefault={submitCreateInvite}>
		<div class="row align-items-end">
			<div class="col-8 mb-3">
				<label for="email" class="form-label">Authorize by email</label>
				<input id="email" required type="email" placeholder="... email address" bind:value={email_address} class="form-control" />
				<!--
					<div class="help-text fs-5 mt-2 text-muted">
					Will be authorized to use the <strong>{$currentAccount.name}</strong> workspace
				</div>
				-->
			</div>
			<div class="col-4 mb-3">
				<label for="email" class="form-label">Access Level</label>
				<select bind:value={account_role} class="form-select">
					<option value="owner">Admin</option>
					<option value="member">Standard</option>
				</select>
			</div>
		</div>
		<button type="submit" class="btn btn-outline-primary mt-3 w-100">Authorize New User</button>
	</form>
{/if}
