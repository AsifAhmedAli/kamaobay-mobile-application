import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import tw from "twrnc"
import { Icon } from "react-native-elements"

const NavBar = () => {
  const navigation = useNavigation()
  return (
    <View
      style={tw`bg-white  flex flex-row rounded-t-xl h-12 py-1 items-center justify-evenly shadow-xl`}
    >
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("DashboardHomeScreen")}
      >
        <Image
          source={require("../../assets/dashboard/dashboard.png")}
          style={[tw`h-6 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-xs text-blue-900`}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("WalletScreen")}
      >
        <Image
          source={require("../../assets/dashboard/wallet.png")}
          style={[tw`h-6 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-xs text-blue-900`}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("BuyStarsScreen")}
      >
        <Image
          source={require("../../assets/dashboard/stars.png")}
          style={[tw`h-6 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-xs text-blue-900`}>Stars</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("ChatListScreen")}
      >
        <Image
          source={require("../../assets/dashboard/chat.png")}
          style={[tw`h-6 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-xs text-blue-900`}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("FriendScreen")}
      >
        <Image
          source={require("../../assets/dashboard/friend.png")}
          style={[tw`h-6 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-xs text-blue-900`}>Friend</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})
