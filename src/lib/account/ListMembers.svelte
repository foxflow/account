<script>
	import { supabase } from '$lib/supabase';
	import { currentAccount, currentUser } from '$lib/account';
	let members = [];
	export let classes = 'card';
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
		'owner': 'Admin',
		'member': 'Standard',
	};
</script>

<div class={classes}>
		<div class="list-group list-group-flush">
			<a href="#" class="list-group-item list-group-item-action"  aria-current="true">
				<span class="float-end text-muted">
					<div class="badge text-titleize"> {roleDescription[$currentAccount.account_role]}</div>

				</span>
				{$currentUser.email}
			</a>
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
