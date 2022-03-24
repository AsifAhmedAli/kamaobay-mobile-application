import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"

const Intro = () => {
  return (
    <View style={tw`my-8`}>
      <Text style={tw`text-blue-900 text-3xl my-1`}>Let's start</Text>
      <Text style={tw`text-blue-900 text-3xl font-bold`}>earning with us</Text>
      <Text style={tw`text-blue-900 text-lg my-4`}>
        Develop a website by finding a product identity that has value and
        branding to become a character of a company.
      </Text>
      <View style={tw`flex-row items-center my-4`}>
        <TouchableOpacity
          style={tw`flex items-center bg-white p-4 rounded-lg flex-1 m-1`}
        >
          <Image
            source={require("../../assets/home/contact.png")}
            style={[tw`h-12 w-full`, { resizeMode: "contain" }]}
          />
          <Text style={tw`text-blue-900 text-2xl `}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex items-center bg-blue-900 p-4 rounded-lg flex-1 m-1`}
        >
          <Image
            source={require("../../assets/home/video.png")}
            style={[tw`h-12 w-full`, { resizeMode: "contain" }]}
          />
          <Text style={tw`text-white text-2xl `}>Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({})
