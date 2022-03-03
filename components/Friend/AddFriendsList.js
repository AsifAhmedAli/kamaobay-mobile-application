import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import { Col, Grid, Row } from "react-native-easy-grid"
import tw from "twrnc"

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
        <Row style={tw`flex py-2 items-center justify-between`}>
          <Col style={tw`flex-1`}>
            <Text style={tw`text-blue-900 text-lg font-bold`}>Name</Text>
          </Col>
          <Col style={tw`w-20 mx-1`}>
            <Text style={tw`text-blue-900 text-lg font-bold text-center`}>
              Add
            </Text>
          </Col>
          <Col style={tw`w-20 `}>
            <Text style={tw`text-blue-900 text-lg font-bold text-center`}>
              Message
            </Text>
          </Col>
        </Row>
        <FlatList
          style={tw``}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, name } }) => (
            <Row style={tw`flex py-2 items-center justify-between`}>
              <Col style={tw`flex-1`}>
                <Text style={tw`text-blue-900 text-lg`}>{name}</Text>
              </Col>
              <Col style={tw`w-20 mx-1`}>
                <Text
                  style={tw`text-blue-900 text-md bg-white text-center p-1 rounded-lg shadow-md uppercase font-bold`}
                >
                  Check
                </Text>
              </Col>
              <Col style={tw`w-20`}>
                <Text
                  style={tw`text-blue-900 text-md bg-white text-center p-1 rounded-lg shadow-md uppercase font-bold`}
                >
                  Send
                </Text>
              </Col>
            </Row>
          )}
        />
      </Grid>
    </View>
  )
}

export default AddFriendsList

const styles = StyleSheet.create({})
