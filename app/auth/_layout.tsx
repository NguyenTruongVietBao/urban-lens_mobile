import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen
        name="register-model"
        options={{ presentation: "modal", title: "Register New" }}
      />
    </Stack>
  );
}
