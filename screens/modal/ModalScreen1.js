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

const ModalScreen1 = () => {
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
        <View style={tw`m-auto p-5 bg-blue-900 h-11/12 w-3/4 rounded-lg`}>
          <TouchableOpacity
            style={tw`w-6 h-6 bg-white rounded-full p-1 right-4 top-4 absolute`}
            onPress={() => setShow(false)}
          >
            <Text style={tw`text-center`}>X</Text>
          </TouchableOpacity>
          <View style={tw`flex items-center justify-center mt-10`}>
            <Text style={tw`text-white text-xl`}>Available Stars</Text>
            <Text style={tw`text-white text-3xl`}>99,999</Text>
            <Text style={tw`text-white text-xs`}>22:00 am, %th Dec 2021</Text>
          </View>
          <View style={tw`flex-row justify-between items-center my-4`}>
            <View>
              <Text style={tw`text-white text-center`}>Withdraw</Text>
              <View>
                <Text
                  style={tw`text-white font-bold border border-white rounded-md py-3 px-6`}
                >
                  10,000.00
                </Text>
              </View>
            </View>
            <View>
              <Text style={tw`text-white text-center`}>Value Rupee</Text>
              <View>
                <Text
                  style={tw`text-blue-900 font-bold bg-white rounded-md py-3 px-6`}
                >
                  Rs 1,000.00
                </Text>
              </View>
            </View>
          </View>
          <View style={tw`bg-white py-3 rounded-lg`}>
            <Text style={tw`text-blue-900 text-center font-bold`}>
              Transfer Bank
            </Text>
          </View>
          <Text style={tw`text-white text-center my-2`}>
            Salary Id: #225mn6
          </Text>
          <View>
            <View style={tw`flex-row items-center my-2`}>
              <Image style={tw`w-4 h-4 bg-white rounded-full mr-4`} />
              <Text style={tw`text-white`}>Fefreck Winsly!</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Image style={tw`w-4 h-4 bg-white rounded-full mr-4`} />
              <Text style={tw`text-white`}>#3455869</Text>
            </View>
          </View>
          <View style={tw``}>
            <Text style={tw`text-white text-center mt-6 mb-4`}>
              Send GIF To Your Friends
            </Text>
            <View style={tw`flex-row justify-evenly items-center`}>
              <View style={tw`p-2 border border-white rounded-md w-14`}>
                <Text style={tw`text-white text-center`}>100 Stars</Text>
              </View>
              <View style={tw`p-2 border border-white rounded-md w-14`}>
                <Text style={tw`text-white text-center`}>200 Stars</Text>
              </View>
              <View style={tw`p-2 border border-white rounded-md w-14`}>
                <Text style={tw`text-white text-center`}>500 Stars</Text>
              </View>
            </View>
            <View style={tw`flex-row justify-evenly items-center my-2`}>
              <View style={tw`p-2 border border-white rounded-md w-14`}>
                <Text style={tw`text-white text-center`}>1000 Stars</Text>
              </View>
              <View style={tw`p-2 border border-white rounded-md w-14 h-full`}>
                <Text style={tw`text-white text-center border border-white p-2 rounded-full`}>+</Text>
              </View>
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

export default ModalScreen1

const styles = StyleSheet.create({})
