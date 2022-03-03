import { FlatList, StyleSheet, Text, View,Image } from "react-native"
import React from "react"
import tw from "twrnc"
import { Col, Row, Grid } from "react-native-easy-grid"

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
      points: 1000,
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
      <Grid>
        <Row style={tw`flex py-2 items-center justify-between`}>
          <Col style={tw`flex-1`}>
            <Text style={tw`text-blue-900 text-lg font-bold`}>Task</Text>
          </Col>
          <Col style={tw`w-24 `}>
            <Text style={tw`text-blue-900 text-lg font-bold`}>Points</Text>
          </Col>
          <Col style={tw`w-14 `}>
            <Text style={tw`text-blue-900 text-lg font-bold`}>Delete</Text>
          </Col>
        </Row>
        <FlatList
          style={tw``}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, task, points } }) => (
            <Row
              style={tw`flex py-2 items-center justify-between`}
            >
              <Col style={tw`flex-1`}>
                <Text style={tw`text-blue-900 text-lg font-bold`}>{task}</Text>
              </Col>
              <Col style={tw`w-24`}>
                <Text style={tw`text-blue-900 text-md`}>{points} points</Text>
              </Col>
              <Col style={tw`w-14 flex items-center`}>
                <Image style={tw`w-4 h-4 bg-blue-900 rounded-full`} />
              </Col>
            </Row>
          )}
        />
      </Grid>
    </View>
  )
}

export default TasksList

const styles = StyleSheet.create({})
