import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native"
import React, { useState } from "react"
import tw from "twrnc"
import { SafeAreaView } from "react-native-safe-area-context"

const ModalScreen2 = () => {
  const data = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Elza",
    },
    {
      id: 3,
      name: "Mark",
    },
    {
      id: 4,
      name: "Stefen",
    },
    {
      id: 5,
      name: "Sid",
    },
    {
      id: 6,
      name: "Harry",
    },
    {
      id: 7,
      name: "Emmi",
    },
    {
      id: 8,
      name: "Anna",
    },{
      id: 9,
      name: "John",
    },
    {
      id: 10,
      name: "Elza",
    },
    {
      id: 11,
      name: "Mark",
    },{
      id: 12,
      name: "Elza",
    },
    {
      id: 13,
      name: "Mark",
    },
    {
      id: 14,
      name: "Stefen",
    },
    {
      id: 15,
      name: "Sid",
    },
    {
      id: 16,
      name: "Harry",
    },
    {
      id: 17,
      name: "Emmi",
    },
    {
      id: 18,
      name: "Anna",
    },
  ]
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
        <View style={tw`m-auto p-5 px-1 bg-blue-900 h-11/12 w-3/4 rounded-lg`}>
          <TouchableOpacity
            style={tw`w-6 h-6 bg-white rounded-full p-1 right-4 top-4 absolute`}
            onPress={() => setShow(false)}
          >
            <Text style={tw`text-center`}>X</Text>
          </TouchableOpacity>
          <Text style={tw`text-white text-xl text-center my-4`}>
            Your Friends
          </Text>
          <ScrollView style={tw`px-8`} showsVerticalScrollIndicator={false}>
            <FlatList
              style={tw``}
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item: { name } }) => (
                <View style={tw`my-2 flex-row items-center`}>
                  <View style={tw`flex-row items-center flex-1`}>
                    <Image style={tw`h-10 w-10 rounded-full bg-white mr-4`} />
                    <Text style={tw`text-white font-bold`}>{name}</Text>
                  </View>
                  <TouchableOpacity
                    style={tw`bg-white py-2 shadow rounded-lg w-18`}
                  >
                    <Text style={tw`text-blue-900 text-center font-bold`}>
                      Send
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
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
                <View
                  style={tw`p-2 border border-white rounded-md w-14 h-full`}
                >
                  <Text
                    style={tw`text-white text-center border border-white p-2 rounded-full`}
                  >
                    +
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity style={tw`bg-blue-100`} onPress={() => setShow(!show)}>
        <Text>Show modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ModalScreen2

const styles = StyleSheet.create({})
