import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import WordCard from './components/WordCard';
import NavigationButtons from './components/NavigationButtons';
import hawaiianWords from './dummydata/hawaiianWords';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next word
  const goToNextWord = () => {
    if (currentIndex < hawaiianWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous word
  const goToPreviousWord = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <WordCard word={hawaiianWords[currentIndex]} />
        <NavigationButtons
          onNext={goToNextWord}
          onPrevious={goToPreviousWord}
          isFirst={currentIndex === 0}
          isLast={currentIndex === hawaiianWords.length - 1}
        />
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
});

export default App;