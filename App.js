import { NavigationContainer } from "@react-navigation/native"
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import tw from "twrnc"
import SignInScreen from "./screens/SignInScreen"
import ResetPasswordScreen from "./screens/ResetPasswordScreen"
import SignUpScreen from "./screens/SignUpScreen"

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInScreen"
              component={SignInScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    color:"blue"
  },
})
