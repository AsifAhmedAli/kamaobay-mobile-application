import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"
import { SafeAreaView } from "react-native-safe-area-context"

const Header = () => {
  return (
    <View style={tw`flex flex-row items-center justify-between px-8`}>
      <Image
        source={require("../../assets/home_page/logo.png")}
        style={[tw`h-12 -ml-10`, { resizeMode: "contain" }]}
      />
      <Icon
        style={tw`p-1 rounded-lg border border-blue-900 w-10`}
        type="material-community"
        color="blue"
        name="dots-vertical"
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
