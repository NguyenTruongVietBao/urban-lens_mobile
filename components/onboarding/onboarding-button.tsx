import { OnboardingData } from '@/lib/constants';
import { useAuthStore } from '@/stores/useAuthStore';
// import { useAuthStore } from "@/stores/useAuthStore";
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableWithoutFeedback, useWindowDimensions } from 'react-native';
import Animated, {
  AnimatedRef,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  flatlistRef: AnimatedRef<Animated.FlatList<OnboardingData>>;
  flatlistIndex: SharedValue<number>;
  dataLength: number;
  x: SharedValue<number>;
};

export default function OnboardingButton({
  flatlistRef,
  flatlistIndex,
  dataLength,
  x,
}: Props) {
  const router = useRouter();
  const { completeOnboarding } = useAuthStore();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      width:
        flatlistIndex.value === dataLength - 1
          ? withSpring(140)
          : withSpring(60),
      height: 60,
    };
  });

  const animatedColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0 * SCREEN_WIDTH, 1 * SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#31D0AA', '#fff', '#FE7474']
    );
    return { backgroundColor };
  });

  const iconsAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: 30,
      height: 30,
      opacity:
        flatlistIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatlistIndex.value === dataLength - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatlistIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatlistIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (flatlistIndex.value < dataLength - 1) {
          flatlistRef.current?.scrollToIndex({
            index: flatlistIndex.value + 1,
            animated: true,
          });
        } else {
          completeOnboarding();
          router.push('/auth/login');
        }
      }}
    >
      <Animated.View
        className='bg-black p-3 rounded-full justify-center items-center overflow-hidden w-14 h-14'
        style={[animatedColorStyle, buttonAnimatedStyle]}
      >
        <Animated.Text
          style={[textAnimatedStyle]}
          className='absolute font-mSemiBold text-white'
        >
          Get Started
        </Animated.Text>
        <Animated.View style={[iconsAnimatedStyle]} className='absolute'>
          <MaterialIcons name='navigate-next' size={30} color='black' />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
