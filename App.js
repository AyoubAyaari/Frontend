import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Index from '../Frontend/src/navigation/Index';


import {store} from '../Frontend/src/state_mangm/Store';
import { Provider } from 'react-redux';



const App = () => {
  return (
    <Provider store={store}>
   <Index></Index>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})