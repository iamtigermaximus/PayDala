import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function SendMoney() {
  const [recipient, setRecipient] = useState('');

  const handleRecipientChange = (text) => {
    setRecipient(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.sectionTitle}>Select a recipient</Text>
        <TextInput
          style={styles.input}
          value={recipient}
          onChangeText={handleRecipientChange}
          placeholder="Search by name or number"
        />
        <View style={styles.contactsSection}>
          <Text style={styles.contactsTitle}>Contacts</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>J</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>John Doe</Text>
                <Text style={styles.contactNumber}>123456789</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>P</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Pedro Martin</Text>
                <Text style={styles.contactNumber}>29292929292</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>B</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Benjamin Watts</Text>
                <Text style={styles.contactNumber}>29292929292</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>J</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Jane Doe</Text>
                <Text style={styles.contactNumber}>29292929292</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>J</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Jane Doe</Text>
                <Text style={styles.contactNumber}>29292929292</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>J</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Jane Doe</Text>
                <Text style={styles.contactNumber}>29292929292</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>J</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Jane Doe</Text>
                <Text style={styles.contactNumber}>29292929292</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>J</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Jane Doe</Text>
                <Text style={styles.contactNumber}>29292929292</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>J</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Jane Doe</Text>
                <Text style={styles.contactNumber}>29292929292</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>J</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Jane Doe</Text>
                <Text style={styles.contactNumber}>29292929292</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
          <View style={styles.contactItemContainer}>
            <View style={styles.contactItem}>
              <View style={styles.contactAvatar}>
                <Text style={styles.contactAvatarInitial}>A</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.contactName}>Andres Marcos</Text>
                <Text style={styles.contactNumber}>Number</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
  inputContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 5,
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 13,
    color: 'white',
    paddingBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  contactsSection: {
    paddingVertical: 10,
  },
  contactsTitle: {
    fontSize: 16,
    color: 'white',
  },
  scrollView: {
    backgroundColor: '#f4eeff',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  contactItemContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 10,
  },
  contactAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  contactAvatarInitial: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactName: { color: '#0c2233', fontSize: 16, fontWeight: '600' },
  contactNumber: { color: '#0c2233', fontSize: 14 },
});
