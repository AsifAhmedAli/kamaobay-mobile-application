import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/Dashboard/Header"
import Intro from "../../components/Dashboard/Intro"
import NavBar from "../../components/Dashboard/NavBar"
import FriendsList from "../../components/Friend/FriendsList"

const FriendScreen = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <Header />
      <ScrollView style={tw`px-8`} showsVerticalScrollIndicator={false}>
        <Intro />
        <View
          style={tw`flex-row py-4 border border-dashed border-blue-900 rounded-lg  items-center justify-evenly`}
        >
          <Image style={tw`w-12 h-12 p-1 bg-blue-900`} />
          <Text style={tw`text-2xl text-blue-900`}>Add new Friend</Text>
        </View>
        <FriendsList />
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  )
}

export default FriendScreen

const styles = StyleSheet.create({})
