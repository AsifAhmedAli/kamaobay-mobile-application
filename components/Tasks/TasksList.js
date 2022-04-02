import { FlatList, Text, View,Image } from "react-native"
import React from "react"
import { Col, Row, Grid } from "react-native-easy-grid"
import { dashboardScreen } from "../../styles/AppStyles"

const TasksList = () => {
  const data = [
    {
      id: 1,
      task: "Watching Youtube video",
      points: 100,
    },
    {
      id: 2,
      task: "Watching Ads",
      points: 1000,
    },
    {
      id: 3,
      task: "Play Games",
      points: 100,
    },
    {
      id: 4,
      task: "Watching Ads",
      points: 100,
    },
    {
      id: 5,
      task: "Watching Youtube video",
      points: 100,
    },
    {
      id: 6,
      task: "Play Games",
      points: 100,
    },
  ]

  return (
    <View>
      <Grid>
        <Row style={dashboardScreen.headingRow}>
          <Col style={dashboardScreen.col1}>
            <Text style={dashboardScreen.mainColText}>Task</Text>
          </Col>
          <Col style={dashboardScreen.taskCol2}>
            <Text style={dashboardScreen.mainColText}>Points</Text>
          </Col>
          <Col style={dashboardScreen.taskCol3}>
            <Text style={dashboardScreen.mainColText}>Delete</Text>
          </Col>
        </Row>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, task, points } }) => (
            <Row style={dashboardScreen.headingRow}>
              <Col style={dashboardScreen.taskCol1}>
                <Image
                  source={require("../../assets/dashboard/tasks/task.png")}
                  style={dashboardScreen.taskCheckBox}
                />
                <Text style={dashboardScreen.taskName}>{task}</Text>
              </Col>
              <Col style={dashboardScreen.taskCol2}>
                <Text style={dashboardScreen.taskPoints}>{points} points</Text>
              </Col>
              <Col style={dashboardScreen.taskContentCol3}>
                <Image
                  source={require("../../assets/dashboard/tasks/delete.png")}
                  style={dashboardScreen.taskDeleteImage}
                />
              </Col>
            </Row>
          )}
        />
      </Grid>
    </View>
  )
}

export default TasksList

