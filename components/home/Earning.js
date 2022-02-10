import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const Earning = () => {
  const data = [
    {
      id: 1,
      text: "Watch Youtube video",
      image: require("../../assets/home_page/video.png"),
    },
    {
      id: 2,
      text: "Watch Ads",
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 3,
      text: "Survey / Data Entry",
      image: require("../../assets/home_page/survey.png"),
    },
    {
      id: 4,
      text: "Completed Task",
      image: require("../../assets/home_page/task.png"),
    },
    {
      id: 5,
      text: "Share Post / Subscribe",
      image: require("../../assets/home_page/share.png"),
    },
    {
      id: 6,
      text: "Play Games",
      image: require("../../assets/home_page/play_game.png"),
    },
  ]
  return (
    <View>
      <Text style={tw`text-blue-900 font-bold my-4`}>How to earn</Text>
      <FlatList
        style={tw``}
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
        )}
        renderItem={({ item: { text, image } }) => (
          <View style={tw`flex-row items-center bg-white rounded-lg my-2 p-2`}>
            <Image
              source={image}
              style={[tw`h-10 w-14`, { resizeMode: "contain" }]}
            />
            <Text style={tw`text-blue-900 font-semibold`}>{text}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Earning

const styles = StyleSheet.create({})
