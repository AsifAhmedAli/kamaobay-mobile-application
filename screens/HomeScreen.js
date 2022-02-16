import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/home/Header"
import tw from "twrnc"
import Intro from "../components/home/Intro"
import Earning from "../components/home/Earning"
import NavBar from "../components/home/NavBar"

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-gray-200 h-full`}>
      <Header style={tw``} />
      <ScrollView style={tw`px-8`} showsVerticalScrollIndicator={false}>
        <Intro />
        <Earning />
      </ScrollView>
      <NavBar style={tw``}/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
