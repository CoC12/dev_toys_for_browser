<template>
  <div class="d-flex">
    <h2 class="mt-10">
      {{ headlineText }}
    </h2>
    <v-spacer></v-spacer>
    <div v-if="enableFavorite" class="d-flex align-end mr-10">
      <v-btn v-show="!includedFavorites" @click="addToFavorites">
        <v-icon class="mr-2">mdi-star</v-icon>
        Add to Favorites
      </v-btn>
      <v-btn v-show="includedFavorites" @click="removeFromFavorites">
        <v-icon class="mr-2">mdi-star</v-icon>
        Remove from Favorites
      </v-btn>
    </div>
  </div>
</template>

<script>
import emitter from '@/services/emitter'

export default {
  name: 'HeadlineText',
  props: {
    headlineText: {
      type: String,
      default: '',
    },
    enableFavorite: {
      type: Boolean,
      default: false,
    },
    toolKey: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      includedFavorites: this.favorites().includes(this.toolKey),
    }
  },
  methods: {
    favorites() {
      return JSON.parse(localStorage.getItem('favorites')) ?? []
    },
    addToFavorites() {
      const favorites = this.favorites()
      if (!favorites.includes(this.toolKey)) {
        favorites.push(this.toolKey)
        localStorage.setItem('favorites', JSON.stringify(favorites))
      }
      this.includedFavorites = true
      emitter.emit('updateFavorites')
    },
    removeFromFavorites() {
      const favorites = this.favorites().filter(
        (favorite) => favorite !== this.toolKey
      )
      localStorage.setItem('favorites', JSON.stringify(favorites))
      this.includedFavorites = false
      emitter.emit('updateFavorites')
    },
  },
}
</script>
