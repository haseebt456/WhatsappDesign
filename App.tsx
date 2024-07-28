import { View, Text,ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import ChatList from './components/ChatList'
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ChatList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App