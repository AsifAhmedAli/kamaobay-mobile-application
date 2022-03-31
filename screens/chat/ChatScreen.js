import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/Dashboard/Header"
import NavBar from "../../components/Dashboard/NavBar"
import tw from "twrnc"
import ChatHeader from "../../components/Chat/ChatHeader"
import Chatting from "../../components/Chat/Chatting"
import { backgroundColor } from "../../styles/AppStyles"

const ChatScreen = () => {
  return (
    <SafeAreaView style={backgroundColor}>
      <Header />
      <ChatHeader />
      <Chatting />
      <NavBar />
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})
