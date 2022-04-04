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

const ModalScreen1 = () => {
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
            <Text style={modal.headingText}>Available Stars</Text>
            <Text style={modal.starCount}>99,999</Text>
            <Text style={modal.dateTime}>22:00 am, 5th Dec 2021</Text>
          </View>
          <View style={modal.buttonsContainer}>
            <View>
              <Text style={modal.colText}>Withdraw</Text>
              <TouchableOpacity>
                <Text style={modal.amount}>10,000.00</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={modal.colText}>Value Rupee</Text>
              <TouchableOpacity>
                <Text style={modal.amount}>Rs 1,000.00</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={modal.transferConfirmButton}>
            <Text style={modal.transferText}>Transfer Bank</Text>
          </TouchableOpacity>
          <Text style={modal.salaryId}>Salary Id: #225mn6</Text>
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
          </View>
          <View>
            <Text style={modal.giftHeading}>
              Send GIFT To Your Friends
            </Text>
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
