import { StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const Pricing = () => {
  return (
    <View>
      <Text style={tw`text-blue-900 text-xl font-bold my-4`}>Pricing</Text>
      <View style={tw`flex-row justify-between items-center my-4`}>
        <View style={tw`bg-white w-38 h-full p-4 rounded-lg shadow`}>
          <Text style={tw`text-blue-900 font-bold text-lg`}>
            Simple Pricing, All the Features
          </Text>
        </View>
        <View style={tw`bg-blue-900 w-38 h-full p-4 rounded-lg shadow`}>
          <Text style={tw`text-white`}>Standard</Text>
          <Text style={tw`text-white font-bold text-lg`}>Rs100</Text>
          <Text style={tw`text-white mt-4`}>Purchase</Text>
        </View>
      </View>
    </View>
  )
}

export default Pricing

const styles = StyleSheet.create({})
