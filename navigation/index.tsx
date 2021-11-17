/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Confirmed from '../screens/Confirmed';
import Event from '../screens/Event'
import EventsWent from '../screens/EventsWent'
import Agenda from '../screens/Agenda'
import Profile from '../screens/Profile'

import { CredentialsContext } from '../components/CredentialsContext';



export default function Navigation() {
  return (

    <CredentialsContext.Consumer>

      {({ storedCredentials }) => (

        <NavigationContainer>
          <MainNavStack />
        </NavigationContainer>

      )}

    </CredentialsContext.Consumer>

  );
}

const MainNav = createStackNavigator();

function MainNavStack() {
  return (

    <CredentialsContext.Consumer>

      {
        ({ storedCredentials }) => (

          storedCredentials ? (

            <MainNav.Navigator>
              <MainNav.Screen
                name="Login"
                component={Login}
                options={({ navigation }) => ({
                  headerShown: false,
                })}
              />
              <MainNav.Screen
                name="SignIn"
                component={SignIn}
                options={({ navigation }) => ({
                  headerShown: false,
                })}
              />
              
              <MainNav.Screen
                name="BottomTabNav"
                component={BottomTabNavigator}
                options={({ navigation }) => ({
                  headerShown: false,
                })}
              />
            </MainNav.Navigator>

          ) : (

            <MainNav.Navigator>
              
              <MainNav.Screen
                name="BottomTabNav"
                component={BottomTabNavigator}
                options={({ navigation }) => ({
                  headerShown: false,
                })}
              />
            </MainNav.Navigator>

          )

        )
      }

    </CredentialsContext.Consumer>
  );
}

const EventStack = createStackNavigator();

function EventTabStack() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
        <EventStack.Screen
          name="Confirmed"
          component={Confirmed}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      <EventStack.Screen
        name="Event"
        component={Event}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <EventStack.Screen
        name="EventsWent"
        component={EventsWent}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
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
        name="Início" 
        component={EventTabStack}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
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
        component={Profile}
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
