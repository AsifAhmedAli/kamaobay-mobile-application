import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Dashboard/Header'
import Intro from '../../components/Dashboard/Intro'
import AddFriendsList from '../../components/Friend/AddFriendsList'
import NavBar from '../../components/Dashboard/NavBar'
import tw from "twrnc"
import { backgroundColor, paddingX } from '../../styles/AppStyles'

const AddFriendScreen = () => {
  return (
    <SafeAreaView style={backgroundColor}>
      <Header />
      <ScrollView style={paddingX} showsVerticalScrollIndicator={false}>
        <Intro />
        <AddFriendsList />
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  )
}

export default AddFriendScreen

const styles = StyleSheet.create({})