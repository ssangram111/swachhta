import {
  SafeAreaView,
  View,
  StyleSheet,
 
} from 'react-native';
import React, { useState } from 'react'

import QRCode from 'react-native-qrcode-svg';
import { Text, Card } from '@rneui/themed'

const GenerateQR = ({route}) => {

  console.log(route.params.userID,"Gener")

  const qrcode = route.params.userID;
  const name = route.params.name


  const [qrvalue, setQrvalue] = useState(qrcode);
  
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"white"}}>
    
    <Card >
          <View >
          <Card.Title>Name</Card.Title>
          <Card.Divider />
              <View style={styles.user}>
                <Text style={styles.name}>{name}</Text>
              </View>
              <Card.Divider />
              <Card.Title>Unique ID</Card.Title>
              <View style={styles.user}>
             
                <Text style={styles.name}>{qrvalue}</Text>
              </View>
              </View>
        </Card>
      
      
      <View style={styles.container}>
    
      <Card.Title>Scan Code</Card.Title>
        
        <QRCode
          //QR code value
          value={qrvalue ? qrvalue : 'NA'}
          //size of QR Code
          size={250}
          color="green"
        
       />
       
       
      </View>
   
    </SafeAreaView>
  )
}

export default GenerateQR

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  user: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent:'center',
  },

  name: {
    fontSize: 16,
    marginTop: 5,
    margin: 20,
  },
});