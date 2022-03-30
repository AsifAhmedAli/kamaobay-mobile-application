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
import { authScreen, flexBoxRow, paddingX } from "../../styles/AppStyles"

const ResetPasswordScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={authScreen.authHeader}>
        <Image
          source={require("../../assets/auth/logo.png")}
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View style={[tw` my-4`, paddingX]}>
        <Text style={authScreen.textHeading}>Welcome Back</Text>
        <Text style={tw`mb-4`}>
          We make it easy for everyone to maximize their investment
        </Text>
        <View style={flexBoxRow}>
          <TouchableOpacity style={[authScreen.loginGoogle, flexBoxRow]}>
            <Image
              source={require("../../assets/auth/google.png")}
              style={[tw`h-4`, { resizeMode: "contain" }]}
            />
            <Text style={tw`text-lg px-3`}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[authScreen.loginFacebook, flexBoxRow]}>
            <Image
              source={require("../../assets/auth/facebook.png")}
              style={{ resizeMode: "contain" }}
            />
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
              <Text style={authScreen.labelText}> Username</Text>
              <TextInput
                icon={require("../../assets/auth/user.png")}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username"
              />
              <Text style={authScreen.labelText}> Email</Text>
              <TextInput
                icon={require("../../assets/auth/email.png")}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCompleteType="email"
                placeholder="Your Email"
              />

              <Button onPress={handleSubmit} title="Check Your Email" />
              <View style={authScreen.linkSection}>
                <Text>New on our platform? </Text>
                <Text
                  style={authScreen.linkText}
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
        <NavBar />
      </View>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({})
