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
import { modal } from "../../styles/AppStyles"

const ModalScreen3 = () => {
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
          <View style={modal.header}>
            <Text style={modal.headingText}>Wow, You Are Awesome!</Text>
            <View style={modal.pointsContainer}>
              <Text style={modal.pointsCount}>99</Text>
              <Text style={modal.infoText}>Points</Text>
            </View>
            <Text style={modal.dateTime}>22:00 am, 5th Dec 2021</Text>
          </View>
          <Image
            source={require("../../assets/dashboard/modals/reward.png")}
            style={modal.pointsImage}
          />

          <View style={modal.pointsButtonsGroup}>
            <TouchableOpacity>
              <Text style={modal.pointsButton1}>Claim</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={modal.pointsButton2}>New Task</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={modal.infoContainer}>
              <Image
                source={require("../../assets/dashboard/modals/user.png")}
                style={modal.infoIcon}
              />
              <Text style={modal.infoText}>Fefreck Winsly!</Text>
            </View>
            <View style={modal.infoContainer}>
              <Image
                source={require("../../assets/dashboard/modals/id.png")}
                style={modal.infoIcon}
              />
              <Text style={modal.infoText}>#3455869</Text>
            </View>
            <View style={modal.infoContainer}>
              <Image
                source={require("../../assets/dashboard/modals/task.png")}
                style={modal.infoIcon}
              />
              <Text style={modal.infoText}>Watching Video</Text>
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

