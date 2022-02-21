import { TextInput as RNTextInput, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const TextInput = (
 { icon,
  onChangeText,
  onBlur,
  value,
  autoCompleteType,
  placeholder}
) => {
  return (
    <View
      style={tw`flex flex-row bg-white rounded-full py-2 px-6 w-full items-center mb-4`}
    >
      <View style={tw`pr-2`}>
       {icon}
      </View>
      <View>
        <RNTextInput onChangeText={onChangeText} onBlur={onBlur} value={value && value} autoCompleteType={autoCompleteType} placeholder={placeholder}/>
      </View>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({})
