import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Dashboard/Header'
import Intro from '../../components/Dashboard/Intro'
import BuyStars from '../../components/Stars/BuyStars'
import NavBar from '../../components/Dashboard/NavBar'
import tw from "twrnc"
import { backgroundColor, paddingX } from '../../styles/AppStyles'

const BuyStarsScreen = () => {
  return (
    <SafeAreaView style={backgroundColor}>
      <Header />
      <ScrollView style={paddingX} showsVerticalScrollIndicator={false}>
        <Intro />
        <BuyStars />
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  )
}

export default BuyStarsScreen

const styles = StyleSheet.create({})