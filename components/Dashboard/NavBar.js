import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import tw from "twrnc"
import { Icon } from "react-native-elements"

const NavBar = () => {
  const navigation = useNavigation()
  return (
    <View
      style={tw`bg-white flex flex-row rounded-t-xl h-12 py-1 items-center justify-evenly shadow-xl`}
    >
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("DashboardHomeScreen")}
      >
        <Icon
          style={tw`p-1 w-10`}
          type="material-community"
          color="blue"
          name="view-dashboard-outline"
        />
        <Text style={tw`text-xs text-blue-900`}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("")}
      >
        <Icon style={tw`p-1 w-10`} type="entypo" color="blue" name="wallet" />
        <Text style={tw`text-xs text-blue-900`}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("")}
      >
        <Icon
          style={tw`p-1 w-10`}
          type="antdesign"
          color="blue"
          name="shoppingcart"
        />
        <Text style={tw`text-xs text-blue-900`}>Stars</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`flex items-center`}>
        <Icon style={tw`p-1 w-10`} type="entypo" color="blue" name="chat" />
        <Text style={tw`text-xs text-blue-900`}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("")}
      >
        <Icon style={tw`p-1 w-10`} type="feather" color="blue" name="user" />
        <Text style={tw`text-xs text-blue-900`}>Friend</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})
