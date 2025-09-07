import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>EventCreatorHomeScreen</Text>
      <Link href="./event-creator/123">Product 1</Link>
      <Link href="./profile">Go to Profile</Link>
    </SafeAreaView>
  );
}
