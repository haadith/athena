import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Evidencija from '../screens/Evidencija';
import Test from '../screens/Test';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Evidencija" component={Evidencija} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  </NavigationContainer>
);
