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
  name: 'UrlEncoder',
  data() {
    return {
      headlineText: 'URL Encoder / Decoder',
      toolKey: 'url',
      input: '',
      conversion: 'encode',
    }
  },
  computed: {
    output() {
      try {
        return this.conversion === 'encode'
          ? encodeURIComponent(this.input)
          : decodeURIComponent(this.input)
      } catch (e) {
        return ''
      }
    },
  },
}
</script>
