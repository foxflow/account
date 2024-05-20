<script>
	import { supabase } from '../supabase';
	export let nameLabelText = `New Workspace / Team Name`;
	export let slugLabelText = `Slug`;
	export let buttonText = `Create Team`;
	export let slugHelpText = `<strong>A unique team url</strong> &ndash; only lowercase letters,
				numbers, and "-" allowed.`;
	export let onAfterCreate = () => {};
	export let onError = (err) => {
		console.error(error);
	};
	export let name = ''; // exporting allows passing in a default value
	export let slug = ''; // ^^ same here

	const submitCreateAccount = async () => {
		const { data, error } = await supabase.rpc('create_account', {
			name,
			slug
		});

		if (!error) {
			onAfterCreate(data);
		} else {
			onError(error);
		}
	};
</script>

<form on:submit|preventDefault={submitCreateAccount}>
	<div class="row align-items-end">
		<div class="col-12 mb-3">
			<label for="name" class="form-label">{nameLabelText}</label>
			<input id="name" required bind:value={name} type="text" class="form-control" />
		</div>
		<div class="col-12 mb-3">
			<label for="slug" class="form-label">
				{slugLabelText}
			</label>
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
				{@html slugHelpText}
			</div>
		</div>
	</div>
	<button type="submit" class="btn btn-primary mt-3 w-100">
		{buttonText}
	</button>
</form>
