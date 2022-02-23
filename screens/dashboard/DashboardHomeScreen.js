import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc"
import NavBar from "../../components/Dashboard/NavBar"
import Header from "../../components/Dashboard/Header"
import Intro from "../../components/Dashboard/Intro"
import FreeEarning from "../../components/Dashboard/FreeEarning"

const DashboardHomeScreen = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <Header />
      <ScrollView style={tw`px-8`} showsVerticalScrollIndicator={false}>
        <Intro />
        <FreeEarning />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  )
}

export default DashboardHomeScreen

const styles = StyleSheet.create({})
