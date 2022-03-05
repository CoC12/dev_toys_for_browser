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
          <v-col class="col-12 col-md-8">
            <v-textarea v-model="text" filled auto-grow></v-textarea>
          </v-col>
          <v-col class="col-12 col-md-4">
            <v-card outlined class="pa-3">
              <div>Characters: {{ characters }}</div>
              <div>Words: {{ words }}</div>
              <div>Lines: {{ lines }}</div>
              <div>Bytes: {{ bytes }}</div>
              <v-divider class="my-3"></v-divider>
              <div>
                Word distribution:
                <v-textarea
                  v-model="wordDistribution"
                  rows="1"
                  :style="{ 'max-height': '200px' }"
                  class="overflow-y-auto"
                  filled
                  auto-grow
                  readonly
                ></v-textarea>
              </div>
              <v-divider class="my-3"></v-divider>
              <div>
                Character distribution:
                <v-textarea
                  v-model="characterDistribution"
                  rows="1"
                  :style="{ 'max-height': '200px' }"
                  class="overflow-y-auto"
                  filled
                  auto-grow
                  readonly
                ></v-textarea>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInspector',
  data() {
    return {
      headlineText: 'Text Inspector',
      toolKey: 'inspector',
      text: '',
    }
  },
  computed: {
    characters() {
      return this.text.length
    },
    words() {
      if (this.text.trim() === '') {
        return 0
      }
      return this.text.trim().split(/\s+/).length
    },
    lines() {
      return this.text.split(/\r|\n|\r\n/).length
    },
    bytes() {
      return new Blob([this.text]).size
    },
    wordDistribution() {
      if (this.text.trim() === '') {
        return
      }
      return this.getFrequency(this.text.trim().matchAll(/\w+/g))
        .map((count) => `${count[0]}: ${count[1]}`)
        .join('\n')
    },
    characterDistribution() {
      if (this.text.trim() === '') {
        return
      }
      return this.getFrequency(this.text.trim().matchAll(/./g))
        .map((count) => `${count[0]}: ${count[1]}`)
        .join('\n')
    },
  },
  methods: {
    getFrequency(list) {
      const frequency = {}
      for (const item of list) {
        frequency[item] = frequency[item] ? (frequency[item] += 1) : 1
      }
      return Object.entries(frequency).sort((x, y) => {
        return x[1] < y[1] ? 1 : -1
      })
    },
  },
}
</script>
