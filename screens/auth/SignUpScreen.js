import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc"
import { Formik } from "formik"
import Button from "../../components/Auth/Button"
import { Icon } from "react-native-elements"
import NavBar from "../../components/home/NavBar"
import TextInput from "../../components/Auth/TextInput"

const SignUpScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`h-full`}>
      <View
        style={tw`flex items-center justify-center bg-blue-900 h-42 rounded-bl-xl`}
      >
        <Image
          source={require("../../assets/auth/logo.png")}
          style={[tw``, { resizeMode: "contain" }]}
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
            <Image
              source={require("../../assets/auth/google.png")}
              style={[tw`h-4`, { resizeMode: "contain" }]}
            />
            <Text style={tw`text-lg px-3`}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-row items-center justify-between bg-white rounded-full py-2 px-4 bg-blue-500`}
          >
            <Image
              source={require("../../assets/auth/facebook.png")}
              style={[tw``, { resizeMode: "contain" }]}
            />
            <Text style={tw`text-lg px-3 text-white`}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={tw`px-8`} showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            username: "",
            fullname: "",
            email: "",
            phone: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Text style={tw`text-blue-900 font-semibold px-4 py-2`}>
                Username
              </Text>
              <TextInput
                icon={require("../../assets/auth/user.png")}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username"
              />
              <Text style={tw`text-blue-900 font-semibold px-4 py-2`}>
                Fullname
              </Text>
              <TextInput
                icon={require("../../assets/auth/profile.png")}
                onChangeText={handleChange("fullname")}
                onBlur={handleBlur("fullname")}
                value={values.fullname}
                placeholder="Fullname"
              />

              <Text style={tw`text-blue-900 font-semibold px-4 py-2`}>
                Email
              </Text>
              <TextInput
                icon={require("../../assets/auth/email.png")}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCompleteType="email"
                placeholder="Your Email"
              />
              <Text style={tw`text-blue-900 font-semibold px-4 py-2`}>
                Contact
              </Text>
              <TextInput
                icon={require("../../assets/auth/contact.png")}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="Your Number"
              />
              <Text style={tw`text-blue-900 font-semibold px-4 py-2`}>
                Password
              </Text>
              <TextInput
                icon={require("../../assets/auth/password.png")}
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
              <Button onPress={handleSubmit} title="Sign Up" />
              <View style={tw`flex flex-row my-4 items-center justify-center`}>
                <Text>Already have an account </Text>
                <Text
                  style={tw`text-blue-900 underline`}
                  onPress={() => navigation.navigate("SignInScreen")}
                >
                  Sign in to your account
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      <View style={tw`flex flex-1 justify-end`}>
        <NavBar style={tw``} />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})
