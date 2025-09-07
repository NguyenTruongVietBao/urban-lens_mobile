import React from "react";
import { useWindowDimensions } from "react-native";

import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  index: number;
  x: SharedValue<number>;
};

export default function OnboardingDot({ index, x }: Props) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const animatedDotStyle = useAnimatedStyle(() => {
    const dotAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [10, 20, 10],
      Extrapolation.CLAMP
    );
    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );
    return { width: dotAnimation, opacity: opacityAnimation };
  });

  const animatedColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0 * SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ["#005b4f", "#1e2169", "#f15937"]
    );
    return { backgroundColor };
  });

  return (
    <Animated.View
      className="w-3 h-3 rounded-full mx-2"
      style={[animatedDotStyle, animatedColorStyle]}
    />
  );
}
