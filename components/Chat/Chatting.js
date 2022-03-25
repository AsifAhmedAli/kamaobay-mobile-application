import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
  const fl = useRef(null)
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
              <View style={tw`flex-row items-end justify-end`}>
                <Text
                  style={tw`bg-blue-900 p-4 text-white w-52 rounded-xl font-semibold`}
                >
                  {message}
                </Text>
                <Image
                  source={require("../../assets/dashboard/chat/u1.png")}
                  style={tw`h-12 w-12 ml-4 bg-blue-900 rounded-full`}
                />
              </View>
            ) : (
              <View style={tw`flex-row items-end`}>
                <Image
                  source={require("../../assets/dashboard/chat/u5.png")}
                  style={tw`h-12 w-12 mr-4 bg-blue-900 rounded-full`}
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
          <TouchableOpacity>
            <Image
              source={require("../../assets/dashboard/chat/emoji.png")}
              style={tw`h-6 w-6 mr-2`}
            />
          </TouchableOpacity>
          <TextInput
            style={tw`text-blue-900 w-50 `}
            onChangeText={(text) => setTextInputValue(text)}
            value={textInputValue}
            multiline={true}
            placeholder="Type a message..."
          />
        </View>
        <View style={tw`flex-row`}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/dashboard/chat/attach.png")}
              style={tw`h-8 w-8 mr-2`}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/dashboard/chat/send.png")}
              style={tw`h-8 w-8`}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({})
