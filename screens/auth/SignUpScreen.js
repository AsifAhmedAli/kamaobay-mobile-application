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
import NavBar from "../../components/home/NavBar"
import TextInput from "../../components/Auth/TextInput"
import {
  authScreen,
  backgroundColor,
  flexBoxRow,
  paddingX,
} from "../../styles/AppStyles"

const SignUpScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={backgroundColor}>
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
      <ScrollView style={paddingX} showsVerticalScrollIndicator={false}>
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
              <Text style={authScreen.labelText}>Username</Text>
              <TextInput
                icon={require("../../assets/auth/user.png")}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username"
              />
              <Text style={authScreen.labelText}>Fullname</Text>
              <TextInput
                icon={require("../../assets/auth/profile.png")}
                onChangeText={handleChange("fullname")}
                onBlur={handleBlur("fullname")}
                value={values.fullname}
                placeholder="Fullname"
              />

              <Text style={authScreen.labelText}>Email</Text>
              <TextInput
                icon={require("../../assets/auth/email.png")}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCompleteType="email"
                placeholder="Your Email"
              />
              <Text style={authScreen.labelText}>Contact</Text>
              <TextInput
                icon={require("../../assets/auth/contact.png")}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="Your Number"
              />
              <Text style={authScreen.labelText}>Password</Text>
              <TextInput
                icon={require("../../assets/auth/password.png")}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                autoCompleteType="password"
                placeholder="Your Password"
                secureTextEntry
              />
              <Button onPress={handleSubmit} title="Sign Up" />
              <View
                style={[authScreen.linkSection, tw`mb-24`]}
              >
                <Text>Already have an account </Text>
                <Text
                  style={authScreen.linkText}
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
        <NavBar />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})
