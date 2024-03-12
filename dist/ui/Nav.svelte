<script>
	import { onMount, onDestroy } from 'svelte';
	import { supabase } from '../supabase';
	import {
		accounts,
		avatar,
		currentUser,
		currentAccount,
		trackAuthState,
		ListUserInvites
	} from '..';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	$: ({ accountId } = $page.params);

	let invites;
	const handleInvitesChanged = (ev) => {
		const changedInvites = ev.detail;
		if (invites && changedInvites.length < invites.length) {
			setTimeout(() => {
				document.location.href = '/';
			}, 250);
		}
		invites = changedInvites;
	};

	let sub;
	onMount(() => {
		sub = trackAuthState();
	});
	onDestroy(() => {
		if (sub && sub.subscription) authSubData.subscription.unsubscribe();
	});
	$: userLabel =
		($currentUser.user_metadata && $currentUser.user_metadata.name) || $currentUser.email;

	const handleSignOut = async () => {
		console.log('signing out');
		await supabase.auth.signOut();
		$currentUser = false;
		document.location.href = '/';
	};
	$: links = [
		
	];
</script>

<div class="">
	<header class="navbar navbar-expand-md d-print-none">
		<div class="container-xl">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbar-menu"
				aria-controls="navbar-menu"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<h1 class="navbar-brand d-none-navbar-horizontal pe-0 pe-md-3">
				<a href="/">
					
					<img src="" width="110" height="32" alt="Foxflow 'Account' Demo" class="navbar-brand-image" />
				</a>
			</h1>
			{#if $currentUser}
				<div class="navbar-nav flex-row order-md-last">
					<div class="d-none d-md-flex">
						<div class="nav-item dropdown d-none d-md-flex me-3">
							<a
								href="#"
								class="nav-link px-0"
								data-bs-toggle="dropdown"
								tabindex="-1"
								aria-label="Show notifications"
							>
								<!-- Download SVG icon from http://tabler-icons.io/i/bell -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
										d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
									></path><path d="M9 17v1a3 3 0 0 0 6 0v-1"></path></svg
								>
								<span class="badge bg-red"></span>
							</a>
							<div class="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
								<div class="card">
									<div class="card-header">
										<h3 class="card-title">At some point we can put action-items here</h3>
									</div>
									<div class="list-group list-group-flush list-group-hoverable">
										<div class="list-group-item">
											<div class="row align-items-center">
												<div class="col-auto">
													<span class="status-dot status-dot-animated bg-red d-block"></span>
												</div>
												<div class="col text-truncate">
													<a href="#" class="text-body d-block">Example 1</a>
													<div class="d-block text-secondary text-truncate mt-n1">
														Change deprecated html tags to text decoration classes (#29604)
													</div>
												</div>
												<div class="col-auto">
													<a href="#" class="list-group-item-actions">
														<!-- Download SVG icon from http://tabler-icons.io/i/star -->
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="icon text-muted"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															fill="none"
															stroke-linecap="round"
															stroke-linejoin="round"
															><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
																d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
															></path></svg
														>
													</a>
												</div>
											</div>
										</div>
										<div class="list-group-item">
											<div class="row align-items-center">
												<div class="col-auto"><span class="status-dot d-block"></span></div>
												<div class="col text-truncate">
													<a href="#" class="text-body d-block">Example 2</a>
													<div class="d-block text-secondary text-truncate mt-n1">
														justify-content:between ⇒ justify-content:space-between (#29734)
													</div>
												</div>
												<div class="col-auto">
													<a href="#" class="list-group-item-actions show">
														<!-- Download SVG icon from http://tabler-icons.io/i/star -->
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="icon text-yellow"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															fill="none"
															stroke-linecap="round"
															stroke-linejoin="round"
															><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
																d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
															></path></svg
														>
													</a>
												</div>
											</div>
										</div>
										<div class="list-group-item">
											<div class="row align-items-center">
												<div class="col-auto"><span class="status-dot d-block"></span></div>
												<div class="col text-truncate">
													<a href="#" class="text-body d-block">Example 3</a>
													<div class="d-block text-secondary text-truncate mt-n1">
														Update change-version.js (#29736)
													</div>
												</div>
												<div class="col-auto">
													<a href="#" class="list-group-item-actions">
														<!-- Download SVG icon from http://tabler-icons.io/i/star -->
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="icon text-muted"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															fill="none"
															stroke-linecap="round"
															stroke-linejoin="round"
															><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
																d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
															></path></svg
														>
													</a>
												</div>
											</div>
										</div>
										<div class="list-group-item">
											<div class="row align-items-center">
												<div class="col-auto">
													<span class="status-dot status-dot-animated bg-green d-block"></span>
												</div>
												<div class="col text-truncate">
													<a href="#" class="text-body d-block">Example 4</a>
													<div class="d-block text-secondary text-truncate mt-n1">
														Regenerate package-lock.json (#29730)
													</div>
												</div>
												<div class="col-auto">
													<a href="#" class="list-group-item-actions">
														<!-- Download SVG icon from http://tabler-icons.io/i/star -->
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="icon text-muted"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															stroke-width="2"
															stroke="currentColor"
															fill="none"
															stroke-linecap="round"
															stroke-linejoin="round"
															><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
																d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
															></path></svg
														>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="nav-item dropdown">
						<a
							href="#"
							class="nav-link d-flex lh-1 text-reset p-0"
							data-bs-toggle="dropdown"
							aria-label="Open user menu"
							aria-expanded="false"
						>
							{#if browser && $currentUser}
								{#if avatar}
									<span class="avatar avatar-sm" style="background-image: url('{$avatar}')"></span>
								{/if}
								<div class="d-none d-sm-block ps-2">
									<div>{userLabel}</div>
									<div class="mt-1 small text-secondary">
										{$currentAccount ? $currentAccount.name : 'No Workspace Selected'}
									</div>
								</div>
							{/if}
						</a>
						<div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow" data-bs-theme="light">
							{#each $accounts as account}
								<a href="/workspace/{account.slug}" class="dropdown-item">{account.name}</a>
							{/each}
							<div class="dropdown-divider"></div>
							<a href="/workspace/new" class="dropdown-item">New Workspace</a>
							<div class="dropdown-divider"></div>
							<a href="./sign-in.html" on:click|preventDefault={handleSignOut} class="dropdown-item"
								>Logout</a
							>
						</div>
					</div>
				</div>
			{:else}
			<div class="text-muted">
				Sign In Required
			</div>
			{/if}
		</div>
	</header>
	{#if accountId}
		<header class="navbar-expand-sm border-bottom mb-4">
			<div class="collapse navbar-collapse" id="navbar-menu">
				<div class="navbar">
					<div class="container-xl">
						<div class="row flex-fill align-items-center">
							<div class="col">
								<ul class="navbar-nav">
									{#each links as link}
										<li class="nav-item" class:active={link.active}>
											<a class="nav-link" href={link.url}>
												<span class="nav-link-title">{link.name}</span>
											</a>
										</li>
									{/each}
								</ul>
							</div>
							<div class="col-auto">
								<a class="btn btn-sm bg-gray-100 px-3" href="/workspace/{accountId}/members">
									<span class="nav-link-title text-muted">Team Members</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	{/if}
</div>

<div class="container-xl">
	<ListUserInvites on:invites={handleInvitesChanged} />
</div>
