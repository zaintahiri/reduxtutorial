import { Alert } from "react-native";
import { ADD_TO_CART ,REMOVE_FROM_CART} from "./constant";
const initialState=[];

export const reducer=(state=initialState,action)=>{
    // console.warn("Type : "+action.type)
    switch(action.type){
        case ADD_TO_CART:{
                return [...state,action.data]
        }
        case REMOVE_FROM_CART:{
            let result=state.filter(element=>{
                return element.name != action.data
            })
            return [...result]
        }
        default:{
            return initialState;
        }
    }
}