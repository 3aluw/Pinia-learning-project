<script setup >
  
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useCartStore } from "./stores/cartStore";
import { useProductStore } from "./stores/productStore";
import { onMounted } from "vue";

useCartStore()
onMounted(()=>{
  useProductStore().fetchData();
  useCartStore().items = JSON.parse(window.localStorage.getItem("items"))
})


</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in useProductStore().$state.products"
        :key="product.id"
        :product="product"
        @add-to-cart="useCartStore().addItem"
      />
    </ul>
  </div>
</template>
