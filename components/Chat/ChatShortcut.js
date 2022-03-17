import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const ChatShortcut = () => {
  const data = [
    {
      id: 1,
      status: "online",
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 2,
      status: "offline",

      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 3,
      status: "online",

      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 4,
      status: "offline",

      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 5,
      status: "offline",

      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 6,
      status: "online",

      image: require("../../assets/home_page/ad.png"),
    },
  ]
  return (
    <View style={tw`flex-row items-center px-8`}>
      <View
        style={tw`flex items-center bg-blue-50 w-16 rounded-lg border border-dashed border-blue-900 mr-4 my-2 p-4`}
      >
        <Image
          // source={image}
          style={tw`bg-blue-900 rounded-full w-10 h-10`}
          // style={[tw`h-14 w-16 rounded-full`, { resizeMode: "contain" }]}
        />
      </View>
      <FlatList
        data={data}
        style={tw`my-4`}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { status, image } }) => (
          <View
            style={tw`flex items-center bg-blue-50 w-16 rounded-lg mr-4 my-2 p-4`}
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
                // source={image}
                style={tw`bg-gray-200 rounded-full w-8 h-8`}
                // style={[tw`h-14 w-16 rounded-full`, { resizeMode: "contain" }]}
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
