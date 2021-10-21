/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Event from '../screens/Event'
import Agenda from '../screens/Agenda'

import {RootTabParamList, RootTabScreenProps } from '../types';
import { createStackNavigator } from '@react-navigation/stack';
import { FontDisplay } from 'expo-font';


export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <EventTabStack/> */}
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}

const EventStack = createStackNavigator();

function EventTabStack() {
  return (
    <EventStack.Navigator>
      {/* <EventStack.Screen name="Home" component={Home} /> */}
      <EventStack.Screen name="Evento" component={Event} />
    </EventStack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Agenda"
        component={Agenda}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={Agenda}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
