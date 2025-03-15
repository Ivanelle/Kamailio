import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeartButton = ({ word }) => {
  const [isHearted, setIsHearted] = useState(false);

  // Check if the word is already hearted when the component mounts or the word changes
  useEffect(() => {
    const checkIfHearted = async () => {
      try {
        const heartedWords = JSON.parse((await AsyncStorage.getItem('heartedWords')) || '[]');
        // Use a unique identifier (e.g., `hawaiianWord`) if `id` is not available
        setIsHearted(heartedWords.some((w) => w.hawaiianWord === word.hawaiianWord));
      } catch (error) {
        console.error('Error checking hearted words:', error);
      }
    };

    checkIfHearted();
  }, [word]); // Add `word` to the dependency array

  // Toggle the hearted state
  const toggleHeart = async () => {
    try {
      const heartedWords = JSON.parse((await AsyncStorage.getItem('heartedWords')) || '[]');
      let updatedHeartedWords;

      if (isHearted) {
        // Remove the word from heartedWords
        updatedHeartedWords = heartedWords.filter((w) => w.hawaiianWord !== word.hawaiianWord);
      } else {
        // Add the word to heartedWords
        updatedHeartedWords = [...heartedWords, word];
      }

      // Save the updated heartedWords to AsyncStorage
      await AsyncStorage.setItem('heartedWords', JSON.stringify(updatedHeartedWords));
      setIsHearted(!isHearted); // Update the state
    } catch (error) {
      Alert.alert('Error', 'Failed to update hearted words. Please try again.');
      console.error('Error toggling heart:', error);
    }
  };

  return (
    <TouchableOpacity onPress={toggleHeart} style={{ padding: 8 }}>
      <MaterialIcons
        name={isHearted ? 'favorite' : 'favorite-border'}
        size={24}
        color={isHearted ? 'red' : 'gray'}
      />
    </TouchableOpacity>
  );
};

export default HeartButton;