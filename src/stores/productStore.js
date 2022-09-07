import { defineStore, acceptHMRUpdate } from "pinia";
import products from "@/data/products.json"
export const useProduceStore = defineStore("product",{
    state: ()=>{
return{
    products : products,
}
    }
}

)
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProduceStore, import.meta.hot))}