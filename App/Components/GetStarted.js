import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 10px 5px;
  font-size: 12px;
`;

const SectionTitle = styled.Text`
  font-size: 13px;
  padding: 0 8px;
`;

const LinkContainer = styled.View`
  /*
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  background-color: white;
  margin: 5px;
  border-radius: 5px;
  height: 80px;
`;

const LinkItemContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const LinkItemIcon = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 5px;
`;
const LinkItem = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
`;

const LinkItemHeader = styled.Text`
  font-size: 13px;
`;

const LinkItemSubtext = styled.Text`
  font-size: 11px;
`;

export default function GetStarted() {
  const navigation = useNavigation();

  const goToRoute = (routeName) => {
    navigation.navigate(routeName);
  };
  return (
    <View>
      <Container>
        <SectionTitle>Get started</SectionTitle>
        <TouchableOpacity onPress={() => goToRoute('LinkFiBank')}>
          <LinkContainer>
            <LinkItemContainer>
              <LinkItemIcon>
                <MaterialCommunityIcons name="bank" size={35} color="#0c2233" />
              </LinkItemIcon>
              <LinkItem>
                <LinkItemHeader>Link a Finnish bank</LinkItemHeader>
                <LinkItemSubtext>
                  Send or receive money securely
                </LinkItemSubtext>
              </LinkItem>
            </LinkItemContainer>
            <View>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={30}
                  color="#0c2233"
                />
              </Text>
            </View>
          </LinkContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToRoute('LinkPhBank')}>
          <LinkContainer>
            <LinkItemContainer>
              <LinkItemIcon>
                <MaterialIcons
                  name="account-balance-wallet"
                  size={30}
                  color="#0c2233"
                />
              </LinkItemIcon>
              <LinkItem>
                <LinkItemHeader>Add a PH bank/e-wallet</LinkItemHeader>
                <LinkItemSubtext>
                  Receive PHP from your family and friends
                </LinkItemSubtext>
              </LinkItem>
            </LinkItemContainer>
            <View>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={30}
                  color="#0c2233"
                />
              </Text>
            </View>
          </LinkContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToRoute('LinkPhPaymentMethod')}>
          <LinkContainer>
            <LinkItemContainer>
              <LinkItemIcon>
                <MaterialCommunityIcons name="bank" size={35} color="#0c2233" />
              </LinkItemIcon>
              <LinkItem>
                <LinkItemHeader>Link a PH payment method</LinkItemHeader>
                <LinkItemSubtext>Send to FI from a PH bank</LinkItemSubtext>
              </LinkItem>
            </LinkItemContainer>
            <View>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={30}
                  color="#0c2233"
                />
              </Text>
            </View>
          </LinkContainer>
        </TouchableOpacity>
      </Container>

      <Container>
        <SectionTitle>Scheduled transfers</SectionTitle>
        <TouchableOpacity onPress={() => goToRoute('ScheduledTransfers')}>
          <LinkContainer>
            <LinkItemContainer>
              <LinkItemIcon>
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={35}
                  color="#0c2233"
                />
              </LinkItemIcon>
              <LinkItem>
                <LinkItemHeader>Schedule a transfer</LinkItemHeader>
                <LinkItemSubtext>Set up repeating payments</LinkItemSubtext>
              </LinkItem>
            </LinkItemContainer>
            <View>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={30}
                  color="#0c2233"
                />
              </Text>
            </View>
          </LinkContainer>
        </TouchableOpacity>
      </Container>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     fontSize: 12,
//   },
//   sectionTitle: {
//     fontSize: 13,
//     paddingHorizontal: 8,
//   },
//   linkContainer: {
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     shadowColor: 'gray',
//     shadowOffset: {
//       width: 0,
//       height: 0.5,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     height: 80,
//     backgroundColor: 'white',
//     margin: 5,
//     borderRadius: 5,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   linkItemContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   linkItemIcon: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//     marginRight: 5,
//   },
//   linkItem: {
//     padding: 5,
//     display: 'flex',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
//   linkItemHeader: {
//     fontSize: 13,
//   },
//   linkItemSubtext: {
//     fontSize: 11,
//   },
// });
