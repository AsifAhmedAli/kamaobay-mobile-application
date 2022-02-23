import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"

const FreeEarning = () => {
  const data = [
    {
      id: 1,
      text: "Youtube video",
      image: require("../../assets/home_page/video.png"),
    },
    {
      id: 2,
      text: "Ads",
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 3,
      text: "Youtube video",
      image: require("../../assets/home_page/video.png"),
    },
    {
      id: 4,
      text: "Ads",
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 5,
      text: "Youtube video",
      image: require("../../assets/home_page/video.png"),
    },
    {
      id: 6,
      text: "Ads",
      image: require("../../assets/home_page/ad.png"),
    },
  ]
  return (
    <View>
      <Text style={tw`text-blue-900 font-bold text-lg my-4`}>Free</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { text, image } }) => (
          <View
            style={tw`flex-row items-center bg-white w-full rounded-full my-2 p-4`}
          >
            <Image
              source={image}
              style={[tw`h-10 w-14`, { resizeMode: "contain" }]}
            />
            <View style={tw`flex-row flex-1 justify-between`}>

            <Text style={tw`text-blue-900 font-semibold`}>{text}</Text>
            <Icon type="entypo" name="dots-three-vertical" style={tw``} />
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default FreeEarning

const styles = StyleSheet.create({})
