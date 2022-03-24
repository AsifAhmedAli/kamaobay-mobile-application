import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"

const FreeEarning = () => {
  const data = [
    {
      id: 1,
      text: "Youtube video",
      image: require("../../assets/dashboard/youtube.png"),
    },
    {
      id: 2,
      text: "Ads",
      image: require("../../assets/dashboard/ad.png"),
    },
    {
      id: 3,
      text: "Youtube video",
      image: require("../../assets/dashboard/youtube.png"),
    },
    {
      id: 4,
      text: "Ads",
      image: require("../../assets/dashboard/ad.png"),
    },
    {
      id: 5,
      text: "Youtube video",
      image: require("../../assets/dashboard/youtube.png"),
    },
    {
      id: 6,
      text: "Ads",
      image: require("../../assets/dashboard/ad.png"),
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
              <Text style={tw`text-blue-900 text-lg font-bold`}>{text}</Text>
              <Image
                source={require("../../assets/dashboard/option.png")}
                style={[tw`h-8 w-10`, { resizeMode: "contain" }]}
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default FreeEarning

const styles = StyleSheet.create({})
