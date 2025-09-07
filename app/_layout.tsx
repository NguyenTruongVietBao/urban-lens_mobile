import { AppProvider } from "@/provider/AppProvider";
import { useFonts } from "expo-font";
import { Stack, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "../global.css";

// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const segment = useSegments();
  console.log("🚀 ~ Current route:", segment);

  const [loaded] = useFonts({
    MontserratBlack: require("../assets/fonts/Montserrat-Black.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratThin: require("../assets/fonts/Montserrat-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}
