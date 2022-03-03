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
import SignInScreen from "./screens/auth/SignInScreen"
import SignUpScreen from "./screens/auth/SignUpScreen"
import ResetPasswordScreen from "./screens/auth/ResetPasswordScreen"
import DashboardHomeScreen from "./screens/dashboard/DashboardHomeScreen"
import WalletScreen from "./screens/wallet/WalletScreen"
import BuyStarsScreen from "./screens/buyStars/BuyStarsScreen"
import FriendScreen from "./screens/friend/FriendScreen"
import GamesScreen from "./screens/games/GamesScreen"
import TasksScreen from "./screens/tasks/TasksScreen"
import AddFriendScreen from "./screens/friend/AddFriendScreen"

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
            <Stack.Screen
              name="DashboardHomeScreen"
              component={DashboardHomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WalletScreen"
              component={WalletScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BuyStarsScreen"
              component={BuyStarsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendScreen"
              component={FriendScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddFriendScreen"
              component={AddFriendScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GamesScreen"
              component={GamesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TasksScreen"
              component={TasksScreen}
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
    color: "blue",
  },
})
