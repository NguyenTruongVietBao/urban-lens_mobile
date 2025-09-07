import { handleRouteBack } from "@/lib/utils";
import React from "react";
import { Button, Text, View } from "react-native";

export default function RegisterModel() {
  return (
    <View>
      <Text>Sign Up Modal</Text>
      <Button title="Close" onPress={handleRouteBack} />
    </View>
  );
}
