<template>
  <div class="bg-emerald-100 p-6 rounded-xl">
    <h2 class="text-emerald-950 text-xl font-bold">Hello, I'm Vue component</h2>
    <p>
      Vue says... <b>{{ $counter }}</b>
    </p>
  </div>
</template>

<script setup>
import { counterAtom } from '../context/counterAtom'
import { useStore } from '@nanostores/vue'

const $counter = useStore(counterAtom)
</script>
