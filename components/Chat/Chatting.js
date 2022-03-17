import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import React, { useState } from "react"
import tw from "twrnc"

const Chatting = () => {
  const [textInputValue, setTextInputValue] = useState("")
  const data = [
    { id: 1, name: "Elza", message: "Hello" },
    { id: 2, name: "u", message: "Hello asdjasd asjdkhsd adnjashdu" },
    { id: 3, name: "u", message: "Hello" },
    {
      id: 4,
      name: "Elza",
      message: "Helloasdk asdjmkokok kpokkpk kok kokpokok oadjisd ",
    },
    {
      id: 5,
      name: "Elza",
      message: "Hellosadaskjjdoia  asdjoisjd ijsdjaisjda",
    },
    { id: 6, name: "u", message: "Helloasdasc adad a af f sdf  fs" },
    { id: 7, name: "Elza", message: "Hellosfa ew dq f q d fffffs " },
  ]
  return (
    <View style={tw`flex-1 px-6 bg-white`}>
      <ScrollView
        style={tw``}
        showsVerticalScrollIndicator={false}
      ></ScrollView>
      <View
        style={tw`flex-row items-center mb-2 rounded-lg justify-between bg-gray-100 py-2 px-4`}
      >
        <View style={tw`flex-row`}>
          <Image style={tw`w-6 h-6 rounded-full bg-blue-900 mr-4`} />
          <TextInput
            style={tw`text-blue-900`}
            onChangeText={(text) => setTextInputValue(text)}
            value={textInputValue}
            placeholder="Type a message..."
          />
        </View>
        <View style={tw`flex-row`}>
          <Image style={tw`w-6 h-6 rounded-full bg-blue-900 mr-4`} />
          <Image style={tw`w-6 h-6 rounded-full bg-blue-900`} />
        </View>
      </View>
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({})
