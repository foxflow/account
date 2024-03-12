<script>
	import { supabase } from '../supabase';
	import { currentAccount, currentUser } from './';
	let members = [];

	const getMembers = async (account) => {
		const { account_id } = account;
		if (account_id) {
			let { data, error } = await supabase.rpc('get_account_members', {
				account_id
			});
			if (Array.isArray(data)) {
				members = data;
			} else {
				members = [];
			}
		}
	};

	$: {
		getMembers($currentAccount);
	}
	const roleDescription = {
		'owner': 'Full Access',
		'member': 'Restricted',
	};
</script>

{#if members.length}
<h3 class="card-title">Member List</h3>

<div class="card">
		<div class="list-group list-group-flush">
			{#each members as member}
				<a href="#" class="list-group-item list-group-item-action" class:active={member.email == $currentUser.email} aria-current="true">
					<span class="float-end text-muted">
						<div class="badge text-titleize"> {roleDescription[member.account_role]}</div>

					</span>
					{member.email} 
				</a>
			{/each}
		</div>
	</div>
{/if}
