<template >
  <div class="mx-2">
    <v-card style="border-radius: 0; box-shadow: 0 0 0"
            class="mt-4 border-right border-left">
      <v-card-title class="pt-0 mt-0">
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
    </v-card>
    <v-simple-table dark>
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

  </div>

</template>

<script>
import data from "../services/datas.json"
export default {
  name: "ProductList",
  data() {
    console.log(this.search)
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
    }
  },

  methods: {
      click(item){
        alert(item.attributes.name)
      },

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

}
</style>