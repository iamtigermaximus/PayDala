import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigations';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinkFiBank from './App/Screens/LinkFiBank';
import LinkPhBank from './App/Screens/LinkPhBank';
import LinkPhPaymentMethod from './App/Screens/LinkPhPaymentMethod';
import ScheduledTransfers from './App/Screens/ScheduledTransfers';
import PersonalInfo from './App/Screens/profile-screens/PersonalInfo';
import CodeBiometry from './App/Screens/profile-screens/CodeBiometry';
import CardsAccounts from './App/Screens/profile-screens/CardsAcoounts';
import EWallets from './App/Screens/profile-screens/EWallets';
import Settings from './App/Screens/profile-screens/Settings';
import HelpSupport from './App/Screens/profile-screens/HelpSupport';
import About from './App/Screens/profile-screens/About';

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
          <Stack.Screen
            name="PersonalInfo"
            component={PersonalInfo}
            options={{ headerTitle: 'Personal information' }}
          />
          <Stack.Screen
            name="CodeBiometry"
            component={CodeBiometry}
            options={{ headerTitle: 'Code and biometry' }}
          />
          <Stack.Screen
            name="CardsAccounts"
            component={CardsAccounts}
            options={{ headerTitle: 'Cards and accounts' }}
          />
          <Stack.Screen
            name="EWallets"
            component={EWallets}
            options={{ headerTitle: 'E-wallets' }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerTitle: 'Settings' }}
          />
          <Stack.Screen
            name="HelpSupport"
            component={HelpSupport}
            options={{ headerTitle: 'Help and support' }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerTitle: 'About' }}
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
