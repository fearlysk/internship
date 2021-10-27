<template>
  <div class="product_list_wrapper">
    <h1 style="text-align: center">Товары</h1>
      <div class="product_list">    
        <div v-for="product in products" :key="product.id" class="product_card">
            <img height="240" width="248" :src="product.image" alt="Image Not Found" />
            <hr>
            <p>Название: {{ product.title }}</p>
            <p>Цена: {{ product.price }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
   name: "ProductsList",
    data() {
        return {
            products: [
                {id: 1, image: require("../../assets/battlefield.jpg"), title: "Battlefield 1", price: "49.99$"},
                {id: 2, image: require("../../assets/gta.jpg"), title: "Grand Theft Auto V", price: "39.99$"},
                {id: 3, image: require("../../assets/csgo.jpg"), title: "Counter-Strike: Global Offensive", price: "9.99$"},
                {id: 4, image: require("../../assets/pubg.jpg"), title: "PLAYERUNKNOWN'S BATTLEGROUNDS", price: "19.99$"}
            ]
        }
    }
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'ProductsList.scss';
</style>