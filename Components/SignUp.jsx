import React, { useRef } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { FormItem } from 'react-native-form-component';
import { useState } from 'react';
import ButtonCom from './ButtonCom';

const signUp = () => {
  const emailInput = useRef();
  const [email, setEmail] = useState();
  return (
    <SafeAreaView style={styles.login}>
      <FormItem
        label="Name"
        isRequired
        value={email}
        onChangeText={(email) => setEmail(email)}
        asterik
        ref={emailInput}
      />
      <FormItem
        label="Email Address"
        isRequired
        value={email}
        onChangeText={(email) => setEmail(email)}
        asterik
        ref={emailInput}
      />
      <FormItem
        label="Phone Number"
        isRequired
        value={email}
        onChangeText={(email) => setEmail(email)}
        asterik
        ref={emailInput}
      />
      <FormItem
        label="Password"
        isRequired
        value={email}
        onChangeText={(email) => setEmail(email)}
        asterik
        ref={emailInput}
      />
      <FormItem
        label="confirm Password"
        isRequired
        value={email}
        onChangeText={(email) => setEmail(email)}
        asterik
        ref={emailInput}
      />

      <ButtonCom title="create Acoount" />
    </SafeAreaView>
  );
};

export default signUp;

const styles = StyleSheet.create({
  login: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});
