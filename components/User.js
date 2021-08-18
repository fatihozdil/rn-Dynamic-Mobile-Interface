import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";

const User = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onSelectUser}>
      <View style={styles.userContainer}>
        <View style={styles.userInfo}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: props.imageUrl }} style={styles.userImage} />
          </View>
          <DefaultText style={styles.userTitle}>
            {props.name}, {props.age}
          </DefaultText>
        </View>
        <AntDesign name="right" size={24} color="#ccc" />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    width: "100%",
    padding: 15,
    paddingRight: 25,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    overflow: "hidden",
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  userTitle: {
    color: Colors.blue,
    marginLeft: 15,
    fontSize: 18,
  },
});

export default User;
