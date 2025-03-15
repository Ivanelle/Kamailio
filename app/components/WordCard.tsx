import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Word = {
  hawaiianWord: string;
  englishTranslation: string;
  pronunciation: string;
  example: string;
};

type WordCardProps = {
  word: Word;
};

const WordCard: React.FC<WordCardProps> = ({ word }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.hawaiianWord}>{word.hawaiianWord}</Text>
      <Text style={styles.translation}>{word.englishTranslation}</Text>
      <Text style={styles.pronunciation}>{word.pronunciation}</Text>
      <Text style={styles.example}>{word.example}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 6,
    borderLeftColor: '#29b0ff', // Accent color
  },
  hawaiianWord: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff6e61', // Primary color
    marginBottom: 8,
  },
  translation: {
    fontSize: 18,
    color: '#2c3e50', // Dark text for contrast
    marginBottom: 8,
  },
  pronunciation: {
    fontSize: 16,
    color: '#ffa142', // Secondary color
    marginBottom: 8,
    fontStyle: 'italic',
  },
  example: {
    fontSize: 16,
    color: '#88d8b0', // Tertiary color
    marginBottom: 16,
    fontStyle: 'italic',
  },
});

export default WordCard;