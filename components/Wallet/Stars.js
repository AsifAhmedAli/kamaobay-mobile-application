import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"

const Stars = () => {
  return (
    <View style={tw`bg-white p-6 rounded-xl shadow-lg `}>
      <Text style={tw`text-blue-900 font-bold text-xl`}>Your Main Stars</Text>
      <View style={tw`flex-row justify-between items-center px-8 my-4`}>
        <Image
          source={require("../../assets/dashboard/wallet/add.png")}
          style={[tw`h-10 w-14`, { resizeMode: "contain" }]}
        />
        <Text style={tw`text-2xl font-semibold text-blue-900`}>10,000</Text>
        <Image
          source={require("../../assets/dashboard/wallet/sub.png")}
          style={[tw`h-10 w-14`, { resizeMode: "contain" }]}
        />
      </View>
      <View style={tw`flex-row justify-evenly items-center`}>
        <TouchableOpacity
          style={tw`bg-gray-200 w-32 px-4 py-2 text-blue-900 rounded-xl`}
        >
          <Text style={tw`text-center text-blue-900 text-xl`}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-gray-300 w-32 px-4 py-2 text-blue-900 rounded-xl`}
        >
          <Text style={tw`text-center text-gray-500 text-xl`}>Withdraw</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-1 items-center my-4`}>
        <TouchableOpacity
          style={tw`bg-blue-900 w-32 px-4 py-3 text-blue-900 rounded-lg`}
        >
          <Text style={tw`text-center text-white text-xl`}>Transfer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Stars

const styles = StyleSheet.create({})
