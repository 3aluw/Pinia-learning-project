import { defineStore, acceptHMRUpdate } from "pinia";
import { useProductStore } from "./productStore";

export const useCartStore = defineStore("cartStore",{
    state: ()=>{
return{

items : [],
}
    },
    getters:{
        totalCount(){
        return this.items.reduce((previous,current)=> previous + current.count,0)
        },
        totalPrice(){
            let total = 0 
             this.items.forEach((i)=>{
              let res = useProductStore().products.find((e) => {return e.id === i.id });
           let  itemTotal = i.count* res.price;
            
           total += itemTotal;
              
            })
            return total
        },
        isCartEmpty(){
           
            return this.items.length === 0;
        }
    },
    actions:{
        addItem(count,productId){

          let res = this.items.find( e=> productId == e.id )
         if(count){
         if(res){
            res.count += count
         }else{
            this.items.push({id : productId, count: count}) ;
            
         }
         alert(`${count} ${ count >1 ? "items" : "item"} had been added`);
         window.localStorage.setItem("items", JSON.stringify(this.items));
         
     
        }
          
        }
          
        }
    }
)
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
  }