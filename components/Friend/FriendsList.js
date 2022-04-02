import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { dashboardScreen } from "../../styles/AppStyles"

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
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { status, image } }) => (
        <View style={dashboardScreen.friendContainer}>
          <View style={dashboardScreen.friendContainerBackground}>
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
              <Image source={image} style={dashboardScreen.friendImage} />
            </View>
          </View>
          <TouchableOpacity style={dashboardScreen.friendSubCols}>
            <Image
              source={require("../../assets/dashboard/friendList/message.png")}
              style={dashboardScreen.friendSubColImage}
            />
            <Text style={dashboardScreen.friendText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dashboardScreen.friendSubCols}>
            <Image
              source={require("../../assets/dashboard/friendList/challenge.png")}
              style={dashboardScreen.friendSubColImage}
            />
            <Text style={dashboardScreen.friendText}>Challenge</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

export default FriendsList

