import React, { useState, useRef } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { FormItem } from 'react-native-form-component';
import ButtonComp from './ButtonCom';

const Login = () => {
  const emailInput = useRef();
  const [email, setEmail] = useState();
  return (
    <SafeAreaView style={styles.login}>
      <FormItem label="User email" isRequired asterik />
      <FormItem
        label="Password"
        isRequired
        value={email}
        onChangeText={(email) => setEmail(email)}
        asterik
        ref={emailInput}
      />
      <Text style={styles.forgot}>forgot Password ?</Text>

      <ButtonComp title="Login" />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  form: {
    margin: 12,
  },
  forgot: {
    color: 'brown',
    margin: 12,
  },
  input: {
    borderWidth: 'none',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
