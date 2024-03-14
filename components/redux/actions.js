import { ADD_TO_CART,REMOVE_FROM_CART } from "./constant";

export function addToCart(item){
    // here this will calls to reducer for communication with with store
    return {
        type:ADD_TO_CART,
        data:item
    }
}

export function removeFromCart(name){
    //console.warn("Name",name)
    // here this will calls to reducer for communication with with store
    return {
        type:REMOVE_FROM_CART,
        data:name
    }
}