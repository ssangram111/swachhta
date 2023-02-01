import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    
  } from 'react-native';
  import React,{useState,useEffect} from 'react'
  import Icon from 'react-native-vector-icons/AntDesign';
  import axios from 'axios';
import {Collect} from '../component/Loaders';
  
  const Automatic = ({navigation,route}) => {
  
    const qrvalue = route.params.qrvalue;
  
    const [isLoading,setIsLoading] =useState(false) 

    const [data,setData] = useState('')
  
   const submit = ()=>{
    
    axios.get(`https://garbage-backend.onrender.com/api/user/${qrvalue}`)
    .then(function(response){
      setData(response.data)
    }).catch(function(error){
      console.log(error)
    })
   }
  

   const collection= (garbageCollect)=>{
    setIsLoading(true)
        axios.post(`https://garbage-backend.onrender.com/api/collectedNotCollected`,{
       name:data.name,
      email:data.email,
      contact:data.contact,
      ward:data.ward,
      address:data.address,
      collected:garbageCollect
        })
        .then(function(response){

          setTimeout(() => {
            setIsLoading(false) 
            navigation.replace("DashBoardGC");
          }, 2000);

        })
        .catch(function(error){
          console.log(error)
          setIsLoading(false)
        })
   }
  
 
   useEffect(() => {
    if(qrvalue && qrvalue.length == "24"){
      submit();
    }
   }, [data])
   
    return (

      <View style={styles.container}>
        
        {isLoading ? (
      <Collect/>
      ) : (
          <View style={styles.centerizedView}>

       
            <ScrollView style={styles.authBox} 
            showsVerticalScrollIndicator={false}>
              
              <Text style={styles.loginTitleText}>Collect Data</Text>
              <View style={styles.hr}></View>
  
              <View style={styles.inputBox}>
  
                <View style={styles.seachBar}>
                  <TextInput
                  placeholder='enter object id'
                  style={styles.inputOne}
                  value={qrvalue}
                  editable={false}
                  autoCapitalize={false}
                />
                <TouchableOpacity style={styles.srchBtn} onPress={submit}>
                  <Icon name='search1' size={20} color={'black'}/>
                </TouchableOpacity>
                
                </View>
              
  
  
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                  style={styles.input}
                  value={data.name}
                 
                  autoCapitalize={false}
                />
              </View>
  
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={data.email}
                  
                  autoCapitalize={false}
                />
              </View>
  
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Contact</Text>
                <TextInput
                  style={styles.input}
                  value={data.contact}
                  
                  autoCapitalize={false}
                />
              </View>
  
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Ward</Text>
                <TextInput
                  style={styles.input}
                  value={data.ward}
                  autoCapitalize={false}
                />
              </View>
  
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Address</Text>
                <TextInput
                  style={styles.input}
                  value={data.address}
                  autoCapitalize={false}
                />
              </View>
  
          
              <TouchableOpacity style={styles.loginButton} onPress={()=>collection(true)}
               >
                <Text style={styles.loginButtonText} >Collect</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.loginButton} onPress={()=>collection(false)}>
                <Text style={styles.loginButtonText} >Not Collect</Text>
              </TouchableOpacity>
          
            </ScrollView>
            
          </View>
          )}
        </View>
    )
  }
  
  export default Automatic
  
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
    seachBar:{
      borderBottomWidth:2,
      borderBottomColor:'pink',
      flexDirection:'row',
      borderRadius:4,
      elevation:5,
      shadowColor:'black'
      
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
      backgroundColor: '#dae0e7',
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    inputOne: {
      flex:4,
      width: '100%',
      height: 40,
      backgroundColor: '#dae0e7',
      borderRadius:4,
      paddingHorizontal: 10,
    },
    srchBtn:{
      backgroundColor:'lightgrey',
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
    loginButton: {
      backgroundColor: '#939B62',
      marginVertical: 10,
      paddingVertical: 10,
      borderRadius: 8,
      elevation:5,
      shadowColor:'black'
    },
    loginButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
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
  