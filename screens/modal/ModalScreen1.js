import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
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
        <View style={tw`m-auto p-5 bg-blue-900 h-3/4 w-3/4 rounded-lg`}>
          <TouchableOpacity
            style={tw`w-6 h-6 bg-white rounded-full p-1`}
            onPress={() => setShow(false)}
          >
            <Text>X</Text>
          </TouchableOpacity>
          <View style={tw`flex items-center justify-center`}>
            <Text style={tw`text-white text-2xl`}>Modal Screen 1</Text>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={tw``} onPress={() => setShow(!show)}>
        <Text>Show modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ModalScreen1

const styles = StyleSheet.create({})
