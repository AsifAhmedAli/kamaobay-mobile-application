import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../components/home/Header"
import tw from "twrnc"
import Intro from "../components/home/Intro"
import Earning from "../components/home/Earning"
import NavBar from "../components/home/NavBar"
import Pricing from "../components/home/Pricing"
import { useNavigation } from "@react-navigation/native"
import { backgroundColor, homeScreen, paddingX, } from "../styles/AppStyles"

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={backgroundColor}>
      <Header />
      <ScrollView style={paddingX} showsVerticalScrollIndicator={false}>
        <Intro />
        <Earning />
        <Pricing />
      </ScrollView>
      <View style={tw`flex-row`}>
        <TouchableOpacity
          style={homeScreen.modalButton}
          onPress={() => navigation.navigate("ModalScreen1")}
        >
          <Text>Modal 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homeScreen.modalButton}
          onPress={() => navigation.navigate("ModalScreen2")}
        >
          <Text>Modal 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homeScreen.modalButton}
          onPress={() => navigation.navigate("ModalScreen3")}
        >
          <Text>Modal 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homeScreen.modalButton}
          onPress={() => navigation.navigate("ModalScreen4")}
        >
          <Text>Modal 4</Text>
        </TouchableOpacity>
      </View>
      <NavBar />
    </SafeAreaView>
  )
}

export default HomeScreen


