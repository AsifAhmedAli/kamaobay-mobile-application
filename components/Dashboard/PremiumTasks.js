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
      image: require("../../assets/dashboard/survey.png"),
    },
    {
      id: 2,
      stars: 3,
      text: "Ads",
      image: require("../../assets/dashboard/dataEntry.png"),
    },
    {
      id: 3,
      stars: 3,
      text: "Youtube video",
      image: require("../../assets/dashboard/taskComplete.png"),
    },
    {
      id: 4,
      stars: 3,
      text: "Ads",
      image: require("../../assets/dashboard/survey.png"),
    },
    {
      id: 5,
      stars: 3,
      text: "Youtube video",
      image: require("../../assets/dashboard/dataEntry.png"),
    },
    {
      id: 6,
      stars: 3,
      text: "Ads",
      image: require("../../assets/dashboard/survey.png"),
    },
  ]
  return (
    <View>
      <Text style={tw`text-blue-900 font-bold text-lg my-4`}>Premium</Text>

      <FlatList
        data={data}
        style={tw`my-4`}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { text, stars, image } }) => (
          <View>
            <View
              style={tw`flex items-center bg-white w-24 rounded-lg mr-4 my-2 px-4 py-6`}
            >
              <Image
                source={image}
                style={[tw`h-10 w-14`, { resizeMode: "contain" }]}
              />
              <Text
                style={tw`text-blue-900 text-xs text-center underline`}
              >
                use {stars} stars
              </Text>
            </View>
            <Text style={tw`text-center font-bold text-blue-900`}>{text}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default PremiumTasks

const styles = StyleSheet.create({})
