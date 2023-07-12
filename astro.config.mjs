import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import react from '@astrojs/react'
import vue from '@astrojs/vue'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://rayriffy.github.io',
  base: '/nanostores-demo',
  integrations: [svelte(), react(), vue(), tailwind()],
})
