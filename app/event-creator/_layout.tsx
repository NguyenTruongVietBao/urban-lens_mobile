import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function EventCreatorLayout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(drawer)" options={{ title: "Overview" }} />
        <Stack.Screen name="[id]" />
      </Stack>
    </GestureHandlerRootView>
  );
}
