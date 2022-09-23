import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Header = () => {
  const Navigation = useNavigation();
  const image = {
    uri: 'https://www.nicepng.com/png/detail/302-3025775_tuna-pizza-shawarma-crepe-png.png',
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.top}>
          <Text style={styles.text}>Amigo's</Text>
        </ImageBackground>
      </View>
      <View style={styles.register}>
        <TouchableOpacity>
          <Text
            style={styles.login}
            onPress={() => Navigation.navigate('Login')}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.signUp}
            onPress={() => Navigation.navigate('SignUp')}
          >
            sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  top: {
    height: '30vh',
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  container: {
    display: 'grid',
    placeItems: 'center',
  },
  text: {
    paddingLeft: '30px',
    fontStyle: 'italic',
    fontWeight: 700,
    color: 'brown',
    fontSize: 40,
  },
  register: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginHorizontal: 60,
    marginTop: '10px',
  },
  login: {
    color: '#fff',
    fontSize: '1.5rem',
    marginRight: 30,
    textTransform: 'capitalize',
    padding: '20px',
    // backgroundColor: 'brown',
    // borderRadius: 20,
    borderBottomWidth: 5,
    borderColor: 'brown',
  },
  signUp: {
    padding: '20px',
    // backgroundColor: 'brown',
    color: '#fff',
    fontSize: '1.5rem',
    textTransform: 'capitalize',
    borderBottomWidth: 5,
    borderColor: 'brown',
  },
});
