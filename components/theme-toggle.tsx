import React, { useState } from "react";
import {
  Appearance,
  Button,
  Platform,
  useColorScheme,
  View,
} from "react-native";

export default function ThemeToggle() {
  const colorScheme = useColorScheme();
  const [scheme, setScheme] = useState(colorScheme);

  const toggleColorScheme = () => {
    if (Platform.OS !== "web") {
      const newColorScheme = scheme === "dark" ? "light" : "dark";
      Appearance.setColorScheme(newColorScheme);
      setScheme(newColorScheme);
    }
  };
  return (
    <View>
      <Button title="Toggle Theme" onPress={toggleColorScheme} />
    </View>
  );
}
