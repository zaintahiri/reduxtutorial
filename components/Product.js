/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
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
import {addToCart, removeFromCart} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
const Product = props => {
  const prod = props.item;
  const [isAdded, setIsAdded] = useState(false);
  const itemData = useSelector(state => state.reducer);
  // console.warn(item);
  const dispatch = useDispatch();
  const handleAddToCart = prod => {
    dispatch(addToCart(prod));
    // console.warn("Product",prod)
  };

  const handleRemoveFromCart = prod => {
    // 
    dispatch(removeFromCart(prod.name));
  };

  useEffect(() => {
  
    // if (itemData && itemData.length) {
      // itemData.forEach(element => {
      //   if (prod.name === element.name) {
      //     setIsAdded(true);
      //   }
      // });

      
    // }

      let result = itemData.filter((element)=>{
        return element.name===prod.name
      })
      if(result.length){
        setIsAdded(true)
      }else{
        setIsAdded(false)
      }
  }, [itemData]);
  return (
    <View
      style={{
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'red',
        margin: 5,
        padding: 10,
      }}>
      <Text style={{fontSize: 24}}> {prod.name} </Text>
      <Text style={{fontSize: 24}}> {prod.color} </Text>
      <Text style={{fontSize: 24}}> {prod.price} </Text>
      <View style={{alignItems: 'flex-end'}}>
        {isAdded ? (
          <Button title="Remove to Cart" onPress={()=>{handleRemoveFromCart(prod)}}/>
        ) : (
          //
          <Button
            title="Add to Cart"
            onPress={() => {
              handleAddToCart(prod);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Product;
