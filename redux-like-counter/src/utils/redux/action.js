import { ADD_TO_CART, FETCH_PRODUCTS_SUCCESS } from "./actionType"

export const addToCart=(item)=>{
    return{
        type:ADD_TO_CART,
        payload:item
    }
}
export const fetchSuccess=(products)=>{
    return{
        type:FETCH_PRODUCTS_SUCCESS,
        payload:products
    }
}