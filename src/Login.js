import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import { Search } from './component/Loaders';

const Login = ({navigation,route}) => {
    const [isLoading,setIsLoading] =useState(false) 

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
 
 
    const submit = (nav)=>{
     
        if (nav === 'login'){
          if(email === 'bo' && password === 'bo' ){
                    navigation.replace('DashBoardBO')
                }else if(email === 'gc' && password === 'gc'){
            navigation.replace('DashBoardGC')
               }else if(email === 'user2' && password === '1234'){
                navigation.replace('DashBoardGC')
                   }else if(email === 'user3' && password === '1234'){
                    navigation.replace('DashBoardGC')
                       }else{
                setIsLoading(true)
                 axios.post(`https://garbage-backend.onrender.com/api/login`,{email,password})
          .then(function (response) {
            // handle success 
            setIsLoading(false)
             navigation.replace('DashBoardSS',{
              userID:response.data,
              userDetails: response.data
            })
           
            
          }).catch(function (error) {
            // handle error
            setIsLoading(false)
            alert(error.message);
            console.log('byeee')
          });
               }

          }
          else if(nav === 'register'){
          
        navigation.navigate('Register')
     }
     } 
      

  return (
      <View style={styles.container}>
      {isLoading ? (

          <Search/>
          
      ) : (
        <>
         <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
           
            <Image source={require('../assets/download.jpeg')}
              style={styles.image}/>
            </View>
            <Text style={styles.loginTitleText}>Login</Text>
            <View style={styles.hr}></View>

            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(value) => setEmail(value)}
                keyboardType='email-address'
                textContentType='emailAddress'
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={(value) => setPassword(value)}
               
                secureTextEntry={true}
                textContentType='password'
              />
            </View>
           
            <TouchableOpacity style={styles.loginButton} 
            onPress={()=>submit('login')}>
              <Text style={styles.loginButtonText} >Login</Text>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={()=>submit('register')}>
              <Text style={styles.registerText}>
               Register Now
              </Text>
            </TouchableOpacity>
        
          </View>
        </View>
        </>
       
      )}
        
      </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor:"white"
    },
    bigCircle: {
      width: Dimensions.get('window').height * 0.7,
      height: Dimensions.get('window').height * 0.7,
      backgroundColor: '#FFB26B',
      borderRadius: 1000,
      position: 'absolute',
      right: Dimensions.get('window').width * 0.25,
      top: -50,
    },
    smallCircle: {
      width: Dimensions.get('window').height * 0.4,
      height: Dimensions.get('window').height * 0.4,
      backgroundColor: '#fcb879',
      borderRadius: 1000,
      position: 'absolute',
      bottom: Dimensions.get('window').width * -0.2,
      right: Dimensions.get('window').width * -0.3,
    },
    centerizedView: {
      width: '100%',
      top: '15%',
    },
    authBox: {
      width: '80%',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      alignSelf: 'center',
      paddingHorizontal: 14,
      paddingBottom: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    logoBox: {
      width: 150,
      height: 150,
      backgroundColor: 'green',
      borderRadius: 100,
      borderWidth:1,
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: -50,
      marginBottom: -50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    loginTitleText: {
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 10,
    },
    hr: {
      width: '100%',
      height: 0.5,
      backgroundColor: '#444',
      marginTop: 6,
    },
    inputBox: {
      marginTop: 10,
    },
    inputLabel: {
      fontSize: 18,
      marginBottom: 6,
    },
    input: {
      width: '100%',
      height: 40,
      backgroundColor: '#eef1f4',
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    loginButton: {
      backgroundColor: '#939B62',
      marginTop: 10,
      paddingVertical: 10,
      borderRadius: 4,
    },
    loginButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    registerText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
    },
    forgotPasswordText: {
      textAlign: 'center',
      marginTop: 12,
      fontSize: 16,
    },
    image: {
      width: "100%",
      height:"100%",
      borderRadius: 100
    },
    indicator:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  });