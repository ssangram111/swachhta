import { View,StyleSheet,ActivityIndicator} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

export default function Loader({navigation}) {

        setTimeout(() => {
        
         navigation.replace('Login')
        
        }, 2000);
      
  return (
    <View style={styles.container}>
         <LottieView source={require('../../assets/Entry.json')} autoPlay loop />
    </View>
  )
}


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