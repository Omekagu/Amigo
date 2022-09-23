import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../Components/ButtonCom';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Amigo</Text>
        <Text style={styles.textSmall}>Sharwama and pizza</Text>
      </View>
      <ButtonComp title="get started" />
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    backgroundColor: 'brown',
  },
  text: {
    fontSize: 50,
    color: '#fff',
    fontFamily: 'S',
  },
  textSmall: {
    fontSize: 20,
    color: '#fff',
  },
});
