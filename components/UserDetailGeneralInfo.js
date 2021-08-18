import React from "react";
import { View,StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";

const UserDetailGeneralInfo = (props) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.userImageContainer}>
        <Image source={{ uri: props.imageUrl }} style={styles.userImage} />
      </View>
      <View style={styles.userNameContainer}>
        <DefaultText style={styles.nameLabel}>Name</DefaultText>
        <DefaultText style={styles.name}>{props.name}</DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
  },
  userImageContainer: {
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: 50,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  userNameContainer: {
    marginLeft: 30,
    justifyContent: "center",
  },
  nameLabel:{
      color: Colors.grey,
      fontSize: 20
  },
  name:{
      color: Colors.blue,
      fontSize: 22
  }
});

export default UserDetailGeneralInfo;
