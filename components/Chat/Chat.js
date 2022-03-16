import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React from "react"
import tw from "twrnc"

const Chat = () => {
  const data = [
    {
      id: 1,
      name: "John",
      time: "12:22 am",
    },
    {
      id: 2,
      name: "Elza",
      time: "12:22 am",
    },
    {
      id: 3,
      name: "Mark",
      time: "12:22 am",
    },
    {
      id: 4,
      name: "Stefen",
      time: "12:22 am",
    },
    {
      id: 5,
      name: "Sid",
      time: "12:22 am",
    },
    {
      id: 6,
      name: "Harry",
      time: "12:22 am",
    },
    {
      id: 7,
      name: "Emmi",
      time: "12:22 am",
    },
    {
      id: 8,
      name: "Anna",
      time: "12:22 am",
    },
  ]
  const text = "lorem ipsum has asd..."
  return (
    <View style={tw`bg-white rounded-xl pt-4`}>
      <ScrollView style={tw`px-6`} showsVerticalScrollIndicator={false}>
        <FlatList
          style={tw``}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, name, time } }) => (
            <View
              style={tw`flex-row items-center justify-between border-b border-gray-100 rounded-lg my-2 p-2`}
            >
              <View style={tw`flex-row`}>
                <Image
                  //   source={image}
                  style={tw`h-10 w-10 mr-4 bg-blue-900 rounded-full`}
                />
                <View>
                  <Text style={tw`text-blue-900 font-bold text-lg`}>
                    {name}
                  </Text>
                  <Text style={tw`text-blue-900 font-semibold`}>{text}</Text>
                </View>
              </View>
              <Text>{time}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})
