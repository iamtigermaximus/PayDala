import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome6,
  Entypo,
  FontAwesome,
} from '@expo/vector-icons';
import GetStarted from '../Components/GetStarted';
import CountryFlag from 'react-native-country-flag';

export default function Home(props) {
  const [number, onChangeNumber] = useState('');
  const { onPress, title = 'Continue' } = props;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.sendChoicesContainer}>
          <View style={styles.choicesContainer}>
            <View style={styles.choicesItem}>
              <Text>
                <Foundation name="euro" size={30} color="white" />
              </Text>
            </View>
            <Text style={styles.choicesSubtext}>Send to FI</Text>
          </View>
          <View style={styles.choicesContainer}>
            <View style={styles.choicesItem}>
              <Text>
                <FontAwesome6 name="peso-sign" size={20} color="white" />
              </Text>
            </View>
            <Text style={styles.choicesSubtext}>Send to PH</Text>
          </View>
          <View style={styles.choicesContainer}>
            <View style={styles.choicesItem}>
              <Text>
                <FontAwesome name="user" size={24} color={'white'} />
              </Text>
            </View>
            <Text style={styles.choicesSubtext}>Send to Self</Text>
          </View>
          <View style={styles.choicesContainer}>
            <View style={styles.choicesItem}>
              <Text>
                <Entypo name="mobile" size={24} color="white" />
              </Text>
            </View>
            <Text style={styles.choicesSubtext}>Buy Load</Text>
          </View>
        </View>
        <View style={styles.ratesContainer}>
          <View style={styles.currencyContainer}>
            <View style={styles.currency}>
              <Text>
                <CountryFlag isoCode="fi" size={10} />
              </Text>
              <Text>FI</Text>
            </View>
            <View style={styles.swap}>
              <MaterialCommunityIcons
                name="swap-horizontal-circle"
                size={24}
                color="#0c2233"
              />
            </View>
            <View style={styles.currency}>
              <Text>
                <CountryFlag isoCode="ph" size={10} />
              </Text>
              <Text>PH</Text>
            </View>
          </View>
          <SafeAreaView>
            <Text style={styles.inputLabel}>You send</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Type amount in EUR"
              keyboardType="numeric"
              render={() => (
                <View style={styles.inputContainer}>
                  <MaterialCommunityIcons
                    name="currency-usd"
                    size={24}
                    color="green"
                  />
                  <TextInput
                    style={styles.inputField}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                  />
                </View>
              )}
            />
            <Text style={styles.inputLabel}>They receive</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Type amount in PHP"
              keyboardType="numeric"
              render={() => (
                <View style={styles.inputContainer}>
                  <MaterialCommunityIcons
                    name="currency-eur"
                    size={24}
                    color="blue"
                  />
                  <TextInput
                    style={styles.inputField}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                  />
                </View>
              )}
            />
          </SafeAreaView>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
          </Pressable>
        </View>
      </View>
      <GetStarted />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4eeff',
  },
  choicesContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 5,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  choicesItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#35166e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  choicesSubtext: {
    width: '100%',
    fontSize: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  sendChoicesContainer: {
    backgroundColor: 'white',
    height: 100,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ratesContainer: {
    backgroundColor: 'white',
    // height: 200,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  currency: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // paddingHorizontal: 10,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,

    flexDirection: 'row',
    gap: 5,
  },
  currencyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
  },
  countryFlag: {
    backgroundColor: 'gray',
  },
  swap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderRadius: 4,
    padding: 10,
    borderWidth: 0.5,
  },
  inputLabel: {
    padding: 5,
    fontSize: 12,
    marginTop: 10,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#35166e',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  scrollView: {
    backgroundColor: '#f4eeff',
  },
});
