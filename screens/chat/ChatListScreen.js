import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/Dashboard/Header"
import NavBar from "../../components/Dashboard/NavBar"
import tw from "twrnc"
import ChatShortcut from '../../components/Chat/ChatShortcut'
import Chat from '../../components/Chat/Chat'

const ChatListScreen = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <Header />
      <ScrollView style={tw``} showsVerticalScrollIndicator={false}>
        <ChatShortcut />
        <Chat />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({})