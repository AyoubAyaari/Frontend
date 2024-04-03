import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';
const Home_page = () => {

  
  const state =useSelector((state)=>state.user.value)



  return (
    <View>
      <SafeAreaView>
      <Text>{state.username}</Text>
      <Text>{state.password}</Text></SafeAreaView>
    </View>
  )
}

export default Home_page

const styles = StyleSheet.create({})