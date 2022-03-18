import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const ChatHeader = () => {
  return (
    <View
      style={tw`bg-white rounded-t-xl p-6 flex-row items-start justify-between`}
    >
      <View>
        <Image style={tw`h-8 w-8 bg-blue-900 rounded-full`} />
      </View>
      <View style={tw`flex-1 items-center`}>
        <Image style={tw`h-10 w-10 bg-blue-900 rounded-full mb-2`} />
        <Text>Elza</Text>
      </View>
      <View>
        <Image style={tw`h-8 w-8 bg-blue-900 rounded-full`} />
      </View>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({})
