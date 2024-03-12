<script>
	import { accounts, currentAccount } from '$lib/account';

	import { page } from '$app/stores';
	$: ({ accountId } = $page.params);

	$: {
		if ($accounts.length && accountId) {
			$currentAccount = $accounts.filter((a) => a.slug === accountId)[0];
		}
	}
</script>
{#if $currentAccount}
	<slot />
{/if}
