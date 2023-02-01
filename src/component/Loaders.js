import { View,StyleSheet,ActivityIndicator} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Collect =() => {
  return (
    <View style={styles.container}>
        <LottieView source={require('../../assets/collect.json')} autoPlay loop />
    </View>
  )
};

const Search =() => {
  return (
    <View style={styles.container}>
        <LottieView source={require('../../assets/search.json')} autoPlay loop />
    </View>
  )
};

const LoginLoader =() => {
  return (
    <View style={styles.container}>
        <LottieView source={require('../../assets/login.json')} autoPlay loop />
    </View>
  )
};


const RegisterLoader = () => {
  return (
    <View style={styles.container}>
        <LottieView source={require('../../assets/Register.json')} autoPlay loop />
    </View>
  )
};


  export {Collect,Search,RegisterLoader,LoginLoader}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    activityIndicator: {
    
      alignItems: 'center',
      height: 80,
    },
  });