import {
  Image,
  StyleSheet,
  Text,
  
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Icon } from "react-native-elements"
import { Formik } from "formik"
import tw from "twrnc"
import NavBar from "../../components/home/NavBar"
import Button from "../../components/Auth/Button"
import TextInput from "../../components/Auth/TextInput"

const ResetPasswordScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`h-full`}>
      <View
        style={tw`flex items-center justify-center bg-blue-900 h-42 rounded-bl-xl`}
      >
        <Image
          // source={require("../../assets/auth/white.png")}
          style={[tw`h-full w-3/4`, { resizeMode: "contain" }]}
        />
      </View>
      <View style={tw`px-8 my-4`}>
        <Text style={tw`text-blue-900 text-xl font-bold my-2`}>
          Welcome Back
        </Text>
        <Text style={tw`mb-4`}>
          We make it easy for everyone to maximize their investment
        </Text>
        <View style={tw`flex flex-row items-center justify-between`}>
          <TouchableOpacity
            style={tw`flex flex-row items-center justify-between bg-white rounded-full py-2 px-4`}
          >
            <Icon name="google" type="antdesign" />
            <Text style={tw`text-lg px-3`}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-row items-center justify-between bg-white rounded-full py-2 px-4 bg-blue-500`}
          >
            <Icon name="facebook" type="zocial" color="white" />
            <Text style={tw`text-lg px-3 text-white`}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`px-8`}>
        <Formik
          initialValues={{ username: "", email: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Text style={tw`text-blue-900 font-semibold px-4 py-2`}>
                Username
              </Text>
              <TextInput
                icon={<Icon name="user" type="antdesign" color="blue" />}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username"
              />
              <Text style={tw`text-blue-900 font-semibold px-4 py-2`}>
                Email
              </Text>
              <TextInput
                icon={<Icon name="email" type="materialCommunityIcons" color="blue" />}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCompleteType="email"
                placeholder="Your Email"
              />

              <Button onPress={handleSubmit} title="Check Your Email" />
              <View style={tw`flex flex-row my-4 items-center justify-center`}>
                <Text>New on our platform? </Text>
                <Text
                  style={tw`text-blue-900 underline`}
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  Create an account
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={tw`flex flex-1 justify-end`}>
        <NavBar  />
      </View>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({})
