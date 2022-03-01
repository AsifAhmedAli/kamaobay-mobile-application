import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Dashboard/Header'
import Intro from '../../components/Dashboard/Intro'
import NavBar from '../../components/Dashboard/NavBar'
import GamesList from '../../components/Games/GamesList'

const GamesScreen = () => {
    return (
      <SafeAreaView style={tw`h-full`}>
        <Header />
        <ScrollView style={tw`px-8`} showsVerticalScrollIndicator={false}>
          <Intro />
          <GamesList />
        </ScrollView>

        <NavBar />
      </SafeAreaView>
    )
}

export default GamesScreen

const styles = StyleSheet.create({})