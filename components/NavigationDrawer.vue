<template>
  <div>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon
        class="d-block d-lg-none"
        @click.stop="isOpen = !isOpen"
      />
      <v-icon> mdi-xml </v-icon>
      <v-toolbar-title class="ml-4" v-text="title" />
      <FavoriteTools class="ml-8" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="isOpen"
      :expand-on-hover="isExpandOnHover"
      clipped
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, key) in items"
          :key="key"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import items from '@/assets/tools.json'

export default {
  name: 'NavigationDrawer',
  data() {
    return {
      title: 'Dev Toys for Browser',
      isOpen: true,
      items,
    }
  },
  computed: {
    isExpandOnHover() {
      switch (this.$vuetify.breakpoint.name) {
        case 'lg':
          return true
        case 'xl':
          return true
        default:
          return false
      }
    },
  },
}
</script>
