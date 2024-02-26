import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.sendChoicesContainer}>
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.ratesContainer}>
        <View style={styles.currencyContainer}>
          <View style={styles.currency}>
            <Text>1</Text>
          </View>
          <View style={styles.currency}>
            <Text>1</Text>
          </View>
          <View style={styles.currency}>
            <Text>1</Text>
          </View>
        </View>
      </View>
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
  sendChoicesContainer: {
    backgroundColor: 'white',
    height: 100,
    padding: 20,
  },
  ratesContainer: {
    backgroundColor: 'white',
    height: 200,
    padding: '10px 20px',
    margin: 20,
    borderRadius: 10,
  },
  currency: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
  },
});
