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
  name: 'FormattersPage',
  data() {
    return {
      headlineText: 'Formatters',
      items: tools.formatters.tools,
    }
  },
}
</script>
