<script lang="ts">
	interface Props {
		error: {type: 'criticalError'; errors: {message: string}[]};
	}
	let {error}: Props = $props();
</script>

{#each error.errors as { message }}
	<p>{message}</p>
{/each}
