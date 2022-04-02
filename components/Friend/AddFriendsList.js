import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { Col, Grid, Row } from "react-native-easy-grid"
import { dashboardScreen } from "../../styles/AppStyles"

const AddFriendsList = () => {
  const data = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Elza",
    },
    {
      id: 3,
      name: "Mark",
    },
    {
      id: 4,
      name: "Stefen",
    },
    {
      id: 5,
      name: "Sid",
    },
    {
      id: 6,
      name: "Harry",
    },
    {
      id: 7,
      name: "Emmi",
    },
    {
      id: 8,
      name: "Anna",
    },
  ]
  return (
    <View>
      <Grid>
        <Row style={dashboardScreen.headingRow}>
          <Col style={dashboardScreen.col1}>
            <Text style={dashboardScreen.mainColText}>Name</Text>
          </Col>
          <Col style={dashboardScreen.col2}>
            <Text style={dashboardScreen.subColText}>Add</Text>
          </Col>
          <Col style={dashboardScreen.col3}>
            <Text style={dashboardScreen.subColText}>Message</Text>
          </Col>
        </Row>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, name } }) => (
            <Row style={dashboardScreen.headingRow}>
              <Col style={dashboardScreen.col1}>
                <Text style={dashboardScreen.mainColTextTable}>{name}</Text>
              </Col>
              <Col style={dashboardScreen.col2}>
                <TouchableOpacity
                  style={dashboardScreen.friendsButton}
                >
                  <Text
                    style={dashboardScreen.friendsButtonText}
                  >
                    Check
                  </Text>
                </TouchableOpacity>
              </Col>
              <Col style={ dashboardScreen.col3}>
                <TouchableOpacity
                  style={dashboardScreen.friendsButton}
                >
                  <Text
                    style={dashboardScreen.friendsButtonText}
                  >
                    Send
                  </Text>
                </TouchableOpacity>
              </Col>
            </Row>
          )}
        />
      </Grid>
    </View>
  )
}

export default AddFriendsList

