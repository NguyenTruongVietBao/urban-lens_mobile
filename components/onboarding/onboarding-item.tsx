import { OnboardingData } from "@/lib/constants";
import LottieView from "lottie-react-native";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  item: OnboardingData;
  index: number;
  x: SharedValue<number>;
};

export default function OnboardingItem({ item, index, x }: Props) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolation.CLAMP
    );
    return { transform: [{ translateY: opacity }] };
  });
  const circleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolation.CLAMP
    );
    return { transform: [{ scale }] };
  });

  return (
    <View
      className="flex-1 items-center justify-around mb-32"
      style={{ width: SCREEN_WIDTH }}
    >
      <View
        className={`absolute bottom-0 top-0 left-0 right-0 items-center justify-end`}
      >
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              backgroundColor: item.backgroundColor,
              borderRadius: SCREEN_WIDTH / 2,
            },
            circleStyle,
          ]}
        />
      </View>
      <Animated.View style={lottieAnimationStyle}>
        <LottieView
          source={item.animation}
          autoPlay
          loop
          style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH * 0.9 }}
        />
      </Animated.View>
      <Text
        className={`text-center mb-3 mx-5 font-mSemiBold text-5xl`}
        style={{ color: item.textColor }}
      >
        {item.text}
      </Text>
    </View>
  );
}
