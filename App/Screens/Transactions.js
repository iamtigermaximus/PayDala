import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Transactions() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transactions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6834d4',
  },
  text: {
    color: '#010101',
  },
});
