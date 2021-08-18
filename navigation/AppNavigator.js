import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import UserScreen from "../screens/UserScreen";
import UserDetailScreen from "../screens/UserDetailScreen";
import Colors from "../constants/Colors";

const defaultStackNavOpts = {
  headerTintColor: Colors.grey,
  headerTitleStyle: {
    fontFamily: 'gotham-book'
  },
  cardStyle: {
    backgroundColor: "white",
    opacity: 1,
  },
};

const UsersNavigator = createStackNavigator(
  {
    Users: UserScreen,
    UserDetail: UserDetailScreen,
  },
  { 
 
    defaultNavigationOptions: defaultStackNavOpts,

  }
);

const MainNavigator = createDrawerNavigator(
  {
    Users: {
      screen: UsersNavigator,
      navigationOptions: {
        drawerLabel: "Users",
      },
    },
  },
  {
    contentOptions: {
      itemsContainerStyle: {
        marginTop: 20,
      },
      labelStyle: {
        fontSize: 20,
      },
      activeTintColor: Colors.blue,
    },
    drawerPosition: "right",
  }
);
export default createAppContainer(MainNavigator);
