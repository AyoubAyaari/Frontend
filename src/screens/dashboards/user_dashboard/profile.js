import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const goToSettings = () => {
    // Navigate to the settings screen
    navigation.navigate('settings');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToSettings}>
        <Image
          source={require('../../../assets/image/settings.png')} 
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', 
  },
 
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default Profile;
