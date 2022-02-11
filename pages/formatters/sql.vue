<template>
  <div>
    <HeadlineText :headline-text="headlineText" />
    <div class="mt-4">
      <v-container>
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
import { format } from 'sql-formatter'

export default {
  name: 'SqlFormatter',
  data() {
    return {
      headlineText: 'SQL Formatter',
      input: '',
    }
  },
  computed: {
    output() {
      return format(this.input)
    },
  },
}
</script>
