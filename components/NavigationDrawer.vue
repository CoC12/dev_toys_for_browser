<template>
  <div>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="isOpen = !isOpen" class="d-block d-lg-none" />
      <v-icon>
        mdi-xml
      </v-icon>
      <v-toolbar-title v-text="title" class="ml-4" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="isOpen"
      :expandOnHover="isExpandOnHover"
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
  computed: {
    isExpandOnHover () {
      switch (this.$vuetify.breakpoint.name) {
        case 'lg': return true
        case 'xl': return true
        default: return false
      }
    },
  },
  data() {
    return {
      title: 'Dev Toys for Browser',
      isOpen: true,
      items: items,
    }
  },
}
</script>
