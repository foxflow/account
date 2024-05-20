<script>
	import { supabase } from '../supabase';
	let name = '',
		slug = '';

	const submitCreateAccount = async () => {
		const { data, error } = await supabase.rpc('create_account', {
			name,
			slug
		});
	};
</script>

<form on:submit|preventDefault={submitCreateAccount}>
	<div class="row align-items-end">
		<div class="col-12 mb-3">
			<label for="name" class="form-label">New Workspace / Team Name</label>
			<input id="name" required bind:value={name} type="text" class="form-control" />
		</div>
		<div class="col-12 mb-3">
			<label for="slug" class="form-label">Slug</label>
			<input
				id="slug"
				required
				bind:value={slug}
				pattern="[a-z0-9\-]*"
				minlength="3"
				type="text"
				class="form-control"
			/>
			<div class="help-text fs-5 mt-2 text-muted">
				This creates unique URL's for your team. It can only contain lowercase letters,
				numbers, and hyphens.
			</div>
		</div>
	</div>
	<button type="submit" class="btn btn-primary mt-3 w-100">Create Team</button>
</form>
