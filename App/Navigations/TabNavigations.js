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
        headerTintColor: '#0c2233',
        tabBarInactiveBackgroundColor: '#f4eeff',
        tabBarActiveBackgroundColor: 'white',
        headerStyle: { height: 80, backgroundColor: '#f4eeff' },
        tabBarStyle: { backgroundColor: '#f4eeff', height: 60 },
        tabBarLabelStyle: { color: '#0c2233', paddingBottom: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size }) => (
            <Entypo name="home" size={size} color={'#0c2233'} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome name="history" size={size} color={'#0c2233'} />
          ),
        }}
      />
      <Tab.Screen
        name="Send Money"
        component={SendMoney}
        options={{
          headerTitle: 'Select a recipient',
          tabBarIcon: ({ size }) => (
            <FontAwesome6
              name="money-bill-transfer"
              size={size}
              color={'#0c2233'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size }) => (
            <FontAwesome name="user" size={size} color={'#0c2233'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
