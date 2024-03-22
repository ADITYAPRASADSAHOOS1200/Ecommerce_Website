import { createSlice } from "@reduxjs/toolkit";


const Cartslice=createSlice({
   name:'cart',
   initialState:{
     Cart:[],
     amount:0,
     TotalAmount:0,
     TotalPrice:0,
   },
   reducers:{
       addtocart:(state,action)=>{

        const ProductId=action.payload

        const exist=state.Cart.find((product)=>product.id === ProductId.id 
        && product.size === ProductId.selectedSize  && product.color === ProductId.Color )

        if(exist){

         exist.amount++
         exist.TotalPrice += ProductId.price
         state.TotalAmount++
         state.TotalPrice += ProductId.price
        
        }else{
          state.Cart.push({
            id:ProductId.id,
            size:ProductId.selectedSize,
            color:ProductId.Color,
            text:ProductId.text,
            img:ProductId.img,
            price:ProductId.price,
            amount:1,
            TotalPrice:ProductId.price,
            name:ProductId.name,
          }) 
          state.TotalAmount ++
          state.TotalPrice += ProductId.price
         }
        
       },

       removeCart:(state,action)=>{
     
         const ProductId=action.payload
      
       
         const exist = state.Cart.find(
          (product) =>
            product.id === ProductId.id &&
            product.size === ProductId.size &&
            product.color === ProductId.color
        );
  
      
        if (exist.amount === 1) {
          state.Cart = state.Cart.filter(
            (product) =>
              product.id !== ProductId.id ||
              product.size !== ProductId.size ||
              product.color !== ProductId.color
          );
        }
  
         else{
           exist.amount--,
           exist.TotalPrice -= ProductId.price
          
          }
          state.TotalAmount--,
          state.TotalPrice -= ProductId.price
     },

      }
})

export const {addtocart,TotalAmount,TotalPrice,removeCart} = Cartslice.actions
export default Cartslice.reducer