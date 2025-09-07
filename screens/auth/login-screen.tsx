import ThemeToggle from "@/components/theme-toggle";
import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>LoginScreen </Text>
      <Link asChild href="/auth/register-model">
        <Button title="Sign Up" />
      </Link>
      <ThemeToggle />
    </View>
  );
}
