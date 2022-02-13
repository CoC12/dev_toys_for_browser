<template>
  <div>
    <HeadlineText :headline-text="headlineText" />
    <div class="mt-4">
      <v-container>
        <v-row>
          <v-col class="col-12 col-md-4">
            <v-radio-group v-model="conversion" row>
              <v-radio label="Encode" value="encode"></v-radio>
              <v-radio label="Decode" value="decode"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 col-md-6">
            Input
            <v-textarea v-model="input" filled auto-grow></v-textarea>
          </v-col>
          <v-col class="col-12 col-md-6">
            Output
            <v-textarea v-model="output" filled auto-grow readonly></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HtmlEncoder',
  data() {
    return {
      headlineText: 'HTML Encoder / Decoder',
      input: '',
      conversion: 'encode',
    }
  },
  computed: {
    output() {
      return this.conversion === 'encode'
        ? this.escapeHtml(this.input)
        : this.unescapeHtml(this.input)
    },
    escapePattern() {
      return {
        '&': '&amp;',
        "'": '&#39;',
        '"': '&quot;',
        '<': '&lt;',
        '>': '&gt;',
      }
    },
    unescapePattern() {
      return {
        '&amp;': '&',
        '&#39;': "'",
        '&quot;': '"',
        '&lt;': '<',
        '&gt;': '>',
      }
    },
  },
  methods: {
    escapeHtml(text) {
      return text.replace(/[&'"<>]/g, (match) => {
        return this.escapePattern[match]
      })
    },
    unescapeHtml(text) {
      return text.replace(/&(amp|#39|quot|lt|gt);/g, (match) => {
        return this.unescapePattern[match]
      })
    },
  },
}
</script>
