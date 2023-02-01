import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonLogOut = ({style}) => {
    const navigation = useNavigation()
    const logout = ()=>{
       
        
        Alert.alert(
            "Logout",
            "Are you sure you want to logout",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes", onPress: () => navigation.replace('Login') }
            ]
          );
        
     }
  return (
  <TouchableOpacity style={style} onPress={logout}>
       
        <Icon name="logout" size={20} color="#291f1f" />
    
  </TouchableOpacity>
  )
}

export default ButtonLogOut

const styles = StyleSheet.create({
    header:{
        marginLeft:15
    }
})