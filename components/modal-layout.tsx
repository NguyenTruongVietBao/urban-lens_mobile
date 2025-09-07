import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000040",
      }}
    >
      <Link href={"/auth/login"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={{
          width: "90%",
          height: "80%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
}
