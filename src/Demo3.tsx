import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

export default function Demo3() {
  return (
    <WebView
        source={{ uri: 'https://audioone.fyi/newsletter/64dba1a2335cb517309ea770/64db6b1c20dff71606b5ac42' }} // Replace with the desired website URL
        style={styles.webview}
      /> 
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
