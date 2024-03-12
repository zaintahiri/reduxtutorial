/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Alert,
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import { UseDispatch } from 'react-redux';
//useDispatch
import { addToCart } from './redux/actions';
import { useDispatch } from 'react-redux';
const Product = (props) => {
    const prod=props.item
    // console.warn(item);
    const dispatch=useDispatch()
    const  handleAddToCart =(prod)=>{
        dispatch(addToCart(prod))
        // console.warn("Product",prod)
    }
   return (
    <View style={{borderWidth:2,borderRadius:20,borderColor:'red',margin:5,padding:10}}>
        <Text style={{fontSize:24}} > {prod.name} </Text>
        <Text style={{fontSize:24}} > {prod.color} </Text>
        <Text style={{fontSize:24}} > {prod.price} </Text>
        <View style={{alignItems:'flex-end'}}>
            <Button title='Add to Cart' onPress={()=>{handleAddToCart(prod)}} /></View>
        
    </View>
  );
}


export default Product;
