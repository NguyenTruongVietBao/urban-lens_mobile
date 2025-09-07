import { OnboardingData } from "@/lib/constants";
import React from "react";
import { View } from "react-native";
import { SharedValue } from "react-native-reanimated";
import OnboardingDot from "./onboarding-dot";

type Props = {
  data: OnboardingData[];
  x: SharedValue<number>;
};

export default function OnboardingPagination({ data, x }: Props) {
  return (
    <View className="flex-row h-10 items-center justify-start space-x-2">
      {data.map((_, index) => (
        <OnboardingDot key={index} index={index} x={x} />
      ))}
    </View>
  );
}
