import { FlatList, StyleSheet, Text, View } from "react-native"
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
  tableHead = ["Task", "Points", "Delete"]
  return (
    <View>
      <Text style={tw`text-blue-900 text-xl font-bold my-4`}>Tasks</Text>
      <Grid>
        <FlatList
          style={tw``}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, task, points } }) => (
            <Row>
              <Col>
                <Text>{task}</Text>
              </Col>
              <Col>
                <Text>{points}</Text>
              </Col>
              <Col>
                <Text>hui</Text>
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
