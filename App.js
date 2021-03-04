import * as React from 'react';
import { Text, View, Button, StyleSheet, ScrollText } from 'react-native';
import { Card } from 'react-native-paper';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import WeatherGeneral from './components/WeatherGeneral/WeatherGeneral';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import { Provider, connect } from 'react-redux';
import { store } from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
    return (
      <Provider store={store}>
       <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={WeatherForecast}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="WeatherGeneral"
            component={WeatherGeneral}
            options={{ title: 'General overview' }}
          />
          <Stack.Screen
            name="WeatherDetails"
            component={WeatherDetails}
            options={{ title: 'Details overview' }}
          />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}


