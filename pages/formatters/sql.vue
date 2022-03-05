<template>
  <div>
    <HeadlineText
      :headline-text="headlineText"
      enable-favorite
      :tool-key="toolKey"
    />
    <div class="mt-4">
      <v-container>
        <v-row>
          <v-col class="col-12 col-md-4">
            <v-select
              v-model="indent"
              :items="indentOptions"
              item-text="label"
              item-value="value"
              hide-details
              solo
            ></v-select>
          </v-col>
          <v-col class="col-12 col-md-4 d-flex align-center">
            <v-switch
              v-model="toUpperCase"
              class="mt-0 px-md-8"
              label="Converts SQL keywords to uppercase letters"
              hide-details="true"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row class="mt-11">
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
import { format } from 'sql-formatter'

const space = ' '
export default {
  name: 'SqlFormatter',
  data() {
    return {
      headlineText: 'SQL Formatter',
      toolKey: 'sql',
      input: '',
      indent: 4,
      toUpperCase: false,
      indentOptions: [
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
      let indent = this.indent
      if (typeof this.indent === 'number') {
        indent = space.repeat(this.indent)
      }
      return format(this.input, {
        indent,
        uppercase: this.toUpperCase,
      })
    },
  },
}
</script>
