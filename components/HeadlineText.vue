<template>
  <h2 class="mt-10">
    {{ headlineText }}
  </h2>
</template>

<script>
export default {
  name: 'HeadlineText',
  props: {
    'headlineText': {
      type: String,
      default: '',
    },
  },
}
</script>
