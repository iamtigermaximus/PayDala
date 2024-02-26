import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Transactions from '../Screens/Transactions';
import SendMoney from '../Screens/SendMoney';
import Profile from '../Screens/Profile';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: 'white',
        tabBarInactiveBackgroundColor: '#6834d4',
        tabBarActiveBackgroundColor: '#35166e',
        headerStyle: { height: 80, backgroundColor: '#6834d4' },
        tabBarStyle: { backgroundColor: '#6834d4', height: 60 },
        tabBarLabelStyle: { color: 'white' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size }) => (
            <Entypo name="home" size={size} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome name="history" size={size} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Send Money"
        component={SendMoney}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome6
              name="money-bill-transfer"
              size={size}
              color={'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome name="user" size={size} color={'white'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
