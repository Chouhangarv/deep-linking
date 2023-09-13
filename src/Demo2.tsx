import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Demo2=()=> {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}><Text style={styles.heading}>I am Link One</Text></View>
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
export default Demo2