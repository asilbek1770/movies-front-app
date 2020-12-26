<template>
<div>
    <div>
      <v-app-bar
          color="deep-purple accent-4"
          dense
          dark
      >
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer" >
        </v-app-bar-nav-icon>
        <router-link to="/home">
          <v-toolbar-title class="home px-2">Home</v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-navigation-drawer
          class="mt-5"
          v-model="drawer"
          absolute
          temporary
      >
        <v-list class="py-0">
          <v-list-item
              v-for="item in items"
              :key="item.title"
          >
            <v-list-item-icon>
              <v-icon style="color: darkred">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="ml-4 mt-0" >
                <p style="font-size: 25px">
                  {{ item.title }}
                </p>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <b-icon icon="x-square-fill" @click="drawer = false" class="delete-icon mt-1">
              </b-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>

        <router-link
            :to="list.link"
            v-for="list in lists"
            :key="list.title"
            class="bg-white"
        >
          <v-list dense class="list py-0" >
            <v-list-item-group
            >
              <v-list-item
              >
                <v-list-item-content>
                  <v-list-item-title  class="pl-5 ml-1">{{ list.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <b-icon :icon="list.icon" class="mt-1 icon" style="font-size: 20px"></b-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </router-link>
      </v-navigation-drawer>


    </div>
</div>
</template>

<script>
export default {
  data() {
    return{
     selectedItem: false,
      items: [
        { title: 'Inventory', icon: 'mdi-view-dashboard' },
      ],
      lists: [
        {title: 'Product List', icon: 'chevron-right',link: "/product-list",exact: 'exact'},
        {title: 'Product Add', icon: 'plus',link: "",exact: ''},
      ],
     drawer: false,
    }
  },
name: "Header"
}
</script>

<style scoped>


.icon{
  transition: 0.4s;
  margin-right: 40px;
}

.list:hover .icon{
  margin-right: 10px;
}
.home{
  color: lightgrey;
  transition: 0.5s;
}
.home:hover{
  list-style: none;
  text-decoration: none;
  background-color: lightgrey;
  border-radius: 2px;
  color: black;

}
.delete-icon{
  font-size: 25px;
  top: 0px;right: 4px;
  position: absolute;
  transition: 0.2s;
}
.delete-icon:hover{
  font-size: 30px;
  cursor: pointer;
}
.router-link-active{
  background-color: white!important;
}
</style>