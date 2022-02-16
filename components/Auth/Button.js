import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from "twrnc"


const Button = ({title,onPress}) => {
  return (
    <TouchableOpacity style={tw`w-full p-4 bg-blue-900 rounded-full`}>
      <Text style={tw`text-center text-white text-xl`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})