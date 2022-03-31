import { Image, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"
import { dashboardScreen } from "../../styles/AppStyles"

const Header = () => {
  return (
    <View style={dashboardScreen.headerContainer}>
      <View style={dashboardScreen.navbar}>
        <View style={dashboardScreen.menuIcon}>
          <Image
            source={require("../../assets/dashboard/menu.png")}
            style={dashboardScreen.menuImages}
          />
        </View>
        <View style={dashboardScreen.menuIcons}>
          <Image
            source={require("../../assets/dashboard/notification.png")}
            style={dashboardScreen.menuImages}
          />
          <Image
            source={require("../../assets/dashboard/logout.png")}
            style={dashboardScreen.menuImages}
          />
        </View>
      </View>
      <View style={dashboardScreen.container}>
        <View style={tw` mr-4`}>
          <Image style={tw`bg-white w-12 h-12 rounded-full`} />
        </View>
        <View>
          <Text style={dashboardScreen.headingText}>Hi, Jones!</Text>
          <Text style={tw`text-white`}>Ready to start your investment!!</Text>
        </View>
      </View>
    </View>
  )
}

export default Header

