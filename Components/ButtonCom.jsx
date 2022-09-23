import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Pressable,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

const ButtonComp = ({ title }) => {
  const Navigation = useNavigation();
  return (
    <TouchableHighlight>
      <Pressable
        style={styles.button}
        onPress={() => Navigation.navigate('LoginPage')}
      >
        {' '}
        <Text>{title}</Text>
      </Pressable>
    </TouchableHighlight>
  );
};
export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#fff',
    borderRadius: 50,
    // width: 200,
    padding: 10,
    color: '#fff',
    fontSize: '1.5rem',
    textTransform: 'capitalize',
  },
});
