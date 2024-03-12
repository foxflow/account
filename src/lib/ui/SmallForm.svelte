<script>
	export let classes = "card shadow-sm p-4 bg-light"
</script>
<div class="m-auto mw-sm p-md-5 ">
	<div class="{classes}">
        <slot></slot>
	</div>
</div>

<style>
	.mw-sm {
		max-width: 576px;
	}
</style>
