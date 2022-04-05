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
import { dashboardScreen } from "../../styles/AppStyles"

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
    <View style={dashboardScreen.chatBackground}>
      <ScrollView style={tw`px-6`} showsVerticalScrollIndicator={false}>
        <View>
          {data.map(({ id, name, time, image }) => (
            <TouchableOpacity
              key={id}
              style={dashboardScreen.chatContainer}
              onPress={() => navigation.navigate("ChatScreen")}
            >
              <View style={tw`flex-row`}>
                <Image source={image} style={dashboardScreen.chatImage} />
                <View>
                  <Text style={dashboardScreen.chatText}>{name}</Text>
                  <Text style={dashboardScreen.chatMessage}>{text}</Text>
                </View>
              </View>
              <Text style={dashboardScreen.time}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})
