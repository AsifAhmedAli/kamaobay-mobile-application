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
import Button from "../components/Auth/Button"

const SignInScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={tw`flex items-center justify-center bg-blue-900 h-32 rounded-bl-xl`}
      >
        <Image
          source={require("../assets/auth/white.png")}
          style={[tw`h-full w-full`, { resizeMode: "contain" }]}
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
          <TouchableOpacity style={tw`bg-white rounded-full py-2 px-6`}>
            <Text style={tw`text-lg`}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-blue-500 rounded-full py-2 px-6`}>
            <Text style={tw`text-white text-lg`}>Facebook</Text>
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
              <TextInput
                style={tw`bg-white rounded-full py-2 px-6 w-full mb-4`}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCompleteType="email"
                placeholder="Your Email"
              />
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
              <View
                style={tw`mb-4`}
              >
                <Text style={tw`text-gray-500 text-right`}>
                  Forget Password?
                </Text>
              </View>
              <Button onPress={handleSubmit} title="Sign In" />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})
