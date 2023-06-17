<script lang="ts">
	import ModeSwitcher from './lib/ModeSwitcher.svelte';
</script>

<ModeSwitcher />
<main class="p-4 mx-auto text-center max-w-xl">
	<h1 class="uppercase text-6xl leading-normal font-thin text-svelte">Hello World!</h1>
	<p class="custom-style mt-[3rem]">
		Visit the
		<a href="https://svelte.dev/tutorial" class="text-blue-500 dark:text-blue-300 underline">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
</main>

<style lang="postcss">
	.custom-style {
		@apply italic;
	}
</style>