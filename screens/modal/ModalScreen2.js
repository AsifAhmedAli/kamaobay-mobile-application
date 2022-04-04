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
import { modal, paddingX } from "../../styles/AppStyles"

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
    <SafeAreaView style={modal.modal}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(!show)
        }}
      >
        <View style={modal.modalContainer}>
          <TouchableOpacity
            style={modal.modalClose}
            onPress={() => setShow(false)}
          >
            <Image
              source={require("../../assets/dashboard/modals/cross.png")}
              style={modal.closeImage}
            />
          </TouchableOpacity>
          <Text style={modal.modalHeading}>Your Friends</Text>
          <ScrollView style={paddingX} showsVerticalScrollIndicator={false}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item: { name, image } }) => (
                <View style={modal.friendsContainer}>
                  <View style={modal.userContainer}>
                    <Image source={image} style={modal.userImage} />
                    <Text style={modal.userName}>{name}</Text>
                  </View>
                  <TouchableOpacity style={modal.sendButton}>
                    <Text style={modal.sendText}>Send</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
            <View>
              <Text style={modal.giftHeading}>Send GIFT To Your Friends</Text>
              <View style={modal.starsContainer}>
                <TouchableOpacity style={modal.starBox}>
                  <Text style={modal.starText}>100 Stars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modal.starBox}>
                  <Text style={modal.starText}>200 Stars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modal.starBox}>
                  <Text style={modal.starText}>500 Stars</Text>
                </TouchableOpacity>
              </View>
              <View style={modal.starsContainer}>
                <TouchableOpacity style={modal.starBox}>
                  <Text style={modal.starText}>1000 Stars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={modal.starBox}>
                  <Image
                    source={require("../../assets/dashboard/modals/add.png")}
                    style={modal.starImage}
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
