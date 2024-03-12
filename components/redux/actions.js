import { ADD_TO_CART } from "./constant";

export function addToCart(item){
    // here this will calls to reducer for communication with with store
    return {
        type:ADD_TO_CART,
        data:item
    }
}