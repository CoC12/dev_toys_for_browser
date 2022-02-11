<template>
  <div>
    <HeadlineText :headlineText="headlineText" />
    <div class="mt-4">
      <CardList :items="items" />
    </div>
  </div>
</template>

<script>
import tools from '@/assets/tools.json'

export default {
  name: 'TextPage',
  data() {
    return {
      headlineText: 'Text',
      items: tools.text.tools,
    }
  },
}
</script>
