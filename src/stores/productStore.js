import { defineStore, acceptHMRUpdate } from "pinia";

export const useProductStore = defineStore("product",{
    state: ()=>{
return{
    products : [],
}
    },
    actions:{
      async  fetchData(){
            const res = await fetch("/products.json");
            this.products = await res.json();
            
        }
    }
}

)
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))}