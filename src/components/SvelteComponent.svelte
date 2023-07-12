<script lang="ts">
  import { counterAtom } from '../context/counterAtom'
</script>


<div class="bg-orange-100 p-6 rounded-xl">
  <h2 class="text-orange-950 text-xl font-bold">
    Hello, I'm Svelte component
  </h2>
  <p>
    Svelte says... <b>{$counterAtom}</b>
  </p>
</div>
