import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { FlatGrid } from "react-native-super-grid"
import { dashboardScreen } from "../../styles/AppStyles"

const BuyStars = () => {
  const data = [
    {
      id: 1,
      price: 20,
      stars: 99,
    },
    {
      id: 2,
      price: 50,
      stars: 159,
    },
    {
      id: 3,
      price: 100,
      stars: 210,
    },
    {
      id: 4,
      price: 150,
      stars: 250,
    },
    {
      id: 5,
      price: 300,
      stars: 500,
    },
    {
      id: 6,
      price: 500,
      stars: 100,
    },
  ]
  return (
    <View>
      <Text style={dashboardScreen.starsHeading}>Buy Now</Text>
      <View>
        <FlatGrid
          data={data}
          spacing={10}
          renderItem={({ item: { price, stars } }) => (
            <View style={dashboardScreen.starsContainer}>
              <Image
                source={require("../../assets/dashboard/stars/star.png")}
                style={dashboardScreen.starsImage}
              />
              <Text style={dashboardScreen.starsPrice}>
                RS {price}
              </Text>
              <Text style={tw`text-white`}>{stars} Stars</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default BuyStars

const styles = StyleSheet.create({})
