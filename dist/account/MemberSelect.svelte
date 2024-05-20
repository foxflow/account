<script>
	import { supabase } from '../supabase';
	import { currentAccount, currentUser } from './';
	export let value;
	export let emptyPrompt;
	let members = [];
	export let classes = 'form-control';
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
	
</script>

<select bind:value class={classes}>
	{#if emptyPrompt}
		<option value=''>{emptyPrompt}</option>
	{/if}
	<option value={$currentUser.id}>
		{$currentUser.name || ''} {$currentUser.email || ''}
	</option>
	{#each members as member}
		<option value={member.user_id}>
			{member.name || ''} {member.email || ''}
		</option>
	{/each}
</select>
