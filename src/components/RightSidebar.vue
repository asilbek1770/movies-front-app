<template>
   <div>

     <v-navigation-drawer
         absolute
         right
         class="right-sidebar "
         :style="drawer ? 'width: 1000px' : 'width: 70px'"
     >

       <b-icon
           :icon="drawer ? 'chevron-double-right' : 'chevron-double-left' "
           @click="drawer = !drawer"
           class="icon-left-right"
       ></b-icon>




       <v-card
             class="mx-auto overflow-hidden"
             height="46"
             fixed
       >
         <v-app-bar
               color="deep-purple"
               class="bg-white"
               style="border-radius: 0"
         >
         </v-app-bar>
       </v-card>
       <b-form
           class="bg-secondary py-2"
           style="opacity: 0.6">
         <b-form-input :value="itemprop.attributes.name"
                       class="mx-5 w-75 bg-light "
                       style="height: 33px"
         >
         </b-form-input>
       </b-form>
     </v-navigation-drawer>
   </div>
</template>

<script>
export default {
  itemName:'',
  props: ['itemprop'],
  name: "RightSidebar",
  data(){
    return{
      drawer: false,
      group: null,
    }
  }
}
</script>

<style scoped>
.icon-left-right{
  cursor: pointer;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 52px;
  background-color: darkslategrey;
  border-radius: 50%;
  color: white;
  padding: 5px;
  z-index: 1;
}
.icon-left-right:hover{
  box-shadow: 2px 2px 8px gray;
}
.right-sidebar{
  box-shadow: 2px 2px 8px grey;
  margin-top: 90px;
  display: block;
}
</style>