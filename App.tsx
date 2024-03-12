/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
} from 'react-native';

import Header from './components/Header';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Product from './components/Product';




function App(): React.JSX.Element {
 
  const list=[{name:'Samsung',color:'White',price:'62000',imageUrl:''},
              {name:'Apple',color:'Black',price:'122000',imageUrl:''},
              {name:'Redme',color:'Orange',price:'32000',imageUrl:''},
              {name:'Realme 5i',color:'Red',price:'22000',imageUrl:''},
              {name:'Note infinix',color:'Red',price:'44000',imageUrl:''},
              {name:'LG 9',color:'Green',price:'33000',imageUrl:''},
              {name:'Samsung Pro',color:'Pink',price:'42000',imageUrl:''},
              {name:'Infinix 10',color:'Gray',price:'12000',imageUrl:''}]
  return (
    <View>
      <Header />
    
      <ScrollView style={{marginBottom:100}}>
        
          {
              list.map((item)=><Product item={item}/>)    
          }

      </ScrollView>
   </View>
    
  );
}

export default App;
