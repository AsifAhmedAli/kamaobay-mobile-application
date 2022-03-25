import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const ChatHeader = () => {
  return (
    <View
      style={tw`bg-white rounded-t-xl px-6 pb-2 pt-4 flex-row items-center justify-between`}
    >
      <View>
        <Image
          source={require("../../assets/dashboard/chat/back.png")}
          style={[tw`h-6 w-6`, { resizeMode: "contain" }]}
        />
      </View>
      <View style={tw`flex-1 items-center`}>
        <Image
          source={require("../../assets/dashboard/chat/u1.png")}
          style={[tw`h-12 w-12 rounded-full`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-blue-900 font-bold`}>Elza</Text>
      </View>
      <View>
        <Image
          source={require("../../assets/dashboard/chat/option.png")}
          style={[tw`h-6 w-6`, { resizeMode: "contain" }]}
        />
      </View>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({})
