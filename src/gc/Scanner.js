import { StyleSheet,AnimationEffect,ReadableStreamReader } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import {  Dimensions } from "react-native";


const Scanner = ({navigation}) => {

  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const onSuccess = (e) => {
    let qrvalue = e.data;
    let length = qrvalue.length
    if(qrvalue && length == 24){
      navigation.navigate("Automatic",{
       qrvalue:qrvalue
      })
     }
  }
  return (
    
      <QRCodeScanner
        onRead={e => onSuccess(e)}
        reactivate = {true}
        cameraType={AnimationEffect}
        style={ReadableStreamReader}
        cameraStyle={{ height: SCREEN_HEIGHT }}
      />
    
  )
}

export default Scanner

