import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native"
import React, { useState } from "react"
import tw from "twrnc"
import { SafeAreaView } from "react-native-safe-area-context"

const ModalScreen3 = () => {
  const [show, setShow] = useState(false)
  return (
    <SafeAreaView style={tw`flex items-center justify-center`}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(!show)
        }}
      >
        <View style={tw`m-auto p-8 bg-blue-900 h-5/6 w-11/12 rounded-lg`}>
          <TouchableOpacity
            style={tw`right-4 top-4 absolute`}
            onPress={() => setShow(false)}
          >
            <Image
              source={require("../../assets/dashboard/modals/cross.png")}
              style={[tw`h-7 w-7`, { resizeMode: "contain" }]}
            />
          </TouchableOpacity>
          <View style={tw`flex items-center justify-center mt-10`}>
            <Text style={tw`text-white text-xl`}>Wow, You Are Awesome!</Text>
            <View style={tw`flex-row items-end`}>
              <Text style={tw`text-white text-4xl font-bold mr-2`}>99</Text>
              <Text style={tw`text-white`}>Points</Text>
            </View>
            <Text style={tw`text-white text-sm`}>22:00 am, 5th Dec 2021</Text>
          </View>
          <Image
            source={require("../../assets/dashboard/modals/reward.png")}
            style={[tw`mx-auto mb-4`, { resizeMode: "contain" }]}
          />

          <View style={tw`flex-row justify-between items-center my-4`}>
            <TouchableOpacity>
              <Text
                style={tw`text-white text-center font-bold border border-white rounded-md py-3 px-6 w-30`}
              >
                Claim
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={tw`text-blue-900 text-center font-bold bg-white rounded-md py-3 px-6 w-30`}
              >
                New Task
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={tw`flex-row items-center my-2`}>
              <Image
                source={require("../../assets/dashboard/modals/user.png")}
                style={[tw`h-5 w-5 mr-4`, { resizeMode: "contain" }]}
              />
              <Text style={tw`text-white`}>Fefreck Winsly!</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Image
                source={require("../../assets/dashboard/modals/id.png")}
                style={[tw`h-5 w-5 mr-4`, { resizeMode: "contain" }]}
              />
              <Text style={tw`text-white`}>#3455869</Text>
            </View>
            <View style={tw`flex-row items-center my-2`}>
              <Image
                source={require("../../assets/dashboard/modals/task.png")}
                style={[tw`h-5 w-5 mr-4`, { resizeMode: "contain" }]}
              />
              <Text style={tw`text-white`}>Watching Video</Text>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={tw`bg-blue-100`} onPress={() => setShow(!show)}>
        <Text>Show modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ModalScreen3

const styles = StyleSheet.create({})
