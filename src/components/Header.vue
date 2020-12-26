<template>
<div>
    <div>
      <v-app-bar
          color="deep-purple accent-4"
          dense
          dark
      >
        <v-app-bar-nav-icon  @click.stop="drawer = true">

        </v-app-bar-nav-icon>

        <v-toolbar-title>Header</v-toolbar-title>

        <v-spacer></v-spacer>


      </v-app-bar>
      <v-navigation-drawer
          class="mt-5"
          v-model="drawer"
          absolute
          temporary
      >
        <v-list
        >
          <v-list-item
              v-for="item in items"
              :key="item.title"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="ml-4 mt-1" >
                <p style="font-size: 25px">
                  {{ item.title }}
                </p>
              </v-list-item-title>

              <router-link to="/product-list">
                <v-list dense nav>
                  <v-list-item v-for="list in lists" :key="list" class="list-item">
                    <v-list-item-content>
                      {{ list.title }}
                    </v-list-item-content>
                    <v-list-item-icon>
                      <v-icon class="mt-2">{{list.icon}} </v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                </v-list>
              </router-link>

            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-icon>

        </v-icon>
      </v-navigation-drawer>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return{
      drawer: null,
      items: [
        { title: 'Inventory', icon: 'mdi-view-dashboard' },
      ],
      lists: [
        {title:'product-list',icon: 'mdi-append'}
      ],
      right: null,
    }
  },
name: "Header"
}
</script>

<style scoped>
.list-item:hover{
  background-color: gray;
  cursor: pointer;
}
</style>