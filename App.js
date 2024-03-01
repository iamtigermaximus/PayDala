import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigations';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinkFiBank from './App/Screens/LinkFiBank';
import LinkPhBank from './App/Screens/LinkPhBank';
import LinkPhPaymentMethod from './App/Screens/LinkPhPaymentMethod';
import ScheduledTransfers from './App/Screens/ScheduledTransfers';

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
          <Stack.Screen
            name="LinkPhBank"
            component={LinkPhBank}
            options={{ headerTitle: 'Select account type' }}
          />
          <Stack.Screen
            name="LinkPhPaymentMethod"
            component={LinkPhPaymentMethod}
            options={{ headerTitle: 'Link your Ph bank' }}
          />
          <Stack.Screen
            name="ScheduledTransfers"
            component={ScheduledTransfers}
            options={{ headerTitle: 'Select a recipient' }}
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
