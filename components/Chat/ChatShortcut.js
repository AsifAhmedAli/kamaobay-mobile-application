import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { dashboardScreen } from "../../styles/AppStyles"

const ChatShortcut = () => {
  const data = [
    {
      id: 1,
      status: "online",
      image: require("../../assets/dashboard/chat/u1.png"),
    },
    {
      id: 2,
      status: "offline",

      image: require("../../assets/dashboard/chat/u2.png"),
    },
    {
      id: 3,
      status: "online",

      image: require("../../assets/dashboard/chat/u3.png"),
    },
    {
      id: 4,
      status: "offline",

      image: require("../../assets/dashboard/chat/u4.png"),
    },
    {
      id: 5,
      status: "offline",

      image: require("../../assets/dashboard/chat/u5.png"),
    },
  ]
  return (
    <View style={dashboardScreen.chatShortcutContainer}>
      <TouchableOpacity
        style={dashboardScreen.addImageContainer}
      >
        <Image
          source={require("../../assets/dashboard/chat/add.png")}
          style={dashboardScreen.addImage}
        />
      </TouchableOpacity>
      <FlatList
        data={data}
        style={tw`my-4`}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { status, image } }) => (
          <View
            style={dashboardScreen.imageContainer}
          >
            <View
              style={tw`absolute z-50 right-1 top-4 h-5 w-5 border-2 border-white rounded-full ${
                status == "online" ? "bg-blue-900" : "bg-green-400"
              }`}
            ></View>
            <View
              style={tw`border border-blue-900 p-1 rounded-full ${
                status == "online" ? "border-blue-900" : "border-green-400"
              }`}
            >
              <Image
                source={image}
                style={dashboardScreen.imageSize}
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ChatShortcut

const styles = StyleSheet.create({})
