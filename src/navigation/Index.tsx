import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Demo1 from '../Demo1'
import Demo2 from '../Demo2'
import Demo3 from '../Demo3'

export default function Index(props:any) {
    const Stack=createStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="demo1" component={()=><Demo1 location={props.location}></Demo1>}></Stack.Screen>

      <Stack.Screen options={{headerShown:false}} name="demo2" component={Demo2}></Stack.Screen>

      <Stack.Screen options={{headerShown:false}} name="demo3" component={Demo3}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>







    
    
  )
}

const styles = StyleSheet.create({})