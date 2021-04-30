import React from "react";
import { View, Text } from "react-native";

export default function DetailsScreen(props) {
    return (
      <View
        style={{
        padding: 30,
          width: "100%",
          backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
          fontColor: 'red',
        }}
      ></View>
    );
   }