<template>
  <div>
    <HeadlineText :headline-text="headlineText" />
    <div class="mt-4">
      <v-container>
        <v-row>
          <v-col class="col-12 col-md-4">
            <v-select
              v-model="indent"
              :items="indentOptions"
              item-text="label"
              item-value="value"
              solo
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 col-md-6">
            Input
            <v-textarea v-model="input" filled auto-grow></v-textarea>
          </v-col>
          <v-col class="col-12 col-md-6">
            Output
            <v-textarea
              v-show="error === ''"
              v-model="output"
              filled
              auto-grow
              readonly
            ></v-textarea>
            <!-- eslint-disable vue/no-v-html -->
            <v-card
              v-show="error !== ''"
              outlined
              height="100%"
              class="pa-4"
              v-html="error"
            ></v-card>
            <!-- eslint-enable vue/no-v-html -->
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsonFormatter',
  data() {
    return {
      headlineText: 'JSON Formatter',
      error: '',
      input: '',
      indent: 4,
      indentOptions: [
        {
          label: '0 spaces (minified)',
          value: 0,
        },
        {
          label: '1 spaces',
          value: 1,
        },
        {
          label: '2 spaces',
          value: 2,
        },
        {
          label: '3 spaces',
          value: 3,
        },
        {
          label: '4 spaces (default)',
          value: 4,
        },
        {
          label: '1 tab',
          value: '\t',
        },
      ],
    }
  },
  computed: {
    output() {
      return this.formatJson(this.input)
    },
  },
  methods: {
    formatJson(text) {
      this.error = ''
      if (text === '') {
        return ''
      }
      try {
        return JSON.stringify(JSON.parse(text), null, this.indent)
      } catch (e) {
        const position = e.message.match(/position (\d+)/)
        if (position === null) {
          this.error = 'Expecting closing } at end'
          return ''
        }
        const errorPosition = Number.parseInt(position[1])
        this.error =
          text.substr(0, errorPosition) +
          '<span style="color:red;font-weight:bold;">' +
          text.substr(errorPosition, 1) +
          '</span>' +
          text.substr(errorPosition + 1, text.length)
        return ''
      }
    },
  },
}
</script>
