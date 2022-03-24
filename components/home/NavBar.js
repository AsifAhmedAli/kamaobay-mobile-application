import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"

const NavBar = () => {
  const navigation = useNavigation()
  return (
    <View
      style={tw`bg-white flex flex-row rounded-t-xl h-12 py-1 items-center justify-evenly shadow-xl`}
    >
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          source={require("../../assets/auth/home.png")}
          style={[tw`h-6 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-xs text-blue-900`}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("DashboardHomeScreen")}
      >
        <Image
          source={require("../../assets/auth/dashboard.png")}
          style={[tw`h-6 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-xs text-blue-900`}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`flex items-center`}>
        <Image
          source={require("../../assets/auth/setting.png")}
          style={[tw`h-6 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-xs text-blue-900`}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex items-center`}
        onPress={() => navigation.navigate("SignInScreen")}
      >
        <Image
          source={require("../../assets/auth/profile.png")}
          style={[tw`h-6 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-xs text-blue-900`}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})
