import {  Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const Earning = () => {
  const data = [
    {
      id: 1,
      text: "Watch Youtube video",
      image: require("../../assets/home/youtube.png"),
    },
    {
      id: 2,
      text: "Watch Ads",
      image: require("../../assets/home/ad.png"),
    },
    {
      id: 3,
      text: "Survey / Data Entry",
      image: require("../../assets/home/survey.png"),
    },
    {
      id: 4,
      text: "Completed Task",
      image: require("../../assets/home/task.png"),
    },
    {
      id: 5,
      text: "Share Post / Subscribe",
      image: require("../../assets/home/share.png"),
    },
    {
      id: 6,
      text: "Play Games",
      image: require("../../assets/home/play.png"),
    },
  ]
  return (
    <View>
      <Text style={tw`text-blue-900 text-xl font-bold my-4`}>How to earn</Text>
      {data.map(( { id,text, image }) => (
       <View key={id} style={tw`flex-row items-center bg-white rounded-lg my-2 p-2`}>
            <Image
              source={image}
              style={[tw`h-10 w-14`, { resizeMode: "contain" }]}
            />
            <Text style={tw`text-blue-900 font-semibold`}>{text}</Text>
          </View>
      ))}
    </View>
  )
}

export default Earning

const styles = StyleSheet.create({})
