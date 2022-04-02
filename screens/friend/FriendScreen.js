import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/Dashboard/Header"
import Intro from "../../components/Dashboard/Intro"
import NavBar from "../../components/Dashboard/NavBar"
import FriendsList from "../../components/Friend/FriendsList"
import { useNavigation } from "@react-navigation/native"
import { backgroundColor, dashboardScreen, paddingX } from "../../styles/AppStyles"

const FriendScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={backgroundColor}>
      <Header />
      <ScrollView style={paddingX} showsVerticalScrollIndicator={false}>
        <Intro />
        <TouchableOpacity
          style={dashboardScreen.addFriendsButton}
          onPress={() => navigation.navigate("AddFriendScreen")}
        >
          <Image
            source={require("../../assets/dashboard/friendList/addFriend.png")}
            style={dashboardScreen.addFriendsButtonImage}
          />
          <Text style={dashboardScreen.addFriendsButtonText}>
            Add new Friends
          </Text>
        </TouchableOpacity>
        <FriendsList />
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  )
}

export default FriendScreen

