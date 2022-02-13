<template>
  <div>
    <HeadlineText :headline-text="headlineText" />
    <div class="mt-4">
      <CardList :items="items" />
    </div>
  </div>
</template>

<script>
import tools from '@/assets/tools.json'

export default {
  name: 'EncodersPage',
  data() {
    return {
      headlineText: 'Encoders / Decoders',
      items: tools.encoders.tools,
    }
  },
}
</script>
