<template>
  <div v-if="!loading">
    <v-container>
      <v-row justify="center">
        <v-col class="col-xs-12 col-sm-6 col-lg-4">
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-center pt-5">
          <v-progress-circular
            :size="120"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
