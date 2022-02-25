import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { FlatGrid } from "react-native-super-grid"

const BuyStars = () => {
  const data = [
    {
      id: 1,
      price: 20,
      stars: 99,
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 2,
      price: 50,
      stars: 159,
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 3,
      price: 100,
      stars: 210,
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 4,
      price: 150,
      stars: 250,
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 5,
      price: 300,
      stars: 500,
      image: require("../../assets/home_page/ad.png"),
    },
    {
      id: 6,
      price: 500,
      stars: 100,
      image: require("../../assets/home_page/ad.png"),
    },
  ]
  return (
    <View>
      <Text style={tw`text-blue-900 font-bold text-xl`}>Buy Now</Text>
      <View style={tw``}>
        <FlatGrid
          data={data}
          spacing={10}
          renderItem={({ item: { price, stars, image } }) => (
            <View style={tw`flex bg-blue-900 rounded-lg p-4`}>
              <Image
                source={image}
                style={[tw`h-10 w-14`, { resizeMode: "contain" }]}
              />
              <Text style={tw`text-white text-xl font-semibold`}>RS {price}</Text>
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
