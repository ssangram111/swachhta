import React,{useState,useEffect} from 'react';

import { StyleSheet, Text,View,TouchableOpacity, Alert,FlatList } from 'react-native';
import { Button,SpeedDial,Dialog,CheckBox } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

import Resolve from '../component/resolve';


const DashBoardSS = ({navigation,route}) => {

  const userID = route.params.userID.user._id;
  const name = route.params.userDetails.user.name;



  const [open, setOpen] = useState(false);
  const [openDialogRef,setOpenDialogref] = useState('')
  const[input1,setInput1]= useState('')
  const[input2,setInput2]= useState('')
  const[input3,setInput3]= useState('')


 


  const [visible,setVisible] = useState(false)
  
  const [providers,setProviders] = useState([])

const filterData = [];

  

providers.find((value,i) => {
  if(value.userId === userID && value.complained === true){
   filterData.push(value)
  }
})

  useEffect(()=>{
    async function getAllProvider(){
    try {
      const complainData = await axios.get(`https://garbage-backend.onrender.com/api/complain/${userID}`)
      
     const data = complainData.data;
     setProviders(data)
    } catch (error) {
      console.log(error)
    }
    }
    getAllProvider()
  }, [providers])

  const complainData = {
    name:route.params.userID.user.name,
    email:route.params.userID.user.email,
    contact:route.params.userID.user.contact,
    ward:route.params.userID.user.ward,
    address:route.params.userID.user.address,
    complainReason:input1,
    complainType:input2,
    suggestion:input3,
    complained:true,
    userId:route.params.userID.user._id
  }
  const sugestionData = {
    name:route.params.userID.user.name,
    email:route.params.userID.user.email,
    contact:route.params.userID.user.contact,
    ward:route.params.userID.user.ward,
    address:route.params.userID.user.address,
    suggested:true,
    suggestion:input3,
    userId:route.params.userID.user._id
  }

  const postComplain = (ref)=>{
   
    if(ref==='complain'){
      axios.post(`https://garbage-backend.onrender.com/api/registerComplain`,complainData)
    .then(function(response){
      
      Alert.alert('complain raised')
      setInput1('')
      setInput2('')
    
    }).catch(function(error){
      console.log(error)

    })
    }
    else if(ref === 'suggestion'){
     
      axios.post(`https://garbage-backend.onrender.com/api/registerComplain`,sugestionData)
      .then(function(response){
        
        Alert.alert('Thank you for you Suggestion')
        setInput3('')
     
      }).catch(function(error){
        console.log(error)
  
      })
     
    }
   
  }


  const submitComplain = (ref)=>{
    toggelDialog();
    postComplain(ref)
  }


  const toggelDialog = (ref)=>{
    setOpenDialogref(ref)
    setVisible(!visible)
  }
  
  const nav=(press)=>{
    navigation.navigate(press,{
      userID:userID,
      name:name
    })
  }

  const deleteComplain=(id)=>{
    

    axios.delete(`https://garbage-backend.onrender.com/api/complain/${id}`)
    .then(function(response){
        Alert.alert(response)
    })
    .catch(function(error){
      Alert.alert(error)
    })
  }

  return (
   <View style={styles.container}>
   
    <View style={styles.btnContainer}>
      <View style={styles.linear}>
     
      <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]} colors={['#fa9a41', '#fcb879', '#FFB26B']} style={styles.linearGradient}>
      <TouchableOpacity onPress={()=>{nav('GenerateQR')}}>
     <Text style={styles.buttonText}>
     Show QR Code
  </Text>
    </TouchableOpacity>
</LinearGradient>
    </View>
    </View>
    


    <View style={styles.complainList}>
      <Text style={styles.complainListText}>Complains raised</Text>
      <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                         locations={[0,0.5,0.7]} colors={['#fa9a41', '#fcb879', '#f6ab56']} style={styles.linearGradient}>
      <View style={styles.complainData}>
      <View style={styles.complainReasons}>
        <Text style={styles.text}>S.No.</Text>
        </View>
        <View style={styles.complainReasons}>
        <Text style={styles.text}>Reason</Text>
        </View>
        <View style={styles.complainReasons}>
        <Text style={styles.text}>Type</Text>
        </View>
        
       </View>
         </LinearGradient>
        <FlatList
            data={filterData}
            keyExtractor={item => item._id}
            style={styles.complainParent}
            renderItem={({item,index})=>{
                return(
                   <View style={styles.complain}>
                     <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                         locations={[0,0.5,0.7]} colors={['#fa9a41', '#fcb879', '#f6ab56']} style={styles.linearGradient}>
      
                       <Resolve style={styles.resolveButton} onPress={()=>{deleteComplain(item._id)}}/>

                                  <View style={styles.complainData}>
                                  
                                  <View style={styles.complainReasons}>
                                    <Text>{index+1}</Text>
                                    </View>
                                    <View style={styles.complainReasons}>
                                    <Text>{item.complainReason}</Text>
                                    </View>
                                    <View style={styles.complainReasons}>
                                    <Text>{item.complainType}</Text>
                                    </View>
                                  </View>
                </LinearGradient>
                  
                   
           
                    </View>
                    
                )

            }}
            />
       
    </View >


    <SpeedDial
    isOpen={open}
    icon={{ name: 'edit', color: '#fff' }}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
    buttonStyle={styles.speedDial}
    
  >
    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Give Suggestion"
      onPress={()=>toggelDialog('Give Suggestion')}
      buttonStyle={styles.speedDial}
    />
    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Raise complain"
      onPress={()=>toggelDialog("Raise complain")}
      buttonStyle={styles.speedDial}
    />
    
  </SpeedDial>
   

  <Dialog
      isVisible={visible}
      onBackdropPress={toggelDialog}
    >
      {openDialogRef === 'Raise complain' ? (<>
      <Dialog.Title title="Raise Complain"/>
       <TextInput placeholder='Reason for complaining' value={input1} onChangeText={setInput1}/>
     <TextInput placeholder='Type of complain'  value={input2} onChangeText={setInput2}/>
     <Dialog.Actions>
        <Dialog.Button
          title="CONFIRM"
          onPress={() => {
            
            submitComplain('complain')
            
          }}
        />
        <Dialog.Button title="CANCEL" onPress={toggelDialog} />
      </Dialog.Actions>
      </>
      )  : ( 
        <>
         
        <Dialog.Title title="Give Suggestion"/>
        <TextInput placeholder='Give Suggestion' multiline={true} value={input3} onChangeText={setInput3}/>
        <Dialog.Actions>
        <Dialog.Button
          title="CONFIRM"
          onPress={() => {
            
            submitComplain('suggestion')
            
          }}
        />
        <Dialog.Button title="CANCEL" onPress={toggelDialog} />
      </Dialog.Actions>
        </>
    )}
     
    </Dialog>
   </View>
  )
}

export default DashBoardSS

const styles = StyleSheet.create({
 container:{
  
  flex:1,
  backgroundColor:"white"
 },
 btnContainer:{
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  
  backgroundColor:"white"
 },
 linear:{
  width:'60%',
  padding:20
 },
 linearGradient: {
   borderRadius: 10,
  
},
complainList:{
  
   
    justifyContent:'center',
    alignItems:'center',
    
    
},
complainListText:{
 fontSize:20,
 fontFamily:'Gill Sans',
 color:'black',
},
complainParent:{

  width:'95%',
 
  elevation:30,
  shadowColor:'black'
 
},
complain:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  
  borderRadius:5,
  
  margin:10,
  elevation:10,
  shadowColor:'black'
  
},
complainData:{
 padding:10,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
},
complainReasons:{

  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
},
resolveButton:{
  margin:5,
  position:'absolute',
  top:0,
  right:0

  
},
buttonText: {
  fontSize: 18,
  fontFamily: 'Gill Sans',
  textAlign: 'center',
  margin: 10,
  color: '#ffffff',
  backgroundColor: 'transparent',
},
speedDial:{
  backgroundColor:'#7d6f3c'
},
text:{
  fontSize:18,
  fontFamily: 'Gill Sans',
  textAlign: 'center',
  
  color: '#000000',
  backgroundColor: 'transparent',
  
}
});