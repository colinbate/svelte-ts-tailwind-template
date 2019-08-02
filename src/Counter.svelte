<script lang="ts">
  export let value = 0;
  export let step = 1;
</script>

<div>
  <slot>Default Counter</slot>
  <div class="rounded bg-black text-green-300 mb-2 inline-flex">
    <span class="py-1 px-3 w-16 text-center">{value}</span>
    <button class="text-black bg-gray-400 py-1 px-3" on:click={() => (value += step)}>+</button>
    <button class="text-black bg-gray-400 py-1 px-3 ml-px rounded rounded-l-none" on:click={() => (value -= step)}>-</button>
  </div>
</div>
