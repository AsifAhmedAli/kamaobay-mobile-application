import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const Intro = () => {
  return (
    <View style={tw`flex-row items-center justify-between my-4`}>
      <View style={tw`bg-white rounded-lg w-32 h-full shadow-md p-4`}>
        <Image style={tw`bg-blue-900 h-10 w-10 mb-4`} />
        <Text style={tw`text-blue-900 text-lg font-semibold`}>Completed Task</Text>
      </View>
      <View
        style={tw`bg-white bg-blue-900 rounded-lg w-32 h-full shadow-md p-4`}
      >
        <Image style={tw`bg-white h-10 w-10 mb-4`} />
        <Text style={tw`text-white text-lg font-semibold`}>99,999 Stars</Text>
      </View>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({})
