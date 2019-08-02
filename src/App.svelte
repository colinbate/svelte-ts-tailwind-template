<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  import Counter from './Counter.svelte';

  const count = writable(100);

  export let name: string;
  onMount(() => {
    console.log('App mounted');
  });
</script>

<style>
</style>

<h1 class="bg-black text-white text-center text-3xl p-2">Hello {name}!</h1>
<p class="p-2">
  <Counter />
  <Counter value={1}>Counter 1</Counter>
  <Counter value={$count} step={3}>Counter 2</Counter>
</p>
