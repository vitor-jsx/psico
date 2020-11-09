import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/WelcomeApp/index';
import Login from '../pages/login/index';

import RegisterTypeUser from '../pages/register'
import RegisterUserNormal from '../pages/register/registerUserNormal'
import RegisterUserVoluntary from '../pages/register/registerUserVoluntary'

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        <Stack.Screen name="RegisterTypeUser" component={RegisterTypeUser} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterUserNormal" component={RegisterUserNormal} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterUserVoluntary" component={RegisterUserVoluntary} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index