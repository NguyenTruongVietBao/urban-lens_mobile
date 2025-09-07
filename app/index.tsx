import ThemeToggle from "@/components/theme-toggle";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-mMedium text-2xl">
        Welcome to Expo + Tailwind CSS + TypeScript! Bảo
      </Text>
      <Text className="font-mRegular text-base">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/login" style={{ marginTop: 20 }}>
        Go to about
      </Link>
      <ThemeToggle />
      {/* [
        "@rnmapbox/maps",
        {
          "RNMapboxMapsDownloadToken": "sk.eyJ1IjoiYmFyb25uMDIwNCIsImEiOiJjbWY3MWR3bGUwYXRmMmtzaGRlNG45MXhsIn0.H6s6hjS2ICxv3Kt8uxWbKg",
          "RNMapboxMapsVersion": "11.0.0"
        }
      ], */}
    </View>
  );
}
