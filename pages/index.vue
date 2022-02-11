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
  name: 'AllToolsPage',
  data() {
    return {
      headlineText: 'All tools',
      items: [].concat(...Object.values(tools).map((tool) => tool.tools)),
    }
  },
}
</script>
