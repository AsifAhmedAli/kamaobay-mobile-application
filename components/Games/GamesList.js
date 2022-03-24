import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const GamesList = () => {
  const data = [
    {
      id: 1,
      game: "Watch Dogs",
      player: "Mark Jones",
      playerID: 2415669,
    },
    {
      id: 2,
      game: "Cycling",
      player: "Mark Jones",
      playerID: 2415669,
    },
    {
      id: 3,
      game: "Tennis",
      player: "Mark Jones",
      playerID: 2415669,
    },
    {
      id: 4,
      game: "Boxing",
      player: "Mark Jones",
      playerID: 2415669,
    },
    {
      id: 5,
      game: "Karake",
      player: "Mark Jones",
      playerID: 2415669,
    },
    {
      id: 6,
      game: "Street Fighter",
      player: "Mark Jones",
      playerID: 2415669,
    },
  ]
  return (
    <View>
      <Text style={tw`text-blue-900 text-xl font-bold my-4`}>Games</Text>
      <FlatList
        style={tw``}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { game, player, playerID } }) => (
          <View
            style={tw`flex-row items-center justify-between rounded-xl my-2 py-2 px-8 bg-blue-200`}
          >
            <View>
              <Text style={tw`text-blue-900 text-lg`}>{game}</Text>
              <View style={tw`flex-row items-center`}>
                <Image
                  source={require("../../assets/dashboard/friendList/user.png")}
                  style={[tw`h-4 w-4 mr-4`, { resizeMode: "contain" }]}
                />
                <Text style={tw`text-blue-900`}>{player}</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <Image
                  source={require("../../assets/dashboard/friendList/id.png")}
                  style={[tw`h-4 w-4 mr-4`, { resizeMode: "contain" }]}
                />
                <Text style={tw`text-blue-900`}>{playerID}</Text>
              </View>
            </View>
            <View>
              <Image
                source={require("../../assets/dashboard/friendList/games.png")}
                style={[tw`h-14 w-14`, { resizeMode: "contain" }]}
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default GamesList

const styles = StyleSheet.create({})
