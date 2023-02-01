import React from 'react';

import { StyleSheet, Text,View,TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';




const DashBoardGC = ({navigation}) => {
  
  const nav=(press)=>{
    navigation.navigate(press)
  }

  return (
   <View style={styles.container}>
   
    
    <View style={styles.linear}>
     
      <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
       locations={[0,0.5,0.6]} colors={['#fa9a41', '#fcb879', '#FFB26B']} style={styles.linearGradient}>
      <TouchableOpacity onPress={()=>{nav('Manual')}}>
     <Text style={styles.buttonText}>
     Enter Manually
  </Text>
    </TouchableOpacity>
  
</LinearGradient>
    </View>
    <View style={styles.linear}>
     
      <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} 
         locations={[0,0.5,0.6]} colors={['#fa9a41', '#fcb879', '#FFB26B']} style={styles.linearGradient}>
        <TouchableOpacity onPress={()=>{nav('Scanner')}}>
        <Text style={styles.buttonText}>
             Scan QR
        </Text>
         </TouchableOpacity>
    </LinearGradient>
    </View>
    
   </View>
  )
}

export default DashBoardGC

const styles = StyleSheet.create({
 container:{
  flexDirection:'row',
  flex:1,
  backgroundColor:"white"
 },
 linear:{
  width:'50%',
  padding:20
 },
 linearGradient: {
  
  
   borderRadius: 5,
  
},
buttonText: {
  fontSize: 18,
  fontFamily: 'Gill Sans',
  textAlign: 'center',
  margin: 10,
  color: '#ffffff',
  backgroundColor: 'transparent',
},
});