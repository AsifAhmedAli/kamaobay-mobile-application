import { Image, Text, View } from "react-native"
import React from "react"
import { dashboardScreen } from "../../styles/AppStyles"

const Intro = () => {
  return (
    <View style={dashboardScreen.introContainer}>
      <View style={dashboardScreen.introBox1}>
        <Image
          source={require("../../assets/dashboard/task.png")}
          style={dashboardScreen.menuImages}
        />
        <Text style={dashboardScreen.introText1}>Completed Task</Text>
      </View>
      <View style={dashboardScreen.introBox2}>
        <Image
          source={require("../../assets/dashboard/addStars.png")}
          style={dashboardScreen.menuImages}
        />
        <Text style={dashboardScreen.introText2}>99,999 Stars</Text>
      </View>
    </View>
  )
}

export default Intro

