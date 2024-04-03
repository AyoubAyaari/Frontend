import ReactNativeBiometrics from 'react-native-biometrics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const Authentifcation_validator = (username,password) => {
  
  const rnBiometrics = new ReactNativeBiometrics();
  
  rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' }).then((resultObject) => {
      const { success } = resultObject;
      if (success) {
        rnBiometrics
          .createKeys()
          .then((resultObject) => {
            const { publicKey } = resultObject;
            const key = publicKey + ' ' +username+ ' ' +password;
            storeBiometricKey(key);
           
          })
          .catch((error) => {
            console.error('Error generating key:', error);
          });
        console.log('successful biometrics provided');
      } else {
        console.log('user cancelled biometric prompt');
      }
    })
    .catch(() => {
      console.log('biometrics failed');
    });

    const storeBiometricKey = async (key) => {
        try {
          await AsyncStorage.setItem('fingerscannkey', key);
         
          console.log('Biometric key stored successfully.');
          console.log(key);
          Alert.alert('nottfication','YOUR FINGERPRINT ADD SUCCUFFLY');
        } catch (error) {
          console.error('Error storing biometric key:', error);
        }
      };
};

export default Authentifcation_validator;
