<template >
  <div class="ml-2 mr-5">
    <v-card style="border-radius: 0; box-shadow: 0 0 0"
            class="mt-4">
      <v-card-title class="pt-0 mt-0">
        <v-text-field
            class="border-top"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
    </v-card>
    <v-simple-table dark >
      <template v-slot:default class="p-1 ">
        <thead class="bg-secondary">
        <tr>
          <th class="text-left" :key="title.value" v-for="title in titles">{{title.text}}</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in body"
            :key="item.id"
            @click="click(item)"
            class="tbody"
            :style="item.id === selectedItem.id ? 'background-color: darkslategrey' : ''"
        >
          <td>{{ item.attributes.name }}</td>
          <td>{{ item.attributes.itemType }}</td>
          <td>{{ item.attributes.categoryName }}</td>
          <td>{{ item.attributes.barcode }}</td>
          <td>{{ item.attributes.totalQuantityOnHand }}</td>
          <td>$ {{ item.attributes.price }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <RightSidebar
            :itemprop="selectedItem"
    />

  </div>
</template>

<script>
import RightSidebar from "@/components/RightSidebar";
import data from "../services/datas.json"
export default {
  name: "ProductList",
  components: {RightSidebar},
  data() {
    return{
        titles:
          [
            {
              text: 'Item and description',
              align: 'start',
              sortable: false,
              value: 'name',
            },
            { text: 'Type', value: 'type' },
            { text: 'Category', value: 'category' },
            { text: 'Barcode', value: 'barcode' },
            { text: 'Quantity', value: 'quantity' },
            { text: 'Normal Price', value: 'normal price' },
        ],
        body: data,
        search: '',
        selectedItem: {}
    }
  },

  methods: {
        async click(item){
          this.selectedItem = item;

          if( item === this.selectedItem ){
            item.attributes.isActive = true
          }else{
            item.attributes.isActive = false
          }
        }
  }

}
</script>

<style scoped>
.tbody{
  transition: 0.5s;
}
.tbody:hover{
  transform: scale(1.01);
  cursor: pointer;
  background-color: darkslategrey!important;
}
</style>