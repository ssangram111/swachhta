import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Scanner = () => {

  const onSuccess = (e) => {
    console.log(e)
    console.log(e.data)
    Alert.alert('Success')
  }
  return (
    
      <QRCodeScanner
        onRead={e => onSuccess(e)}
        
        
      />
    
  )
}

export default Scanner

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});