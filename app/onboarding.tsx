import OnboardingButton from "@/components/onboarding/onboarding-button";
import OnboardingItem from "@/components/onboarding/onboarding-item";
import OnboardingPagination from "@/components/onboarding/onboarding-pagination";
import { OnboardingData, onboardingData } from "@/lib/constants";
import React from "react";
import { View, ViewToken } from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

export default function Onboarding() {
  const flatlistRef = useAnimatedRef<Animated.FlatList<OnboardingData>>();
  const x = useSharedValue(0);
  //pagination
  const flatlistIndex = useSharedValue(0);
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0].index !== null) {
      flatlistIndex.value = viewableItems[0].index;
    }
  };
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View className="flex-1">
      <Animated.FlatList
        ref={flatlistRef}
        onScroll={onScroll}
        data={onboardingData}
        renderItem={({ item, index }) => (
          <OnboardingItem item={item} index={index} x={x} />
        )}
        keyExtractor={(item) => item.id.toString()}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
          minimumViewTime: 300,
        }}
      />
      <View className="absolute bottom-20 left-0 right-0 mx-8 py-8 flex-row items-center justify-between">
        <OnboardingPagination data={onboardingData} x={x} />
        <OnboardingButton
          flatlistRef={flatlistRef}
          flatlistIndex={flatlistIndex}
          dataLength={onboardingData.length}
          x={x}
        />
      </View>
    </View>
  );
}
