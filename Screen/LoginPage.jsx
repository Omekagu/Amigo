import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from '../Components/Header';
import Login from '../Components/Login';
import signUp from '../Components/SignUp';

const LoginPage = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={signUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default LoginPage;

const styles = StyleSheet.create({
  container: {},
});
