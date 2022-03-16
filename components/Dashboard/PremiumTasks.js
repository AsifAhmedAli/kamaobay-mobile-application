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

const PremiumTasks = () => {
  const data = [
    {
      id: 1,
      stars: 3,
      text: "Youtube video",
      image: require("../../assets/home_page/video.png"),
    },
    {
      id: 2,
      stars: 3,
      text: "Ads",
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 3,
      stars: 3,
      text: "Youtube video",
      image: require("../../assets/home_page/video.png"),
    },
    {
      id: 4,
      stars: 3,
      text: "Ads",
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 5,
      stars: 3,
      text: "Youtube video",
      image: require("../../assets/home_page/video.png"),
    },
    {
      id: 6,
      stars: 3,
      text: "Ads",
      image: require("../../assets/home_page/ad.png"),
    },
  ]
  return (
    <FlatList
      data={data}
      style={tw`my-4`}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { text, stars, image } }) => (
        <View>
          <View
            style={tw`flex items-center bg-white w-24 rounded-lg mr-4 my-2 p-4`}
          >
            <Image
              source={image}
              style={[tw`h-10 w-14`, { resizeMode: "contain" }]}
            />
            <Text style={tw`text-blue-900 font-semibold text-center underline`}>
              use {stars} stars
            </Text>
          </View>
          <Text style={tw`text-center text-blue-900`}>{text}</Text>
        </View>
      )}
    />
  )
}

export default PremiumTasks

const styles = StyleSheet.create({})
