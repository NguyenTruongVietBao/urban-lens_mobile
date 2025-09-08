import { AnimationObject } from "lottie-react-native";

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

export const onboardingData: OnboardingData[] = [
  {
    id: 1,
    animation: require("../assets/animations/urban-lottie-1.json"),
    text: "Lorem Ipsum dolor sit amet",
    textColor: "#fff",
    backgroundColor: "#5265FF",
  },
  {
    id: 2,
    animation: require("../assets//animations/urban-lottie-2.json"),
    text: "Lorem Ipsum dolor sit amet",
    textColor: "#fff",
    backgroundColor: "#FE7474",
  },
  {
    id: 3,
    animation: require("../assets//animations/urban-lottie-3.json"),
    text: "Lorem Ipsum dolor sit amet",
    textColor: "#fff",
    backgroundColor: "#31D0AA",
  },
];
