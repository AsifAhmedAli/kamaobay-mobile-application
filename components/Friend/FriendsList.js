import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"

const FriendsList = () => {
  const data = [
    {
      id: 1,
      status: "online",
      image: require("../../assets/dashboard/friendList/u1.png"),
    },
    {
      id: 2,
      status: "offline",

      image: require("../../assets/dashboard/friendList/u2.png"),
    },
    {
      id: 3,
      status: "online",

      image: require("../../assets/dashboard/friendList/u3.png"),
    },
    {
      id: 4,
      status: "offline",

      image: require("../../assets/dashboard/friendList/u4.png"),
    },
    {
      id: 5,
      status: "offline",

      image: require("../../assets/dashboard/friendList/u5.png"),
    },
    {
      id: 6,
      status: "online",

      image: require("../../assets/dashboard/friendList/u1.png"),
    },
  ]
  return (
      <FlatList
        style={tw``}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { status, image } }) => (
          <View
            style={tw`flex-row items-center justify-between rounded-lg my-2 p-2`}
          >
            <View style={tw`bg-blue-100 p-4 rounded-lg`}>
              <View
                style={tw`absolute z-50 right-4 top-4 border-2 border-white h-6 w-6 rounded-full ${
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
                  style={[tw`h-14 w-14`, { resizeMode: "contain" }]}
                />
              </View>
            </View>
            <TouchableOpacity
              style={tw`flex items-center p-2 bg-blue-100 p-4 rounded-lg h-full`}
            >
              <Image
                source={require("../../assets/dashboard/friendList/message.png")}
                style={[tw`h-8 w-8 mb-3`, { resizeMode: "contain" }]}
              />
              <Text style={tw`text-blue-900 font-bold`}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex items-center p-2 bg-blue-100 p-4 rounded-lg h-full`}
            >
              <Image
                source={require("../../assets/dashboard/friendList/challenge.png")}
                style={[tw`h-8 w-8 mb-3`, { resizeMode: "contain" }]}
              />
              <Text style={tw`text-blue-900 font-bold`}>Challenge</Text>
            </TouchableOpacity>
          </View>
        )}
      />
  )
}

export default FriendsList

const styles = StyleSheet.create({})
