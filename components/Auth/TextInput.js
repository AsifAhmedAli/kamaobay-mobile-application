import { TextInput as RNTextInput, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const TextInput = (icon, ...otherProps) => {
  return (
    <View style={tw`flex flex-row bg-white rounded-full py-2 px-6 w-full items-center`}>
      <View>
        <Text>{icon}</Text>
      </View>
      <View>
        <RNTextInput {...otherProps} />
      </View>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({})
