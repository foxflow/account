<script>
	import { AuthUI, currentUser, accounts } from '$lib';
	import { AuthTheme } from '$lib/theme/auth.js';
	import Nav from '$lib/ui/Nav.svelte';
	import SmallForm from '$lib/ui/SmallForm.svelte';
	AuthTheme;
	export let data;
</script>

<Nav />
{#if !$currentUser}
	<SmallForm>        
		<AuthUI theme={AuthTheme} />
	</SmallForm>
{:else if $accounts}
	<div class="container-xl mt-4 px-5">
        <h3 class="card-title">Your Workspaces</h3>
		<div class="card card-link">

            <div class="list-group list-group-flush">
				{#each $accounts as account}
					<a href="/workspace/{account.slug}" class="list-group-item list-group-item-action"
						>{account.name}</a
					>
				{/each}
			</div>
		</div>
	</div>
{/if}
