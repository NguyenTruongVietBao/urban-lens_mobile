import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailPage() {
  const { id } = useLocalSearchParams();
  console.log(id);

  return (
    <SafeAreaView>
      <Text>DetailPage</Text>
      <Text>ID: {id}</Text>
    </SafeAreaView>
  );
}
