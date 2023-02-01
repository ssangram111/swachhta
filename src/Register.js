import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
  } from 'react-native';
  import React, { useState } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import axios from 'axios';
 import { WardNo } from './component/WardNo';
 import { SelectList } from 'react-native-dropdown-select-list'
 import { RegisterLoader,LoginLoader } from './component/Loaders';
 
  const Register = () => {
  
    
    const navigation = useNavigation()

  
    const [isLoader, setisLoader] = useState(false)

      const[name,setname]= useState('')
      const[email,setemail]= useState('')
      const[contact,setcontact]= useState('')
      const[ward,setward]= useState('')
      const[address,setaddress]= useState('')
      const[password,setpassword]= useState('')
      
      
      const userData = {
        name:name,
        email:email,
        contact:contact,
        ward:ward,
        address:address,
        password:password,
    
      }
        
      const register = () => {
  
        if(!name || !email || !contact || !ward || !address || !password){
          alert("Please fill all data")
        }else if(password < 4 ){
          alert("password should contain min 4 character")
        }else{
          setisLoader(true)
          axios
          .post(`https://garbage-backend.onrender.com/api/registerUser`,userData)
          .then(function (response) {

            setisLoader(false)
            navigation.replace('Login');
            
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          });
        }
        
      };
  
     
  
    return (
      <View style={styles.container}>
          
         {
          isLoader ? (
            <RegisterLoader/>
            ):(
            <View style={styles.centerizedView}>
            <ScrollView style={styles.authBox} 
            showsVerticalScrollIndicator={false}>
              
              <Text style={styles.loginTitleText}>Register</Text>
              <View style={styles.hr}></View>
  
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setname}
                  autoCapitalize={false}
                />
              </View>
  
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setemail}
                  autoCapitalize={false}
                />
              </View>
  
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Contact</Text>
                <TextInput
                  style={styles.input}
                  value={contact}
                  onChangeText={setcontact}
                  autoCapitalize={false}
                />
              </View>
  
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Ward</Text>
                <SelectList 
                style={{backgroundColor:'#dae0e7'}}
                      setSelected={(val) => setward(val)} 
                      data={WardNo} 
                      save="value"/>
              </View>
  
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Address</Text>
                <TextInput
                  style={styles.input}
                  value={address}
                  onChangeText={setaddress}
                  autoCapitalize={false}
                />
              </View>
  
              
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setpassword}
                  autoCapitalize={false}
                  secureTextEntry={true}
                  textContentType='password'
                />
              </View>
         
  
  
         
              <TouchableOpacity style={styles.loginButton}
              onPress={register}>
                <Text style={styles.loginButtonText} >Register</Text>
              </TouchableOpacity>
          
            </ScrollView>
          </View>
          )
         }
          
        </View>
    )
  }
  
  export default Register
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
   
    centerizedView: {
      width: '100%',
      marginTop: '10%',
    },
    authBox: {
      
      width: '80%',
      backgroundColor: '#fafafa',
      borderRadius: 20,
      alignSelf: 'center',
      paddingHorizontal: 12,
      paddingBottom: 20,
      shadowColor: '#000',
        marginBottom:10,
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
      backgroundColor: '#fff',
      borderRadius: 1000,
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
      backgroundColor: '#ffffff',
      borderRadius: 6,
      paddingHorizontal: 10,
      borderWidth: 0.5,
      
    },
    loginButton: {
      backgroundColor: '#939B62',
      marginVertical: 10,
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
      width: "80%",
      height:"80%",
      marginBottom: 8,
      borderRadius: 40
    },
  });
  
  
  