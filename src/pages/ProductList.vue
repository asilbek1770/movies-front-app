<template>
  <div class="p-2 mt-5">

    <v-simple-table dark>
      <template v-slot:default>
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
    }
  },

  methods: {
      click(item){
        alert(item.attributes.name)
      }
  }

}
</script>

<style scoped>

</style>