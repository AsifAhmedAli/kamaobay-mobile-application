import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useRef, useState } from "react"
import tw from "twrnc"
import { dashboardScreen } from "../../styles/AppStyles"

const Statements = () => {
  const data = [
    {
      id: 1,
      month: "April",
      stars: "180000",
      transfer: "20000",
      withdraw: "100000",
    },
    {
      id: 2,
      month: "May",
      stars: "80000",
      transfer: "10000",
      withdraw: "70000",
    },
    {
      id: 3,
      month: "June",
      stars: "100000",
      transfer: "20000",
      withdraw: "80000",
    },
    {
      id: 4,
      month: "July",
      stars: "180000",
      transfer: "20000",
      withdraw: "100000",
    },
    {
      id: 5,
      month: "August",
      stars: "20000",
      transfer: "20000",
      withdraw: "100000",
    },
    {
      id: 6,
      month: "September",
      stars: "80000",
      transfer: "20000",
      withdraw: "100000",
    },
  ]
  const [scrollIndex, setScrollIndex] = useState(0)

  const fl = useRef(null)

  useEffect(() => {
    fl.current?.scrollToIndex({ index: scrollIndex, animated: true })
  }, [scrollIndex])
  return (
    <View>
      <Text style={dashboardScreen.statementHeading}>Statement</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, month }, index }) => (
          <TouchableOpacity style={tw`my-2 mr-12`}>
            <Text
              style={tw`${
                index == scrollIndex ? "text-blue-900" : "text-blue-300"
              } font-bold `}
              onPress={() => setScrollIndex(index)}
            >
              {month}
            </Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        ref={fl}
        initialScrollIndex={scrollIndex}
        style={tw``}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, stars, transfer, withdraw }, index }) => (
          <View
            style={tw`${
              index == scrollIndex ? "bg-blue-900" : "bg-white"
            } my-2  mr-4 w-32 rounded-xl p-4`}
          >
            <View style={tw`my-2`}>
              <Text
                style={tw`${
                  index == scrollIndex ? "text-white" : "text-blue-900"
                } text-xl font-bold`}
              >
                {stars}
              </Text>
              <Text
                style={tw`${
                  index == scrollIndex ? "text-white" : "text-blue-900"
                }`}
              >
                Stars
              </Text>
            </View>
            <View style={tw`my-2`}>
              <Text
                style={tw`${
                  index == scrollIndex ? "text-white" : "text-blue-900"
                }`}
              >
                Transfer
              </Text>
              <Text
                style={tw`${
                  index == scrollIndex ? "text-white" : "text-blue-900"
                } text-xs`}
              >
                {transfer} Stars
              </Text>
            </View>
            <View style={tw`my-2`}>
              <Text
                style={tw`${
                  index == scrollIndex ? "text-white" : "text-blue-900"
                }`}
              >
                Withdraw
              </Text>
              <Text
                style={tw`${
                  index == scrollIndex ? "text-white" : "text-blue-900"
                } text-xs`}
              >
                {withdraw} Stars
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Statements
