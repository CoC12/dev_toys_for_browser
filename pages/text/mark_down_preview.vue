<template>
  <div>
    <HeadlineText :headlineText="headlineText" />
    <div class="mt-4">
      <v-container>
        <v-row>
          <v-col
            class="col-12 col-md-6"
          >
            Input
            <v-textarea
              v-model="input"
              filled
              auto-grow
            ></v-textarea>
          </v-col>
          <v-col
            class="col-12 col-md-6"
          >
            Preview
            <v-card
              v-html="compiledMarkdown"
              outlined
              height='100%'
              class="pa-4"
            ></v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarkdownPreview',
  data() {
    return {
      headlineText: 'Markdown Preview',
      input:'',
    }
  },
  mounted() {
    const markedScript = document.createElement('script')
    markedScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/marked/marked.min.js')
  },
  computed: {
    compiledMarkdown() {
      if (this.input === '') {
        return ''
      }
      return marked.marked(this.input)
    }
  },
}
</script>
