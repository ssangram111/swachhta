import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Resolve = ({style,onPress}) => {
  return (
    <View style={style}>
     <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Icon name="trash-alt" size={20} color="#455163" />
     
     </TouchableOpacity>
    </View>
  )
}

export default Resolve

const styles = StyleSheet.create({
    btn:{
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'column'
    }   
})