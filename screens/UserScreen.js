import React, { useState, useEffect, useRef } from "react";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import User from "../components/User";

const UserScreen = (props) => {
  const [usersData, setUsersData] = useState([]);

  const wsRef = useRef(null);

  //fetch user data
  useEffect(() => {
    wsRef.current = new WebSocket(
      "wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket"
    );
    wsRef.current.onopen = () => console.log("ws opened");
    wsRef.current.onclose = (e) => console.log("ws closed", e);
  }, []);

  useEffect(() => {
    if (!wsRef.current) return;

    wsRef.current.onmessage = (msg) => {
      if (msg.data.substr(0, 2) === "42") {
        const stringToBeParsed = msg.data.substr(2);
        const obj = JSON.parse(stringToBeParsed);
        setUsersData((data) => [...data, obj[1].results[0]]);
      }
    };
  }, []);
  //render users
  const renderUsers = (itemData) => {
    return (
      <User
        name={itemData.item.name.first}
        imageUrl={itemData.item.picture.thumbnail}
        age={itemData.item.dob.age}
        onSelectUser={() => {
          props.navigation.navigate("UserDetail", {
            userData: itemData.item,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.login.md5}
      data={usersData}
      renderItem={renderUsers}
    />
  );
};
UserScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "PROFILES",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserScreen;
