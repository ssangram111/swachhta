import { StyleSheet, Text, View,FlatList,SafeAreaView,TouchableOpacity,Button } from 'react-native'
import React, { useState } from 'react'


const DashBoardBO = ({navigation}) => {

  const tabs= [
    {   name:"Collected",
         nav:'Reports',
         Image:''   
    },
    {   name:"Not Collected",
        nav:'Reports',
        Image:''   
    },
    {   name:'Not Attended',
        nav:'Reports',
        Image:''   
    },
    {   name:"Suggestions",
        nav:'Reports',
        Image:''   
    },
    {
        name:"Complaints",
        nav:'Reports',
        Image:''   
    },
    {
        name:"Customers",
        nav:'Reports',
        Image:''   
    },
    {
        name:"Collection Summary",
        nav:'Reports',
        Image:''   
    },
    {
        name:"Garbage Collector Detail",
        nav:'Reports',
        Image:''   
    }      
    ]

    function navigate (nav,Name){
        console.log(`hi ${nav}`)
        
       navigation.navigate(`${nav}`,{
        Name:Name
       })
    }



  return (
    <View style={styles.container}>
    <View style={styles.menu}><Text style={styles.menuText}>Reports</Text>
        
    </View>
    <View style={styles.menuTabs}>
        <FlatList
     data={tabs}
     keyExtractor = {items => items.name}
     numColumns={2}
     horizontal={false}
     renderItem = {({item}) =>{
        return(
            
                 <TouchableOpacity style={styles.tabs} onPress={()=>navigate(item.nav,item.name)}>
                    <Text style={styles.tabText}>{item.name}</Text>
                 </TouchableOpacity>
            
           
        )
     }}
    />
    </View>
    
</View>
  )
}

export default DashBoardBO

const styles = StyleSheet.create({
  container:{
    justifyContent:"space-between",
    backgroundColor:'white',
    flex:1
},
tabs:{
  backgroundColor:'#939B62',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    flex:1,
    margin:15,
    padding:10,
    elevation: 10,
    shadowColor: '#050505',
    
   
    
},

tabText:{
    fontSize:15,
    fontWeight:'500',
    color:'white',
    textAlign:'center'
},
menuTabs:{
    flex:7,
  
},
menu:{
    flex:1,
    justifyContent:'center',
   
    alignItems:'center',

   
},
menuText:{
    fontSize:25,
    color:'#374505',
    fontWeight:'bold'
}
})