import { View, Text,ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ChatList from './components/ChatList'
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ChatList/>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container: {
    flex:1
  }
})
export default App