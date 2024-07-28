import { View, Text,ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import ChatList from './components/ChatList'
const App = () => {
  return (
    <SafeAreaView>
        <ChatList/>
    </SafeAreaView>
  )
}

export default App