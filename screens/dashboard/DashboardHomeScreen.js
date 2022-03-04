import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc"
import NavBar from "../../components/Dashboard/NavBar"
import Header from "../../components/Dashboard/Header"
import Intro from "../../components/Dashboard/Intro"
import FreeEarning from "../../components/Dashboard/FreeEarning"
import PremiumTasks from "../../components/Dashboard/PremiumTasks"
import { useNavigation } from "@react-navigation/native"

const DashboardHomeScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`h-full`}>
      <Header />
      <ScrollView style={tw`px-8`} showsVerticalScrollIndicator={false}>
        <Intro />
        <FreeEarning />
        <PremiumTasks />
        <Text
          style={tw`bg-rose-100 p-4 m-2 text-blue-900`}
          onPress={() => navigation.navigate("GamesScreen")}
        >
          Games
        </Text>
        <Text
          style={tw`bg-rose-100 p-4 m-2 text-blue-900`}
          onPress={() => navigation.navigate("TasksScreen")}
        >
          Tasks
        </Text>
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  )
}

export default DashboardHomeScreen

const styles = StyleSheet.create({})
