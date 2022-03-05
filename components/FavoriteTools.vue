<template>
  <div>
    <v-btn v-for="tool in favoriteTools" :key="tool.key" icon :to="tool.to">
      <v-icon>{{ tool.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import tools from '@/assets/tools.json'
import emitter from '@/services/emitter'

export default {
  name: 'HeadlineText',
  data() {
    return {
      tools: []
        .concat(...Object.values(tools).map((tool) => tool.tools))
        .reduce(
          (tools, tool) => Object.assign(tools, { [tool.key]: tool }),
          {}
        ),
      favoriteTools: [],
    }
  },
  mounted() {
    this.updateFavorites()
    emitter.on('updateFavorites', this.updateFavorites)
  },
  methods: {
    updateFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) ?? []
      const filteredFavorites = favorites.filter((favorite) =>
        Object.prototype.hasOwnProperty.call(this.tools, favorite)
      )
      this.favoriteTools = filteredFavorites.map(
        (favorite) => this.tools[favorite]
      )
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
    },
  },
}
</script>
