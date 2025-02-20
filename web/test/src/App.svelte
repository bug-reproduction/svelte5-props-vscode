<script lang="ts">
	import CriticalError from './lib/CriticalError.svelte';
	import {error} from './lib/state';
</script>

<CriticalError {error} />
