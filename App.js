import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigations';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinkFiBank from './App/Screens/LinkFiBank';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen
            name="Tabs"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LinkFiBank"
            component={LinkFiBank}
            options={{ headerTitle: 'Link your FI bank' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6834d4',
  },
});
