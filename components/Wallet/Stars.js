import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import tw from "twrnc"
import { Icon } from "react-native-elements"
import { dashboardScreen } from "../../styles/AppStyles"

const Stars = () => {
  return (
    <View style={dashboardScreen.walletStarsContainer}>
      <Text style={dashboardScreen.walletHeading}>Your Main Stars</Text>
      <View style={dashboardScreen.walletQuantity}>
        <Image
          source={require("../../assets/dashboard/wallet/add.png")}
          style={dashboardScreen.walletImage}
        />
        <Text style={dashboardScreen.walletText}>10,000</Text>
        <Image
          source={require("../../assets/dashboard/wallet/sub.png")}
          style={dashboardScreen.walletImage}
        />
      </View>
      <View style={dashboardScreen.walletButtons}>
        <TouchableOpacity style={dashboardScreen.transferButton}>
          <Text style={dashboardScreen.transferText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={dashboardScreen.withdrawButton}>
          <Text style={dashboardScreen.withdrawText}>Withdraw</Text>
        </TouchableOpacity>
      </View>
      <View style={dashboardScreen.tranferContainer}>
        <TouchableOpacity style={dashboardScreen.transferConfirmButton}>
          <Text style={dashboardScreen.tranferConfirmText}>Transfer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Stars

const styles = StyleSheet.create({})
