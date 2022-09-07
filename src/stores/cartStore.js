import { defineStore, acceptHMRUpdate } from "pinia";
import items from "@/data/cart.json"
export const useCartStore = defineStore("cartStore",{
    state: ()=>{
return{
items : items,
}
    }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
  }