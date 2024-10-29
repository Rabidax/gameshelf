<script>
	import {statusMap} from '$lib/library.svelte.js'
	let { data } = $props()
</script>

{#each data.shelf.games as game}
	<p>
		{game.name} on {game.platform} / Status: {statusMap.get(game.status)}
	</p>
{/each}
