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
import { dashboardScreen } from "../../styles/AppStyles"

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
      <Text style={dashboardScreen.dashboardHeading}>Premium</Text>

      <FlatList
        data={data}
        style={tw`my-4`}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { text, stars, image } }) => (
          <View>
            <View style={dashboardScreen.premiumTaskContainer}>
              <Image source={image} style={dashboardScreen.earningImage} />
              <Text style={dashboardScreen.premiumTaskTextm}>
                use {stars} stars
              </Text>
            </View>
            <Text style={dashboardScreen.premiumTaskCaption}>{text}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default PremiumTasks

const styles = StyleSheet.create({})
