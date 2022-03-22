import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import React, { useRef, useState } from "react"
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
      message:
        "Helloasdk asdjmkokok kpokkpk kok sfdasnfkjdadsd asdfnaskjfjaskf sdaskjd kokpokok oadjisd ",
    },
    {
      id: 5,
      name: "Elza",
      message: "Hellosadaskjjdoia  asdjoisjd ijsdjaisjda",
    },
    { id: 6, name: "u", message: "Helloasdasc adad a af f sdf  fs" },
    { id: 7, name: "Elza", message: "Hellosfa ew dq f q d fffffs " },
  ]
  const fl =useRef(null)
  return (
    <View style={tw`flex-1 px-6 bg-white`}>
      <FlatList
        ref={fl}
        onContentSizeChange={() => fl.current.scrollToEnd()}
        onLayout={() => fl.current.scrollToEnd()}
        style={tw``}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { name, message } }) => (
          <View style={tw`my-2`}>
            {name == "u" ? (
              <View style={tw`flex-row items-center justify-end`}>
                <Text
                  style={tw`bg-blue-900 p-4 text-white w-52 rounded-xl font-semibold`}
                >
                  {message}
                </Text>
                <Image
                  // source={image}
                  style={tw`h-10 w-10 bg-blue-400 rounded-full ml-4`}
                />
              </View>
            ) : (
              <View style={tw`flex-row items-center`}>
                <Image
                  // source={image}
                  style={tw`h-10 w-10 bg-blue-200 rounded-full mr-4`}
                />
                <Text
                  style={tw`bg-blue-100 p-4 rounded-xl w-52 text-blue-900 font-semibold`}
                >
                  {message}
                </Text>
              </View>
            )}
          </View>
        )}
      />
      <View
        style={tw`flex-row items-center mb-2 rounded-lg justify-between bg-gray-100 py-2 px-4`}
      >
        <View style={tw`flex-row`}>
          <Image style={tw`w-6 h-6 rounded-full bg-blue-900 mr-4`} />
          <TextInput
            style={tw`text-blue-900 w-50 `}
            onChangeText={(text) => setTextInputValue(text)}
            value={textInputValue}
            multiline={true}
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
