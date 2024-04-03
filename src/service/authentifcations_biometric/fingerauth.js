
import ReactNativeBiometrics from 'react-native-biometrics';

const authenticateWithFingerprint =async () => {
   
try{
    const result = new ReactNativeBiometrics();



   return (await result.simplePrompt({ promptMessage: 'Confirm fingerprint' })).success

     
}
catch(error)
{console.log(error);}
    }
  export default authenticateWithFingerprint;