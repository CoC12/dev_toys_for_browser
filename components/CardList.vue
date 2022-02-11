<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.key"
        class="col-6 col-md-4 col-lg-3 col-xl-2"
      >
        <nuxt-link :to="item.to" class="text-decoration-none">
          <v-card outlined height="100%">
            <div class="d-flex justify-center">
              <v-icon
                class="mdi-48px pa-6 ma-3 rounded-lg"
                :style="{ 'background-color': '#363636' }"
              >
                {{ item.icon }}
              </v-icon>
            </div>
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              {{ item.text }}
            </v-card-text>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
