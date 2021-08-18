import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";

const UserDetailedInfoContainer = (props) => {
  const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const element = mock.map((el, i) => {
    if (i !== 8) {
      var style = {
        borderBottomWidth: 2,
        borderBottomColor: Colors.blue,
      };
    }
    return <View key={i} style={{ ...style, ...styles.lines }} />;
  });

  return (
    <View style={styles.userDetailedInfoContainer}>
      <View style={styles.genderContainer}>
        <DefaultText style={styles.title}>Gender</DefaultText>

        {props.gender === "male" ? (
          <Ionicons name="male" size={70} color={Colors.blue} />
        ) : (
          <Ionicons name="female" size={70} color="#FF1493" />
        )}
      </View>
      <View style={styles.ageContainer}>
        <DefaultText style={styles.title}>Age</DefaultText>
        <DefaultText style={styles.age}>{props.age} yo</DefaultText>
        <View style={styles.bottomBox}>{element}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userDetailedInfoContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  genderContainer: {
    width: "40%",
    borderRightWidth: 1,
    borderRightColor: Colors.blue,
    alignItems: "center",
  },
  title: {
    padding: 10,
    width: "100%",
    fontSize: 16,
    color: Colors.grey,
  },
  ageContainer: {
    width: "60%",
    alignItems: "flex-end",
  },
  age: {
    color: Colors.grey,
    fontSize: 16,
    width: '28%',
    borderBottomColor: Colors.blue,
    borderBottomWidth: 3,
  },
  bottomBox: {
    backgroundColor: "#B1B9F9",
    height: "100%",
    width: "100%",
    alignItems: 'flex-end'
  },
  lines: {
    height: 10,
    width: 19.8,
  },
});

export default UserDetailedInfoContainer;
