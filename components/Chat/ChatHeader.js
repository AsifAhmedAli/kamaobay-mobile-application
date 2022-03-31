import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { dashboardScreen } from "../../styles/AppStyles"

const ChatHeader = () => {
  return (
    <View style={dashboardScreen.chattingHeaderContainer}>
      <View>
        <Image
          source={require("../../assets/dashboard/chat/back.png")}
          style={dashboardScreen.chattingOption}
        />
      </View>
      <View style={dashboardScreen.headerFlex}>
        <Image
          source={require("../../assets/dashboard/chat/u1.png")}
          style={dashboardScreen.chattingImage}
        />
        <Text style={dashboardScreen.chattingHeaderText}>Elza</Text>
      </View>
      <View>
        <Image
          source={require("../../assets/dashboard/chat/option.png")}
          style={dashboardScreen.chattingOption}
        />
      </View>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({})
