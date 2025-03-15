import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import WordCard from './components/WordCard';
import hawaiianWords from './dummydata/hawaiianWords';

const App: React.FC = () => {
  // Function to pick a random word
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * hawaiianWords.length);
    return hawaiianWords[randomIndex];
  };

  // State to hold the current random word
  const [randomWord, setRandomWord] = useState(getRandomWord());

  // Function to update the random word
  const pickRandomWord = () => {
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <WordCard word={randomWord} />
        <TouchableOpacity onPress={pickRandomWord} style={styles.button}>
          <Text style={styles.buttonText}>Show Random Word</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Light background for contrast
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#29b0ff', // Accent color
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;