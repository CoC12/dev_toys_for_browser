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
              v-model="textType"
              :items="textTypeOptions"
              item-text="label"
              item-value="value"
              hide-details="true"
              solo
            ></v-select>
          </v-col>
        </v-row>
        <v-row v-show="textType === 'letters'">
          <v-col class="col-12 col-md-4">
            <v-switch
              v-model="lowercaseLetters"
              label="Include Lowercase Letters"
              hide-details="true"
            ></v-switch>
            <v-switch
              v-model="uppercaseLetters"
              label="Include Uppercase Letters"
              hide-details="true"
            ></v-switch>
            <v-switch
              v-model="numbers"
              label="Include Numbers"
              hide-details="true"
            ></v-switch>
            <v-switch
              v-model="symbols"
              label="Include Symbols"
              hide-details="true"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-show="textType === 'letters'" class="col-4">
            <v-text-field
              v-model.number="length"
              label="Text Length"
              type="number"
              step="1"
              min="1"
            ></v-text-field>
          </v-col>
          <v-col v-show="textType === 'loremIpsum'" class="col-4">
            <v-select
              v-model="loremIpsumType"
              :items="loremIpsumTypeOptions"
              item-text="label"
              item-value="value"
              hide-details="true"
              solo
            ></v-select>
          </v-col>
          <v-col class="col-4">
            <v-text-field
              v-model.number="quantity"
              label="Quantity"
              type="number"
              step="1"
              min="1"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12">
            <v-textarea v-model="output" filled auto-grow></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { LoremIpsum } from 'lorem-ipsum'
import generator from '@/services/text_generator.js'

export default {
  name: 'DummyTextGenerator',
  data() {
    return {
      headlineText: 'Dummy Text Generator',
      toolKey: 'dummy_text_generator',
      lorem: new LoremIpsum(),
      textType: 'letters',
      textTypeOptions: [
        {
          label: 'Letters',
          value: 'letters',
        },
        {
          label: 'Lorem Ipsum',
          value: 'loremIpsum',
        },
      ],
      loremIpsumType: 'paragraphs',
      loremIpsumTypeOptions: [
        {
          label: 'Paragraphs',
          value: 'paragraphs',
        },
        {
          label: 'Sentences',
          value: 'sentences',
        },
        {
          label: 'Words',
          value: 'words',
        },
      ],
      lowercaseLetters: true,
      uppercaseLetters: false,
      numbers: false,
      symbols: false,
      length: 16,
      quantity: 1,
    }
  },
  computed: {
    output() {
      if (this.textType === 'letters') {
        return generator.generate(
          this.length,
          this.quantity,
          this.lowercaseLetters,
          this.uppercaseLetters,
          this.numbers,
          this.symbols
        )
      }

      if (this.loremIpsumType === 'paragraphs') {
        return this.lorem.generateParagraphs(this.quantity)
      }
      if (this.loremIpsumType === 'sentences') {
        return this.lorem.generateSentences(this.quantity)
      }
      if (this.loremIpsumType === 'words') {
        return this.lorem.generateWords(this.quantity)
      }
      return null
    },
  },
}
</script>
