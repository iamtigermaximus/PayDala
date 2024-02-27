import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';

export default function Profile() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.personalDetailsContainer}>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemIcon}>
              <FontAwesome5 name="user-alt" size={25} color="#0c2233" />
            </Text>
            <Text style={styles.item}>Personal information</Text>
          </View>
          <View style={styles.itemIcon}>
            <Text>
              <Entypo
                name="chevron-with-circle-right"
                size={20}
                color="#0c2233"
              />
            </Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemIcon}>
              <Ionicons name="lock-closed-sharp" size={27} color="#0c2233" />
            </Text>
            <Text style={styles.item}>Code and biometry</Text>
          </View>
          <View style={styles.itemIcon}>
            <Text>
              <Entypo
                name="chevron-with-circle-right"
                size={20}
                color="#0c2233"
              />
            </Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemIcon}>
              <MaterialCommunityIcons name="bank" size={30} color="#0c2233" />
            </Text>
            <Text style={styles.item}>Cards and accounts</Text>
          </View>
          <View style={styles.itemIcon}>
            <Text>
              <Entypo
                name="chevron-with-circle-right"
                size={20}
                color="#0c2233"
              />
            </Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemIcon}>
              <MaterialIcons
                name="account-balance-wallet"
                size={30}
                color="#0c2233"
              />
            </Text>
            <Text style={styles.item}>E-wallets</Text>
          </View>
          <View style={styles.itemIcon}>
            <Text>
              <Entypo
                name="chevron-with-circle-right"
                size={20}
                color="#0c2233"
              />
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.personalDetailsContainer}>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemIcon}>
              <Ionicons name="settings" size={27} color="#0c2233" />
            </Text>
            <Text style={styles.item}>Settings</Text>
          </View>
          <View style={styles.itemIcon}>
            <Text>
              <Entypo
                name="chevron-with-circle-right"
                size={20}
                color="#0c2233"
              />
            </Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemIcon}>
              <FontAwesome name="support" size={24} color="#0c2233" />{' '}
            </Text>
            <Text style={styles.item}>Help and support</Text>
          </View>
          <View style={styles.itemIcon}>
            <Text>
              <Entypo
                name="chevron-with-circle-right"
                size={20}
                color="#0c2233"
              />
            </Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemIcon}>
              <Ionicons
                name="information-circle-sharp"
                size={30}
                color="#0c2233"
              />
            </Text>
            <Text style={styles.item}>About</Text>
          </View>
          <View style={styles.itemIcon}>
            <Text>
              <Entypo
                name="chevron-with-circle-right"
                size={20}
                color="#0c2233"
              />
            </Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemIcon}>
              <MaterialCommunityIcons name="logout" size={30} color="#0c2233" />
            </Text>
            <Text style={styles.item}>Log out</Text>
          </View>
          <View style={styles.itemIcon}>
            <Text>
              <Entypo
                name="chevron-with-circle-right"
                size={20}
                color="#0c2233"
              />
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
  personalDetailsContainer: {
    backgroundColor: 'white',
    // height: 200,
    // padding: 10,
    margin: 10,
    borderRadius: 10,
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: 'gray',
  },
  itemContainer: {
    gap: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  itemIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    fontWeight: '700',
    color: '#0c2233',
  },
  scrollView: {
    backgroundColor: '#6834d4',
    gap: 20,
  },
});
