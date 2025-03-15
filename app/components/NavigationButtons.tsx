import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type NavigationButtonsProps = {
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
  onPrevious,
  isFirst,
  isLast,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPrevious}
        style={[styles.button, isFirst && styles.disabledButton]}
        disabled={isFirst}
      >
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onNext}
        style={[styles.button, isLast && styles.disabledButton]}
        disabled={isLast}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#29b0ff', // Accent color
    padding: 12,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Grayed out for disabled state
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NavigationButtons;