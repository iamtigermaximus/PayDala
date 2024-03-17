import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomePage = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity
        style={styles.loginButtonContainer}
        onPress={handleLoginPress}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButtonContainer}
        onPress={handleSignupPress}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  loginButtonContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#fffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#35166e',
  },
  signupButtonContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#35166e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  signupButtonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  loginButtonText: {
    fontSize: 18,
    color: '#35166e',
  },
});

export default WelcomePage;
