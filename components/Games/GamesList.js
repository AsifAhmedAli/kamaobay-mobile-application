import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import { dashboardScreen } from "../../styles/AppStyles"

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
      <Text style={dashboardScreen.gamesHeading}>Games</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { game, player, playerID } }) => (
          <View style={dashboardScreen.gamesContainer}>
            <View>
              <Text style={dashboardScreen.gamesTitle}>{game}</Text>
              <View style={dashboardScreen.gamesInfo}>
                <Image
                  source={require("../../assets/dashboard/friendList/user.png")}
                  style={dashboardScreen.gamesInfoImage}
                />
                <Text style={dashboardScreen.gamesInfoText}>{player}</Text>
              </View>
              <View style={dashboardScreen.gamesInfo}>
                <Image
                  source={require("../../assets/dashboard/friendList/id.png")}
                  style={dashboardScreen.gamesInfoImage}
                />
                <Text style={dashboardScreen.gamesInfoText}>{playerID}</Text>
              </View>
            </View>
            <View>
              <Image
                source={require("../../assets/dashboard/friendList/games.png")}
                style={dashboardScreen.gameImage}
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default GamesList

