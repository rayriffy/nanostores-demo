<script lang="ts">
  import { counterAtom } from '../context/counterAtom'
</script>

<button
  type="button"
  class="rounded-md bg-pink-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
  on:click={() => counterAtom.set($counterAtom + 1)}
>
  Click to add
</button>
