import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons';

export default function GetStarted() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Get started</Text>
        <View style={styles.linkContainer}>
          <View style={styles.linkItemContainer}>
            <Text style={styles.linkItemIcon}>
              <MaterialCommunityIcons name="bank" size={35} color="black" />
            </Text>
            <View style={styles.linkItem}>
              <Text style={styles.linkItemHeader}>Link a Finnish bank</Text>
              <Text style={styles.linkItemSubtext}>
                Send or receive money securely
              </Text>
            </View>
          </View>
          <View>
            <Text>
              <Entypo name="chevron-with-circle-right" size={30} color="gray" />
            </Text>
          </View>
        </View>
        <View style={styles.linkContainer}>
          <View style={styles.linkItemContainer}>
            <Text style={styles.linkItemIcon}>
              <MaterialIcons
                name="account-balance-wallet"
                size={30}
                color="black"
              />
            </Text>
            <View style={styles.linkItem}>
              <Text style={styles.linkItemHeader}>Add a PH bank/e-wallet</Text>
              <Text style={styles.linkItemSubtext}>
                Receive PHP from your family and friends
              </Text>
            </View>
          </View>
          <View>
            <Text>
              <Entypo name="chevron-with-circle-right" size={30} color="gray" />
            </Text>
          </View>
        </View>
        <View style={styles.linkContainer}>
          <View style={styles.linkItemContainer}>
            <Text style={styles.linkItemIcon}>
              <MaterialCommunityIcons name="bank" size={35} color="black" />
            </Text>
            <View style={styles.linkItem}>
              <Text style={styles.linkItemHeader}>
                Link a PH payment method
              </Text>
              <Text style={styles.linkItemSubtext}>
                Send to FI from a PH bank
              </Text>
            </View>
          </View>
          <View>
            <Text>
              <Entypo name="chevron-with-circle-right" size={30} color="gray" />
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Scheduled transfers</Text>
        <View style={styles.linkContainer}>
          <View style={styles.linkItemContainer}>
            <Text style={styles.linkItemIcon}>
              <MaterialCommunityIcons name="bank" size={35} color="black" />
            </Text>
            <View style={styles.linkItem}>
              <Text style={styles.linkItemHeader}>
                Link a PH payment method
              </Text>
              <Text style={styles.linkItemSubtext}>
                Send to FI from a PH bank
              </Text>
            </View>
          </View>
          <View>
            <Text>
              <Entypo name="chevron-with-circle-right" size={30} color="gray" />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 13,
    paddingHorizontal: 8,
  },
  linkContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 80,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkItemContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  linkItemIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginRight: 5,
  },
  linkItem: {
    padding: 5,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  linkItemHeader: {
    fontSize: 13,
  },
  linkItemSubtext: {
    fontSize: 11,
  },
});
