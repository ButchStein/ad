<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="mx-5" v-if="!loading">
        <v-card
          class="elevation-6 mx-auto"
          v-for="order in orders"
          :key="order.id"
          max-width="800"
        >
          <v-list-item>
            <v-list-item-content>
              <v-row class="text--primary mx-0">
                <div class="mb-4">{{order.id}}</div>
                <v-spacer></v-spacer>
                <div class="mb-4 font-weight-bold">{{order.price}}</div>
              </v-row>
              <v-list-item-title class="headline mb-2">{{order.title}}</v-list-item-title>
              <v-list-item-subtitle>{{order.address}}</v-list-item-subtitle>
              <v-list-item-subtitle class="justify-end">{{order.sellerName}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-carousel
            hide-delimiters
            show-arrows-on-hover
            height="400">
            <v-carousel-item
              v-for="(item,i) in order.images"
              :key="i"
              :src="item"
            ></v-carousel-item>
          </v-carousel>
          <v-card-text>
            {{order.description}}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-layout v-else>
        <v-flex xs12 class="text-center">
          <v-progress-circular
            :size="120"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    orders () {
      return this.$store.getters.orders
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  created () {
    const id = this.id
    this.$store.dispatch('loadOrderById', id)
  }
}
</script>
