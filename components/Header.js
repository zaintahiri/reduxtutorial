/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {  
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';



function Header() {
  const cartData=useSelector((state)=>state.reducer)
  const [cardItems,setCardItems]=useState(0)
  useEffect(()=>{
    setCardItems(cartData.length)
  },[cartData] )
   return (
    <View style={{backgroundColor:'orange',alignItems:'flex-end',padding:20}}>
      <View style={{backgroundColor:'yellow',height:40,width:50,borderRadius:15,alignItems:'center'}}>
          <Text style={{color:'black',fontSize:30,}}>{cardItems}</Text>
      </View>
        
    </View>
  );
}


export default Header;
