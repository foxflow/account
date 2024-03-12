<script>
	import { CreateInvite, ListMembers } from '$lib/account';
	import SmallForm from '$lib/ui/SmallForm.svelte';

</script>


<SmallForm classes="p-3">

	<ListMembers />
	<div class="mb-4"/>
	
	<CreateInvite />
</SmallForm>
