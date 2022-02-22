import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc"
import NavBar from "../../components/Dashboard/NavBar"
import Header from "../../components/Dashboard/Header"

const DashboardHomeScreen = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <Header/>
      <View style={tw`flex flex-1 justify-end`}>
        <NavBar />
      </View>
    </SafeAreaView>
  )
}

export default DashboardHomeScreen

const styles = StyleSheet.create({})
