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
      image: require("../../assets/dashboard/friendList/u1.png"),
    },
    {
      id: 2,
      name: "Elza",
      image: require("../../assets/dashboard/friendList/u2.png"),
    },
    {
      id: 3,
      name: "Mark",
      image: require("../../assets/dashboard/friendList/u3.png"),
    },
    {
      id: 4,
      name: "Stefen",
      image: require("../../assets/dashboard/friendList/u4.png"),
    },
    {
      id: 5,
      name: "Sid",
      image: require("../../assets/dashboard/friendList/u5.png"),
    },
    {
      id: 6,
      name: "Harry",
      image: require("../../assets/dashboard/friendList/u1.png"),
    },
    {
      id: 7,
      name: "Emmi",
      image: require("../../assets/dashboard/friendList/u2.png"),
    },
    {
      id: 8,
      name: "Anna",
      image: require("../../assets/dashboard/friendList/u3.png"),
    },
    {
      id: 9,
      name: "John",
      image: require("../../assets/dashboard/friendList/u4.png"),
    },
    {
      id: 10,
      name: "Elza",
      image: require("../../assets/dashboard/friendList/u5.png"),
    },
    {
      id: 11,
      name: "Mark",
      image: require("../../assets/dashboard/friendList/u1.png"),
    },
    {
      id: 12,
      name: "Elza",
      image: require("../../assets/dashboard/friendList/u2.png"),
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
        <View style={tw`m-auto p-5 px-1 bg-blue-900 h-5/6 w-11/12 rounded-lg`}>
          <TouchableOpacity
            style={tw`right-4 top-4 absolute`}
            onPress={() => setShow(false)}
          >
            <Image
              source={require("../../assets/dashboard/modals/cross.png")}
              style={[tw`h-7 w-7`, { resizeMode: "contain" }]}
            />
          </TouchableOpacity>
          <Text style={tw`text-white text-xl text-center my-4`}>
            Your Friends
          </Text>
          <ScrollView style={tw`px-8`} showsVerticalScrollIndicator={false}>
            <FlatList
              style={tw``}
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item: { name, image } }) => (
                <View style={tw`my-2 flex-row items-center`}>
                  <View style={tw`flex-row items-center flex-1`}>
                    <Image
                      source={image}
                      style={[tw`h-12 w-12 mr-4`, { resizeMode: "contain" }]}
                    />
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
