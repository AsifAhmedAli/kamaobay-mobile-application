import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableOpacityBase,
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
          <View style={tw`flex items-center justify-center mt-4`}>
            <Text style={tw`text-white text-xl`}>Available Stars</Text>
            <Text style={tw`text-white text-3xl font-bold`}>99,999</Text>
            <Text style={tw`text-white text-sm`}>22:00 am, 5th Dec 2021</Text>
          </View>
          <View style={tw`flex-row justify-between items-center my-4`}>
            <View>
              <Text style={tw`text-white text-center mb-2`}>Withdraw</Text>
              <TouchableOpacity>
                <Text
                  style={tw`text-white font-bold border border-white rounded-md py-3 px-6`}
                >
                  10,000.00
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={tw`text-white text-center mb-2`}>Value Rupee</Text>
              <TouchableOpacity>
                <Text
                  style={tw`text-blue-900 font-bold bg-white rounded-md py-3 px-6`}
                >
                  Rs 1,000.00
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={tw`bg-white py-3 rounded-lg`}>
            <Text style={tw`text-blue-900 text-center font-bold`}>
              Transfer Bank
            </Text>
          </TouchableOpacity>
          <Text style={tw`text-white text-center my-2`}>
            Salary Id: #225mn6
          </Text>
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
          </View>
          <View style={tw``}>
            <Text style={tw`text-white text-center mt-6 mb-4`}>
              Send GIFT To Your Friends
            </Text>
            <View style={tw`flex-row justify-evenly items-center`}>
              <TouchableOpacity
                style={tw`p-2 border border-white rounded-md w-14`}
              >
                <Text style={tw`text-white text-center`}>100 Stars</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`p-2 border border-white rounded-md w-14`}
              >
                <Text style={tw`text-white text-center`}>200 Stars</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`p-2 border border-white rounded-md w-14`}
              >
                <Text style={tw`text-white text-center`}>500 Stars</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`flex-row justify-evenly items-center my-2`}>
              <TouchableOpacity
                style={tw`p-2 border border-white rounded-md w-14`}
              >
                <Text style={tw`text-white text-center`}>1000 Stars</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`p-2 border border-white rounded-md w-14 h-14`}
              >
                <Image
                  source={require("../../assets/dashboard/modals/add.png")}
                  style={[tw`h-8 w-8 m-auto`, { resizeMode: "contain" }]}
                />
              </TouchableOpacity>
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
