<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list dense>
        <v-list-item
          link
          v-for="link in links"
          :key="link.title"
          :to="link.url">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Test Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text
               v-for="lin of links"
               :key="lin.title"
               :to="lin.url"
               class="hidden-sm-and-down"
        >
          <v-icon left>{{lin.icon}}</v-icon>{{lin.title}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
     <router-view></router-view>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    links: [
      { title: 'Объявления', icon: 'mdi-bulletin-board', url: '/orders' }
    ]
  })
}

</script>
