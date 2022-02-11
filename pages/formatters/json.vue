<template>
  <div>
    <HeadlineText :headlineText="headlineText" />
    <div class="mt-4">
      <v-container>
        <v-row>
          <v-col
            class="col-12 col-md-4"
          >
            <v-select
              v-model="indent"
              :items="indentOptions"
              item-text="label"
              item-value="value"
              label="Indent"
              solo
            ></v-select>
          </v-col>
        </v-row>
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
            Output
            <v-textarea
              v-model="output"
              filled
              auto-grow
              readonly
            ></v-textarea>
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
      input: '',
      indent: 4,
      indentOptions: [
        {
          'label': '0 spaces (minified)',
          'value': 0,
        },
        {
          'label': '1 spaces',
          'value': 1,
        },
        {
          'label': '2 spaces',
          'value': 2,
        },
        {
          'label': '3 spaces',
          'value': 3,
        },
        {
          'label': '4 spaces (default)',
          'value': 4,
        },
        {
          'label': '1 tab',
          'value': '\t',
        },
      ],
    }
  },
  methods: {
    formatJson(text) {
      if (text === '') {
        return ''
      }
      try {
        return JSON.stringify(JSON.parse(text), null, this.indent)
      } catch (e) {
        return 'Parse error'
      }
    },
  },
  computed: {
    output() {
      return this.formatJson(this.input)
    },
  },
}
</script>
