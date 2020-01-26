<template>
  <v-container>
    <v-flex xs12 class="text-center pt-5" v-if="loading">
      <v-progress-circular
        :size="120"
        :width="4"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </v-flex>
    <v-row v-else-if="!loading && orders.length !== 0">
      <v-col>
        <h1 class="text--secondary mb-3">Orders</h1>
      </v-col>
    </v-row>
    <v-flex xs12 class="text-center" v-else>
      <h1 class="text--secondary">You have no orders!</h1>
    </v-flex>
    <v-row justify="center">
      <v-col
        class="col-xs-12 col-sm-6 col-lg-4"
        v-for="order in orders"
        :key="order.id"
      >
        <v-card
            class="mx-auto"
            max-width="600"
            raised
            link
            :to="`order/${order.id}`"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{order.id}}</div>
                <v-list-item-title class="headline mb-1">{{ order.title}}</v-list-item-title>
                <v-list-item-subtitle>{{order.address}}</v-list-item-subtitle>
                <v-list-item-subtitle class="text--primary font-weight-bold">{{order.price}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="100"
              >
                <v-img :src="order.previewImage"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    orders () {
      return this.$store.getters.orders
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  created () {
    this.$store.dispatch('fetchOrders')
  }
}
</script>
<style lang="scss">
.order{
  border: 1px solid black;
  margin-bottom: 20px;
  box-shadow: 0 0 5px 2px rgba(0,0,0,0.25);
}
</style>
