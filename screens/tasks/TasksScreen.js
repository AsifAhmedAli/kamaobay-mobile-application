import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Dashboard/Header'
import Intro from '../../components/Dashboard/Intro'
import TasksList from '../../components/Tasks/TasksList'
import NavBar from '../../components/Dashboard/NavBar'
import { backgroundColor, paddingX } from '../../styles/AppStyles'

const TasksScreen = () => {
  return (
    <SafeAreaView style={backgroundColor}>
      <Header />
      <ScrollView style={paddingX} showsVerticalScrollIndicator={false}>
        <Intro />
        <TasksList />
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  )
}

export default TasksScreen

const styles = StyleSheet.create({})