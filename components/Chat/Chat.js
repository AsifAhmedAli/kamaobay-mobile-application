import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"

const Chat = () => {
  const data = [
    {
      id: 1,
      name: "John",
      time: "12:22 am",
      image: require("../../assets/dashboard/chat/u1.png"),
    },
    {
      id: 2,
      name: "Elza",
      time: "12:22 am",
      image: require("../../assets/dashboard/chat/u2.png"),
    },
    {
      id: 3,
      name: "Mark",
      time: "12:22 am",
      image: require("../../assets/dashboard/chat/u3.png"),
    },
    {
      id: 4,
      name: "Stefen",
      time: "12:22 am",
      image: require("../../assets/dashboard/chat/u4.png"),
    },
    {
      id: 5,
      name: "Sid",
      time: "12:22 am",
      image: require("../../assets/dashboard/chat/u5.png"),
    },
    {
      id: 6,
      name: "Harry",
      time: "12:22 am",
      image: require("../../assets/dashboard/chat/u1.png"),
    },
    {
      id: 7,
      name: "Emmi",
      time: "12:22 am",
      image: require("../../assets/dashboard/chat/u2.png"),
    },
    {
      id: 8,
      name: "Anna",
      time: "12:22 am",
      image: require("../../assets/dashboard/chat/u3.png"),
    },
  ]
  const navigation = useNavigation()
  const text = "lorem ipsum has asd..."
  return (
    <View style={tw`bg-white rounded-t-xl py-4`}>
      <ScrollView style={tw`px-6`} showsVerticalScrollIndicator={false}>
        <FlatList
          style={tw``}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, name, time, image } }) => (
            <TouchableOpacity
              style={tw`flex-row items-center justify-between border-b border-gray-100 rounded-lg my-3 p-2 py-4`}
              onPress={() => navigation.navigate("ChatScreen")}
            >
              <View style={tw`flex-row`}>
                <Image
                  source={image}
                  style={tw`h-14 w-14 mr-4 bg-blue-900 rounded-full`}
                />
                <View>
                  <Text style={tw`text-blue-900 font-bold text-lg`}>
                    {name}
                  </Text>
                  <Text style={tw`text-blue-900 font-semibold`}>{text}</Text>
                </View>
              </View>
              <Text style={tw`text-blue-900 font-bold`}>{time}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})
