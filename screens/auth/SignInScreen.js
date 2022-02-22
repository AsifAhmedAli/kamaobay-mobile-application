import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc"
import { Formik } from "formik"
import Button from "../../components/Auth/Button"
import { Icon } from "react-native-elements"
import NavBar from "../../components/home/NavBar"
import { useNavigation } from "@react-navigation/native"

const SignInScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`h-full`}>
      <View
        style={tw`flex items-center justify-center bg-blue-900 h-42 rounded-bl-xl`}
      >
        <Image
          source={require("../../assets/auth/white.png")}
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
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Text style={tw`text-blue-900 font-semibold px-4 py-2`}>
                Email
              </Text>
              <TextInput
                style={tw`bg-white rounded-full py-2 px-6 w-full mb-4`}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCompleteType="email"
                placeholder="Your Email"
              />
              <Text style={tw`text-blue-900 font-semibold px-4 py-2`}>
                Password
              </Text>
              <TextInput
                style={tw` bg-white rounded-full py-2 px-6 w-full mb-1`}
                icon="pass"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                autoCompleteType="password"
                placeholder="Your Password"
                secureTextEntry
              />
              <View style={tw`mb-4`}>
                <Text
                  style={tw`text-gray-500 text-right`}
                  onPress={() => navigation.navigate("ResetPasswordScreen")}
                >
                  Forget Password?
                </Text>
              </View>
              <Button onPress={handleSubmit} title="Sign In" />
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
        <NavBar style={tw``} />
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})
