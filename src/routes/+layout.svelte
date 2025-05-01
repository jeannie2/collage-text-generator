<script lang="ts">
import type { PageData } from '$lib'; 
import { Header, Footer } from '$lib';

export let data: PageData; // metadata from page `load` function 
</script>
  
<svelte:head>
  <title>{data.title || 'Collage Text Generator'}</title>
  <meta name="description" content={data.description || 'Create text collages'} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<Header title={data.title || 'Collage Text Generator'} />
  <slot /> 
<Footer />