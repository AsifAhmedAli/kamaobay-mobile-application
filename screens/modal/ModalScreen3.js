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
        <View style={tw`m-auto p-5 bg-blue-900 h-3/4 w-3/4 rounded-lg`}>
          <TouchableOpacity
            style={tw`w-6 h-6 bg-white rounded-full p-1 right-4 top-4 absolute`}
            onPress={() => setShow(false)}
          >
            <Text style={tw`text-center`}>X</Text>
          </TouchableOpacity>
          <View style={tw`flex items-center justify-center mt-10`}>
            <Text style={tw`text-white text-xl`}>Wow, You Are Awesome!</Text>
            <View style={tw`flex-row items-end`}>
              <Text style={tw`text-white text-4xl font-bold mr-2`}>99</Text>
              <Text style={tw`text-white`}>Points</Text>
            </View>
            <Text style={tw`text-white text-xs`}>22:00 am, %th Dec 2021</Text>
          </View>
          <Image
            style={[tw`w-full h-38`, { resizeMode: "contain" }]}
            source={require("../../assets/modal/reward.png")}
          />
          <View style={tw`flex-row justify-between items-center my-4`}>
            <Text
              style={tw`text-white text-center font-bold border border-white rounded-md py-3 px-6 w-30`}
            >
              Claim
            </Text>
            <Text
              style={tw`text-blue-900 text-center font-bold bg-white rounded-md py-3 px-6 w-30`}
            >
              New Task
            </Text>
          </View>
          <View>
            <View style={tw`flex-row items-center my-2`}>
              <Image style={tw`w-4 h-4 bg-white rounded-full mr-4`} />
              <Text style={tw`text-white`}>Fefreck Winsly!</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Image style={tw`w-4 h-4 bg-white rounded-full mr-4`} />
              <Text style={tw`text-white`}>#3455869</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Image style={tw`w-4 h-4 bg-white rounded-full mr-4 my-2`} />
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
