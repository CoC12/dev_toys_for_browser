<template>
  <div>
    <HeadlineText :headline-text="headlineText" />
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
            <!-- eslint-disable vue/no-v-html -->
            <v-card
              outlined
              height='100%'
              class="pa-4"
              v-html="compiledMarkdown"
            ></v-card>
            <!-- eslint-enable vue/no-v-html -->
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'MarkdownPreview',
  data() {
    return {
      headlineText: 'Markdown Preview',
      input:'',
    }
  },
  computed: {
    compiledMarkdown() {
      if (this.input === '') {
        return ''
      }
      return marked(this.input)
    }
  },
}
</script>
