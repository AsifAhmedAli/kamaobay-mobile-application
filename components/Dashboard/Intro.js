import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const Intro = () => {
  return (
    <View style={tw`flex-row items-center justify-between my-8`}>
      <View
        style={tw`flex justify-between bg-white rounded-lg w-32 h-36 shadow-md px-4 py-6`}
      >
        <Image
          source={require("../../assets/dashboard/task.png")}
          style={[tw`h-8 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-blue-900 text-lg font-semibold`}>
          Completed Task
        </Text>
      </View>
      <View
        style={tw`flex justify-between bg-blue-900 rounded-lg w-32 h-36 shadow-md px-4 py-6`}
      >
        <Image
          source={require("../../assets/dashboard/addStars.png")}
          style={[tw`h-8 w-10`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-white text-lg font-semibold`}>99,999 Stars</Text>
      </View>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({})
