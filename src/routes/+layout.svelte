<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav>
<a href="/">Add a game</a>
<a href="/shelf">Shelf</a>
</nav>

{@render children()}