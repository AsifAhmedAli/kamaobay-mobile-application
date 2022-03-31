import { Image, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { dashboardScreen } from "../../styles/AppStyles"

const NavBar = () => {
  const navigation = useNavigation()
  const data = [
    {
      id: 1,
      screen: "DashboardHomeScreen",
      image: require("../../assets/dashboard/dashboard.png"),
      title: "Dashboard",
    },
    {
      id: 2,
      screen: "WalletScreen",
      image: require("../../assets/dashboard/wallet.png"),
      title: "Wallet",
    },
    {
      id: 3,
      screen: "BuyStarsScreen",
      image: require("../../assets/dashboard/stars.png"),
      title: "Stars",
    },
    {
      id: 4,
      screen: "ChatListScreen",
      image: require("../../assets/dashboard/chat.png"),
      title: "Chat",
    },
    {
      id: 5,
      screen: "FriendsScreen",
      image: require("../../assets/dashboard/friend.png"),
      title: "Friend",
    },
  ]
  return (
    <View style={dashboardScreen.navbarContainer}>
      {data.map(({ id, screen, image, title }) => (
        <TouchableOpacity
          style={dashboardScreen.navbarItem}
          onPress={() => navigation.navigate(screen)}
        >
          <Image source={image} style={dashboardScreen.navbarImage} />
          <Text style={dashboardScreen.navbarText}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default NavBar
