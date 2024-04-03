import React, { useState,useEffect  } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; // Import TouchableOpacity from react-native package
import handleSignUp from '../../apis/signup.js';


const Inscrire = ({ navigation, route }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
   




    const handleSignUpPress = async () => {
        try {
            // Call the handleSignUp function with the provided username, password, email, and the captured photo path
            await handleSignUp(username, password, email);
            navigation.navigate('Login');
            // Handle success if needed
            console.log('Sign-up successful');
        } catch (error) {
            // Handle errors
            console.error('Sign-up error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inscrire</Text>
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
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                <Text style={styles.buttonText}>Inscrire</Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
        marginBottom: 20, // Add margin bottom here
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
export default Inscrire;
