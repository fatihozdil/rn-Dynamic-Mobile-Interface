import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import GoogleMap from "../components/GoogleMap";
import UserDetailGeneralInfo from "../components/UserDetailGeneralInfo";
import UserDetailedInfoContainer from "../components/UserDetailedInfoContainer";

const UserDetailScreen = (props) => {
  const userData = props.navigation.getParam("userData");
  return (
    <ScrollView style={styles.screen}>
      <UserDetailGeneralInfo
        name={`${userData.name.first} ${userData.name.last}`}
        imageUrl={userData.picture.large}
      />
      <GoogleMap
        latitude={userData.location.coordinates.latitude}
        longitude={userData.location.coordinates.longitude}
        city={userData.location.city}
      />

      <UserDetailedInfoContainer
        age={userData.dob.age}
        gender={userData.gender}
      />
    </ScrollView>
  );
};
UserDetailScreen.navigationOptions = {
  headerTitle: "MY PROFILE",
  headerTitleStyle: { color: Colors.grey, fontFamily: "gotham-book" },
  headerTintColor: Colors.blue,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default UserDetailScreen;
