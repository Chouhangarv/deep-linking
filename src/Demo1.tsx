import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Demo1(props:any) {
  const navigation=useNavigation()
  useEffect(()=>{
    props.location && navigation.navigate(props.location)
  })

  return (
    <View style={styles.container}>
      {
        props.location ? <Text>loading</Text> : 
        <View style={styles.mainView}><Text style={styles.heading}>hello I am Default Screen</Text></View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center"
  }
  ,  mainView:{
alignItems:"center",
justifyContent:"center"
  },
  heading:{
    color:"gray",
    fontSize:20,
    color:"red"
  }
})