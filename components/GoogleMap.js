import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const GoogleMap = (props) => {
  const region = {
    latitude: parseInt(props.latitude),
    longitude: parseInt(props.longitude),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const coordinates = {
    latitude: parseInt(props.latitude),
    longitude: parseInt(props.longitude),
  };
  return (
    <View style={styles.mapContainer}>
      <MapView region={region} style={styles.map}>
        <Marker
          pinColor={Colors.blue}
          coordinate={coordinates}
          title={props.city}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 375,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default GoogleMap;
