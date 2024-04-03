import React from 'react'
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login' ;
import Inscrire from '../screens/auth/Inscrire' ;
import Home_page from '../screens/homepage/home_page'
import User_dashboard from '../screens/dashboards/user_dashboard/User_dashboard';
import User_tchat from '../screens/dashboards/user_dashboard/user_tchat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/dashboards/user_dashboard/profile';
import Settings from '../screens/dashboards/user_dashboard/settings';
import App from '../screens/dashboards/user_dashboard/Texttovoice';
const Stack=createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/image/home.png') : require('../assets/image/home.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }} name="Home" component={Home_page} />
      <Tab.Screen  options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/image/dashboard.jpg') : require('../assets/image/dashboard.jpg')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }} name ="DASHBOARD" component={User_dashboard} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/image/chat.png') : require('../assets/image/chat.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }} name ="CHAT" component={User_tchat} />
      <Tab.Screen  options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../assets/image/profile.webp') : require('../assets/image/profile.webp')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }} name ="PROFILE" component={Profile} />
    </Tab.Navigator>
  );
};

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inscrire" component={Inscrire} />
        <Stack.Screen name="Texttovoice" component={ App} />
         <Stack.Screen name='settings' component={Settings}/>
        <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;
