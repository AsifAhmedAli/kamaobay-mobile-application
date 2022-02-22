import { StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"

const Header = () => {
  return (
    <View style={tw`p-8 bg-blue-900 rounded-bl-2xl`}>
      <View style={tw`flex flex-row`}>
        <View style={tw`flex-1 items-start`}>
          <Icon type="entypo" color="white" name="menu" />
        </View>
        <View style={tw`flex flex-row item-center justify-between w-16`}>
          <Icon type="evilicon" color="white" name="bell" />
          <Icon type="entypo" color="white" name="log-out" />
        </View>
      </View>
      <View>
        <Text style="text-white font-bold text-xl">Hi, Jones</Text>
        <Text style="text-white">Ready to start your investment!</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
