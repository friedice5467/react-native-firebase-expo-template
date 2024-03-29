import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import Background from "../components/Background";
import { Navigation } from "../model/types";
import { theme } from "../core/theme";
import {  auth } from "../config/firebaseConfig";

type Props = {
  navigation: Navigation;
};

const AuthLoadingScreen = ({ navigation }: Props) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.navigate("Dashboard");
    } else {
      // User is not logged in
      navigation.navigate("HomeScreen");
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(AuthLoadingScreen);