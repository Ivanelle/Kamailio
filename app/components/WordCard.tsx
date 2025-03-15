import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeartButton from './HeartButton';

const WordCard = ({ word }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.hawaiianWord}>{word.hawaiianWord}</Text>
      <Text style={styles.translation}>{word.englishTranslation}</Text>
      <Text style={styles.pronunciation}>{word.pronunciation}</Text>
      <Text style={styles.example}>{word.example}</Text>
      <HeartButton word={word} />
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
    borderLeftColor: '#29b0ff',
  },
  hawaiianWord: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff6e61',
    marginBottom: 8,
  },
  translation: {
    fontSize: 18,
    color: '#2c3e50',
    marginBottom: 8,
  },
  pronunciation: {
    fontSize: 16,
    color: '#ffa142',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  example: {
    fontSize: 16,
    color: '#88d8b0',
    marginBottom: 16,
    fontStyle: 'italic',
  },
});

export default WordCard;