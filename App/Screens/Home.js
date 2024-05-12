import { Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const StyledScrollView = styled.ScrollView`
  background-color: '#f4eeff';
`;

const Container = styled.View`
  flex: 1;
  background-color: '#f4eeff';
`;

const SendChoicesContainer = styled.View`
  background-color: white;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ChoicesContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 5px;
`;

const ChoicesItem = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #35166e;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const ChoicesSubtext = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 10px;
  padding: 2px;
`;

const RatesContainer = styled.View`
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
`;
const CurrencyContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
const Currency = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100px;
  height: 40px;
  border: 1px solid #ccc;
`;
const Swap = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputLabel = styled.Text`
  padding: 5px;
  font-size: 12px;
  margin-top: 10px;
`;
const StyledTextInput = styled.TextInput`
  height: 40px;
  border-radius: 4px;
  padding: 10px;
  /* borderWidth: 0.5, */
  border: 1px solid gray;
`;
const InputContainer = styled.View``;
const TextInputField = styled.TextInput``;
const StyledPressable = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  border-radius: 4px;
  margin-top: 10px;
  background-color: #35166e;
`;
const PressableButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  /* line-height: 21;
  letter-spacing: 0.25px; */
  color: white;
`;

export default function Home(props) {
  const [number, onChangeNumber] = useState('');
  const { onPress, title = 'Continue' } = props;

  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <StyledScrollView>
      <Container>
        <SendChoicesContainer>
          <Pressable onPress={() => handleNavigation('SendMoney')}>
            <ChoicesContainer>
              <ChoicesItem>
                <Text>
                  <Foundation name="euro" size={30} color="white" />
                </Text>
              </ChoicesItem>
              <ChoicesSubtext>Send to FI</ChoicesSubtext>
            </ChoicesContainer>
          </Pressable>
          <Pressable onPress={() => handleNavigation('SendMoney')}>
            <ChoicesContainer>
              <ChoicesItem>
                <Text>
                  <FontAwesome6 name="peso-sign" size={20} color="white" />
                </Text>
              </ChoicesItem>
              <ChoicesSubtext>Send to PH</ChoicesSubtext>
            </ChoicesContainer>
          </Pressable>

          <ChoicesContainer>
            <ChoicesItem>
              <Text>
                <FontAwesome name="user" size={24} color={'white'} />
              </Text>
            </ChoicesItem>
            <ChoicesSubtext>Send to Self</ChoicesSubtext>
          </ChoicesContainer>
          <ChoicesContainer>
            <ChoicesItem>
              <Text>
                <Entypo name="mobile" size={24} color="white" />
              </Text>
            </ChoicesItem>
            <ChoicesSubtext>Buy Load</ChoicesSubtext>
          </ChoicesContainer>
        </SendChoicesContainer>
        <RatesContainer>
          <CurrencyContainer>
            <Currency>
              <Text>
                <CountryFlag isoCode="fi" size={10} />
              </Text>
              <Text>FI</Text>
            </Currency>
            <Swap>
              <MaterialCommunityIcons
                name="swap-horizontal-circle"
                size={24}
                color="#0c2233"
              />
            </Swap>
            <Currency>
              <Text>
                <CountryFlag isoCode="ph" size={10} />
              </Text>
              <Text>PH</Text>
            </Currency>
          </CurrencyContainer>
          <SafeAreaView>
            <InputLabel>You send</InputLabel>
            <StyledTextInput
              // style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Type amount in EUR"
              keyboardType="numeric"
              render={() => (
                <InputContainer>
                  <MaterialCommunityIcons
                    name="currency-usd"
                    size={24}
                    color="green"
                  />
                  <TextInputField
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                  />
                </InputContainer>
              )}
            />
            <InputLabel>They receive</InputLabel>
            <StyledTextInput
              // style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Type amount in PHP"
              keyboardType="numeric"
              render={() => (
                <InputContainer>
                  <MaterialCommunityIcons
                    name="currency-eur"
                    size={24}
                    color="blue"
                  />
                  <TextInputField
                    // style={styles.inputField}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                  />
                </InputContainer>
              )}
            />
          </SafeAreaView>
          <StyledPressable onPress={onPress}>
            <PressableButtonText>{title}</PressableButtonText>
          </StyledPressable>
        </RatesContainer>
      </Container>
      <GetStarted />
    </StyledScrollView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f4eeff',
  // },
  // choicesContainer: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   gap: 5,
  //   shadowColor: 'gray',
  //   shadowOffset: {
  //     width: 0,
  //     height: 0.5,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // choicesItem: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: 25,
  //   backgroundColor: '#35166e',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  // },
  // choicesSubtext: {
  //   width: '100%',
  //   fontSize: 10,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 2,
  // },
  // sendChoicesContainer: {
  //   backgroundColor: 'white',
  //   height: 100,
  //   padding: 10,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  // },
  // ratesContainer: {
  //   backgroundColor: 'white',
  //   // height: 200,
  //   padding: 20,
  //   margin: 10,
  //   borderRadius: 10,
  //   shadowColor: 'gray',
  //   shadowOffset: {
  //     width: 0,
  //     height: 0.5,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // currency: {
  //   height: 40,
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   // borderRadius: 5,
  //   // paddingHorizontal: 10,
  //   // width: 100,
  //   // display: 'flex',
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   // borderRadius: 4,
  //   // flexDirection: 'row',
  //   // gap: 5,
  // },
  // currencyContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   gap: 10,
  //   width: '100%',
  //   justifyContent: 'center',
  // },
  // countryFlag: {
  //   backgroundColor: 'gray',
  // },
  // swap: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // input: {
  //   height: 40,
  //   borderRadius: 4,
  //   padding: 10,
  //   borderWidth: 0.5,
  // },
  // inputLabel: {
  //   padding: 5,
  //   fontSize: 12,
  //   marginTop: 10,
  // },
  // button: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: 12,
  //   paddingHorizontal: 32,
  //   borderRadius: 4,
  //   elevation: 3,
  //   backgroundColor: '#35166e',
  //   marginTop: 10,
  // },
  // buttonText: {
  //   fontSize: 16,
  //   lineHeight: 21,
  //   fontWeight: 'bold',
  //   letterSpacing: 0.25,
  //   color: 'white',
  // },
  // scrollView: {
  //   backgroundColor: '#f4eeff',
  // },
});
