import React, { useEffect, useState } from 'react';
import { View, Text, Button,StyleSheet,Image,TouchableOpacity } from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { useSelector } from 'react-redux';
import Authentifcation_validator from '../../../service/authentifcations_biometric/authentification_validator';

const Settings = () => {
  const [ver, setVer] = useState(false);
  const state = useSelector((state) => state.user.value);

  useEffect(() => {
    const checkBiometrics = async () => {
      try {
        const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
        const { biometryType } = await rnBiometrics.isSensorAvailable();
        if (biometryType === BiometryTypes.Biometrics) {
          console.log('Biometrics available.');
          setVer(true);
        } else {
          console.log('Biometrics not available.');
        }
      } catch (error) {
        console.error('Error checking biometrics:', error);
      }
    };

    checkBiometrics();
  }, []);

  const handleButtonPress = () => {
    Authentifcation_validator(state.username,state.password);
  };

  return (
    <View>
    
   
      {ver && (
        <TouchableOpacity style={styles.button}
          title="Activate Fingerprint"
          onPress={handleButtonPress}>
            <Image
          source={require('../../../assets/image/fingerscann.png')} 
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Activate </Text>
      </TouchableOpacity>)}
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
    width: 50,
    height: 50,
    marginRight: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },

})
export default Settings;
