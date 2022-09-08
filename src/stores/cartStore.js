import { defineStore, acceptHMRUpdate } from "pinia";




export const useCartStore = defineStore("cartStore",{
    state: ()=>{
return{
    
items : [],
}
    },
    actions:{
        addItem(count,productId){
console.log(productId)
          let res = this.items.find( e=> productId == e.id )
         if(res){
            res.count += count
         }else{
            this.items.push({id : productId, count: count})
         }
           
        }
          
        }
    }
)
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
  }