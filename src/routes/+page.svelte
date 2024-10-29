<script>
	import Fuse from "fuse.js";
	import { gameSuggestions } from "$lib";
	import shelf, { statusMap } from "$lib/library.svelte.js";

	let searchText = $state("");
	let pick = $state();
	let picked = $state(false);
	let addMsg = $derived(
		!picked ? "Pick a game first" : `Add ${pick.name} to library`,
	);

	const fuse = new Fuse(gameSuggestions, { keys: ["name"] });
	let suggestions = $derived(fuse.search(searchText));
</script>

<form>
	<input
		type="search"
		placeholder="add a game to your library"
		bind:value={searchText}
	/>

	<button
		disabled={!picked}
		onclick={() => {
			searchText = "";
			shelf.push(pick);
			picked = false;
		}}
	>
		{addMsg}
	</button>
</form>
{#each suggestions as game}
	<p>
		<button
			onclick={() => {
				pick = game.item;
				picked = true;
			}}
			class="suggestion"
		>
			{game.item.name}
		</button>
	</p>
{/each}



<style>
	button:hover:enabled {
		background-color: blueviolet;
	}
	button:hover:disabled {
		background-color: gray;
		cursor: not-allowed;
	}
</style>
