import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Index from '../pfe_front/src/navigation/Index';


import {store} from '../pfe_front/src/state_mangm/Store';
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