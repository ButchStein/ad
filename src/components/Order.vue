<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="!loading">
          <v-img :src="order.previewImage" height="300"></v-img>
          <v-card-text>
            <h1 class="text--primary">{{ order.title }}</h1>
            <p>{{ order.description }}</p>
          </v-card-text>
        </v-card>
        <div v-else class="text-center">
          <v-progress-circular
            :size="120"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    order () {
      const id = this.id
      return this.$store.getters.orderById(id)
    },
    loading () {
      return this.$store.getters.loading
    }
  }
  // data () {
  //   return {
  //   }
  // }
  // },
  // created () {
  //   this.$store.dispatch('loadOrderById')
  // }
}
</script>
