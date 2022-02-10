import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"

const NavBar = () => {
  return (
    <View
      style={tw`bg-white flex flex-row rounded-t-xl h-12 py-1 items-center justify-evenly shadow-xl`}
    >
      <View style={tw`flex items-center`}>
        <Icon style={tw`p-1 w-10`} type="feather" color="blue" name="home" />
        <Text style={tw`text-xs text-blue-900`}>Home</Text>
      </View>
      <View style={tw`flex items-center`}>
        <Icon
          style={tw`p-1 w-10`}
          type="material-community"
          color="blue"
          name="view-dashboard-outline"
        />
        <Text style={tw`text-xs text-blue-900`}>Dashboard</Text>
      </View>
      <View style={tw`flex items-center`}>
        <Icon
          style={tw`p-1 w-10`}
          type="feather"
          color="blue"
          name="settings"
        />
        <Text style={tw`text-xs text-blue-900`}>Settings</Text>
      </View>
      <View style={tw`flex items-center`}>
        <Icon
          style={tw`p-1 w-10`}
          type="feather"
          color="blue"
          name="user"
        />
        <Text style={tw`text-xs text-blue-900`}>Profile</Text>
      </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})
