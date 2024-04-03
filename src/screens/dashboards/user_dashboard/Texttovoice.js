import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import Tts from 'react-native-tts';

const App = () => {
  const [textToSpeak, setTextToSpeak] = useState('');

  const speakText = () => {
    if (textToSpeak.trim() === '') {
      Alert.alert('Message vide', 'Veuillez écrire quelque chose avant de faire parler.');
      return;
    }

    try {
      Tts.speak(textToSpeak);
    } catch (error) {
      console.error('Erreur lors de la synthèse vocale:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 20, width: '80%' }}
        multiline
        numberOfLines={4}
        placeholder="Entrez le texte que vous souhaitez que l'application lise à voix haute."
        onChangeText={setTextToSpeak}
        value={textToSpeak}
      />
      <Button title="Lire le texte" onPress={speakText} />
    </View>
  );
};

export default App;
