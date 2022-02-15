import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc"

const SignInScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw`flex items-center justify-center bg-blue-900 h-32`}>
        <Image
          source={require("../assets/auth/white.png")}
          style={[tw`h-full w-full`, { resizeMode: "contain" }]}
        />
      </View>
      <View style={tw`px-8`}>
        <Text style={tw`text-blue-900 text-xl font-bold my-2`}>Welcome Back</Text>
        <Text>We make it easy for everyone to maximize their investment</Text>
        <View style={tw`flex flex-row items-center justify-between`}>
          <TouchableOpacity style={tw`bg-white rounded-full py-2 px-6`}>
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-blue-500 rounded-full py-2 px-6`}>
            <Text style={tw`text-white`}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})
