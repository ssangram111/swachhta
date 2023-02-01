import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../src/Login'
import Register from '../src/Register'
import DashBoardGC from '../src/gc/DashBoardGC'
import Scanner from '../src/gc/Scanner'
import Manual from '../src/gc/Manual'
import Automatic from '../src/gc/Automatic'
import ButtonLogOut from '../src/component/ButtonLogOut'
import DashBoardSS from '../src/ss/DashBoardSS'
import GenerateQR from '../src/ss/GenerateQR'
import DashBoardBO from '../src/bo/DashBoardBO'
import Reports from '../src/bo/Reports'
import Loader from '../src/component/Loader'

const Stack =createStackNavigator();


const StackNavigator = () => {


  return (
    
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#FFB26B' }}}>

            <Stack.Screen name="loader" component={Loader} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login}options={{headerShown: false}}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='DashBoardGC' component={DashBoardGC} options={{ headerRight:()=>
                <ButtonLogOut style={styles.header}/> }}/>
            <Stack.Screen name='Scanner' component={Scanner}/>
            <Stack.Screen name='Manual' component={Manual}/>
            <Stack.Screen name='Automatic' component={Automatic}/>
            <Stack.Screen name='DashBoardSS' component={DashBoardSS} options={{ headerRight:()=>
                <ButtonLogOut style={styles.header}/> }}/>
            <Stack.Screen name='GenerateQR' component={GenerateQR}/>
            <Stack.Screen name='DashBoardBO' component={DashBoardBO} options={{ headerRight:()=>
                <ButtonLogOut style={styles.header}/> }}/>
            <Stack.Screen name='Reports' component={Reports}/>
              
        </Stack.Navigator>
        </NavigationContainer>
    
  )
}

export default StackNavigator

const styles = StyleSheet.create({
  header:{
      marginRight:15
  }
})