import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"

const Header = () => {
  return (
    <View style={tw`p-8 bg-blue-900 rounded-bl-2xl`}>
      <View style={tw`flex flex-row`}>
        <View style={tw`flex-1 items-start`}>
          <Image
            source={require("../../assets/dashboard/menu.png")}
            style={[tw`h-8 w-10`, { resizeMode: "contain" }]}
          />
        </View>
        <View style={tw`flex flex-row items-center justify-between w-24`}>
          <Image
            source={require("../../assets/dashboard/notification.png")}
            style={[tw`h-8 w-10`, { resizeMode: "contain" }]}
          />
          <Image
            source={require("../../assets/dashboard/logout.png")}
            style={[tw`h-8 w-10`, { resizeMode: "contain" }]}
          />
        </View>
      </View>
      <View style={tw`flex-row w-full items-center my-4`}>
        <View style={tw` mr-4`}>
          <Image style={tw`bg-white w-12 h-12 rounded-full`} />
        </View>
        <View>
          <Text style={tw`text-white font-bold text-xl`}>Hi, Jones!</Text>
          <Text style={tw`text-white`}>Ready to start your investment!!</Text>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
