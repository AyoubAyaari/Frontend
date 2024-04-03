import { StyleSheet, Text, View ,SafeAreaView,Alert, Image,TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react';
import  handleLogin  from '../../apis/auth_api';
import {useDispatch } from 'react-redux';
import { login } from '../../state_mangm/features/userslice';
import token_decode from '../../service/service'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authenticateWithFingerprint from '../../service/authentifcations_biometric/fingerauth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verfinger, setverfinger] = useState('');

  const dispatch =useDispatch();
  const navigation = useNavigation();


  const Loginwithfinger =async()=>{

try
{
  
  const st = await authenticateWithFingerprint();
  if(st)
  {
    const value = await AsyncStorage.getItem('fingerscannkey');

     if   (value)
     { 
      
      
      const key=value.substring(0,value.indexOf(' ')+1);
     const username=value.substring(value.indexOf(' ')+1,value.lastIndexOf(' '));
     const password=value.substring(value.lastIndexOf(' ')+1);
  


              const {succes,token}=await handleLogin(username,password);

              if(succes)
              {
                          const roles=token_decode(token);
                                  
                          dispatch(login({username,password,token,roles}))

                          navigation.navigate('Texttovoice');
              }

     }

  }
}
catch(error)
{
console.log(error);
console.log('erreur en finger scanne');


}


  }



   const Loginver = async () => {

    
    try
    {
      
      const {succes,token}=await handleLogin(username,password);

       if(succes)
      {
        const roles=token_decode(token);
        
        dispatch(login({username,password,token,roles}))
        navigation.navigate('Texttovoice');
       
        }

    }
    catch(error)
    {
      console.log("error");
      console.log(error);
      Alert.alert("Authentifcation Failed","check your username or password")
    }
   
  }; 

  return (

    <View style={styles.container}>
          <SafeAreaView>
          <Image source={require('../../assets/image/login_logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      </SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={Loginver}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={Loginwithfinger}>
        <Text style={styles.buttonText}>Login with finger </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Inscrire')}>
        <Text style={styles.linkText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  linkText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
