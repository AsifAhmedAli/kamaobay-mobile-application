import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import { dashboardScreen } from "../../styles/AppStyles"

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
      <Text style={dashboardScreen.dashboardHeading}>Free</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { text, image } }) => (
          <View style={dashboardScreen.earningListContainer}>
            <Image source={image} style={dashboardScreen.earningImage} />
            <View style={dashboardScreen.earningItem}>
              <Text style={dashboardScreen.earningText}>{text}</Text>
              <Image
                source={require("../../assets/dashboard/option.png")}
                style={dashboardScreen.earningOption}
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default FreeEarning

