import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"

const FriendsList = () => {
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
    <View>
      <Text style={tw`text-blue-900 font-bold my-4`}>How to earn</Text>
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
                style={tw`absolute z-50 right-4 top-4 h-6 w-6 rounded-full ${
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
                  style={tw`bg-gray-200 rounded-full w-14 h-14`}
                  // style={[tw`h-14 w-16 rounded-full`, { resizeMode: "contain" }]}
                />
              </View>
            </View>
            <View
              style={tw`flex items-center p-2 bg-blue-100 p-4 rounded-lg h-full`}
            >
              <Image style={tw`w-10 h-10 bg-blue-900 rounded-full mb-2`} />
              <Text style={tw`text-blue-900 font-semibold`}>Message</Text>
            </View>
            <View
              style={tw`flex items-center p-2 bg-blue-100 p-4 rounded-lg h-full`}
            >
              <Image style={tw`w-10 h-10 bg-blue-900 rounded-full mb-2`} />
              <Text style={tw`text-blue-900 font-semibold`}>Challenge</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default FriendsList

const styles = StyleSheet.create({})
