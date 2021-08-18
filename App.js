import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { enableScreens } from "react-native-screens";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";



enableScreens();
export default function App() {
  let [fontsLoaded] = useFonts({
    "gotham-medium": require("./assets/fonts/Gotham-Medium.otf"),
    "gotham-book": require("./assets/fonts/GothamBook.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return <AppNavigator/>;
}

