import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useRef, useState } from "react"
import tw from "twrnc"
import { dashboardScreen } from "../../styles/AppStyles"

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
    <View style={dashboardScreen.chatting}>
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
              <View style={dashboardScreen.chattingUser1Container}>
                <Text style={dashboardScreen.chattingUser1Text}>{message}</Text>
                <Image
                  source={require("../../assets/dashboard/chat/u1.png")}
                  style={dashboardScreen.chattingUserImage}
                />
              </View>
            ) : (
              <View style={dashboardScreen.chattingUser2Container}>
                <Image
                  source={require("../../assets/dashboard/chat/u5.png")}
                  style={dashboardScreen.chattingUserImage}
                />

                <Text style={dashboardScreen.chattingUser2text}>{message}</Text>
              </View>
            )}
          </View>
        )}
      />
      <View style={dashboardScreen.inputContainer}>
        <View style={dashboardScreen.inputFlex}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/dashboard/chat/emoji.png")}
              style={dashboardScreen.inputImage1}
            />
          </TouchableOpacity>
          <TextInput
            style={dashboardScreen.inputText}
            onChangeText={(text) => setTextInputValue(text)}
            value={textInputValue}
            multiline={true}
            placeholder="Type a message..."
          />
        </View>
        <View style={dashboardScreen.inputFlex}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/dashboard/chat/attach.png")}
              style={dashboardScreen.inputImage1}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/dashboard/chat/send.png")}
              style={dashboardScreen.inputImage2}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Chatting

