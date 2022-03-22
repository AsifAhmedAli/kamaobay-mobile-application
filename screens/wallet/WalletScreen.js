import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/Dashboard/Header"
import NavBar from "../../components/Dashboard/NavBar"
import Intro from "../../components/Dashboard/Intro"
import tw from "twrnc"
import Stars from "../../components/Wallet/Stars"
import Statements from "../../components/Wallet/Statements"

const WalletScreen = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <Header />
      <ScrollView style={tw`px-8`} showsVerticalScrollIndicator={false}>
        <Intro />
        <Stars />
        <Statements/>
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  )
}

export default WalletScreen

const styles = StyleSheet.create({})
