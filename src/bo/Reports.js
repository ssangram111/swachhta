import { StyleSheet, Text, View,ScrollView,TouchableOpacity,FlatList } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Table, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/Foundation';
import { SearchBar,Divider  } from '@rneui/themed';
import axios from 'axios';



const Reports = ({navigation ,route}) => {

  const name = route.params.Name
  const [search, setSearch] = useState("");
  const [providers,setProviders]=useState('')
  const [filterData,setFilterData] = useState('')
    
  useEffect(()=>{
    if(name === 'Customers'){
      console.log(name)
      async function getAllProvider(){
      try {
        const complainData = await axios.get(`https://garbage-backend.onrender.com/api/user`)
        console.log(complainData.data)
        setProviders(complainData.data)
      } catch (error) {
        console.log(error)
      }
      }
      getAllProvider()
    }
    else if(name === 'Complaints'){
      console.log(name)
      async function getComplaints(){
        try {
          const complainData = await axios.get(`https://garbage-backend.onrender.com/api/complain`)
          console.log(complainData.data)
          setProviders(complainData.data)
        } catch (error) {
          console.log(error)
        }
        }
        getComplaints()
     }
    else if(name === 'Collected'){
      console.log(name)
      async function getAllCollected(){
        try {
          const complainData = await axios.get(`https://garbage-backend.onrender.com/api/collectedNotCollected/collectedData`)
          console.log(complainData.data.data)
          setProviders(complainData.data.data)
        } catch (error) {
          console.log(error)
        }
        }
        getAllCollected()

    }
    else if(name === 'Not Collected'){
      console.log(name)
      async function getAllNotCollected(){
        try {
          const complainData = await axios.get(`https://garbage-backend.onrender.com/api/collectedNotCollected/notCollectedData`)
          console.log(complainData.data.data)
          setProviders(complainData.data.data)
        } catch (error) {
          console.log(error)
        }
        }
        getAllNotCollected()

    }else if(name === 'Suggestions'){
      console.log(name)
      async function getSuggestions(){
        try {
          const complainData = await axios.get(`https://garbage-backend.onrender.com/api/suggestion`)
          console.log(complainData.data)
          setProviders(complainData.data)
        } catch (error) {
          console.log(error)
        }
        }
        getSuggestions()
    }
    else{
      console.log('nothing to see')
    }
    
  },[])

  const updateSearch = (search) => {
    setSearch(search);
    const newData = providers.filter((item) =>
      item.ward === search
    );
    setFilterData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{name}</Text>
      </View>
     
      <View style={styles.pagination}>
          <View style={styles.paginationLeft}> 
            <TouchableOpacity>
            <Icon name="previous" size={30} color="#291f1f" />
            </TouchableOpacity>
          </View>
          <View style={styles.filter}>
          <SearchBar
            placeholder="Type ward no"
            onChangeText={updateSearch}
            value={search}
            round={true}
            lightTheme={true}
            containerStyle={styles.searchbar}
            inputContainerStyle={styles.search}
            inputStyle={styles.searchText}
            platform={'android'}
            showCancel={true}
          />
          </View>
          <View style={styles.paginationRight}>
          <TouchableOpacity>
            <Icon name="next" size={30} color="#291f1f" />
            </TouchableOpacity>
          </View>
        </View>
        <Divider width={5} color={'#939B62'} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          
            <FlatList
                data={filterData === '' ? providers : filterData}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <View style={styles.tableRow}>
                        <View style={[styles.tableCell, styles.tableHeader,{width:60}]}>
                            <Text style={styles.tableHeaderText}>Name</Text>
                        </View>
                        <View style={[styles.tableCell, { width: 150 }]}>
                            <Text>{item.name}</Text>
                        </View>
                        <View style={[styles.tableCell, styles.tableHeader,{width:70}]}>
                            <Text style={styles.tableHeaderText}>Contact</Text>
                        </View>
                        <View style={[styles.tableCell, { width: 110 }]}>
                            <Text>{item.contact}</Text>
                        </View>
                        <View style={[styles.tableCell, styles.tableHeader,{width:60}]}>
                            <Text style={styles.tableHeaderText}>Email</Text>
                        </View>
                        <View style={[styles.tableCell, { width: 150 }]}>
                            <Text numberOfLines={2}>{item.email}</Text>
                        </View>
                        <View style={[styles.tableCell, styles.tableHeader,{width:60}]}>
                            <Text style={styles.tableHeaderText}>Ward</Text>
                        </View>
                        <View style={[styles.tableCell, { width: 50 }]}>
                            <Text >{item.ward}</Text>
                        </View>
                        <View style={[styles.tableCell, styles.tableHeader,{width:72}]}>
                            <Text style={styles.tableHeaderText}>Address</Text>
                        </View>
                        <View style={[styles.tableCell, { width: 150 }]}>
                            <Text numberOfLines={3}>{item.address}</Text>
                        </View>
                        {item.suggested ===true ? (
                          <>
                          <View style={[styles.tableCell, styles.tableHeader,{width:92}]}>
                            <Text style={styles.tableHeaderText}>Suggestion</Text>
                        </View>
                        <View style={[styles.tableCell, { width: 150 }]}>
                            <Text numberOfLines={3}>{item.suggestion}</Text>
                        </View>
                          </>
                        ):(null) }
                        {item.complained === true ? (
                          <>
                          <View style={[styles.tableCell, styles.tableHeader,{width:80}]}>
                            <Text style={styles.tableHeaderText}>Complain</Text>
                        </View>
                        <View style={[styles.tableCell, { width: 150 }]}>
                            <Text numberOfLines={3}>{item.complainReason}</Text>
                        </View>
                          </>
                        ):(null) }
                    </View>
                )}
            />
        </ScrollView>
        
      </View>
  )
}

export default Reports

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
},
tableCell: {
    padding: 10,
},
tableHeader: {
    backgroundColor: '#f2f2f2',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
},
tableHeaderText: {
    fontWeight: 'bold',
},
  container: { 
     
     flex:1,
    padding: 16, 
    paddingTop: 30,
     backgroundColor: '#fff' 
    },
    tag:{
      justifyContent:'center',
      alignItems:'center',
      margin:10,
  
    },
    tagText:{
      fontSize:25,
      color:'#374505',
      fontWeight:'bold'
    },
    table:{
     
    },
    pagination:{
      
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:10
    },
    paginationLeft:{
     flex:1
    },
    paginationRight:{
      flex:1,
      flexDirection:'row-reverse'

    },
    filter:{
      flex:3
    },
  head: { 
    height: 40, 
    backgroundColor: '#f1f8ff',
    
   },
  text: {
     margin: 6
     },
     search:{
      height:10,
      
     },
     searchbar:{
      backgroundColor:'#f2f2f2',
      height:30,
      elevation:5,
      shadowColor:'black',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center'

     },
     searchText:{
        color:"black",
        height:10,
        
     }

})