
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Demo1 from './src/Demo1';
import Demo2 from './src/Demo2';
import Demo3 from './src/Demo3';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Index from './src/navigation/Index';
const parseQueryParams = (url) => {
  const queryParams = {};
  const parts = url.split('?');
  if (parts.length > 1) {
    const queryString = parts[1];
    const keyValuePairs = queryString.split('&');
    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split('=');
      queryParams[key] = decodeURIComponent(value);
    });
  }
  return queryParams;
};
const App = () => {
  const [location,setLocation]=useState()
  useEffect(()=>{
 

    dynamicLinks().onLink((url)=>{
      const link=url.url;
      const queryParams = parseQueryParams(link);

    // Access the query parameters
    const id = queryParams.id;
    setLocation(id)

    // Use the extracted data as needed in your app
    console.log('ID:', id);
    })
  },[])

useEffect(()=>{
  dynamicLinks().getInitialLink().then((url)=>{
    const link=url.url;
    const queryParams = parseQueryParams(link);

  // Access the query parameters
  const id = queryParams.id;
  setLocation(id)
  // Use the extracted data as needed in your app
  console.log('ID:', id);
  })
},[])

  

  // useEffect(() => {
  //   dynamicLinks()
  //     .getInitialLink()
  //     .then(link => {
  //       const links=url.url;
  //     const queryParams = parseQueryParams(links);

  //   // Access the query parameters
  //   const id = queryParams.id;

  //   // Use the extracted data as needed in your app
  //   console.log('ID:', id);

  //     });
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
     <Index location={location}></Index>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
