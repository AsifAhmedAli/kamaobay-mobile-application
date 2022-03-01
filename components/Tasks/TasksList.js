import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import tw from "twrnc"

const TasksList = () => {
  const data = [
    {
      id: 1,
      task: "Watching Youtube video",
      points: 100,
    },
    {
      id: 2,
      task: "Watching Youtube video",
      points: 100,
    },
    {
      id: 3,
      task: "Watching Youtube video",
      points: 100,
    },
    {
      id: 4,
      task: "Watching Youtube video",
      points: 100,
    },
    {
      id: 5,
      task: "Watching Youtube video",
      points: 100,
    },
    {
      id: 6,
      task: "Watching Youtube video",
      points: 100,
    },
  ]
  return (
    <View>
      <Text style={tw`text-blue-900 text-xl font-bold my-4`}>Tasks</Text>
      
    </View>
  )
}

export default TasksList

const styles = StyleSheet.create({})
