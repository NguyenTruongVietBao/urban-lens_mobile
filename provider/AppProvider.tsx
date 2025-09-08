import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { QueryProvider } from "./QueryProvider";

interface AppProviderProps {
  children: React.ReactNode;
}
const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#31D0AA", marginTop: 20 }}
      text1Style={{
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "MontserratBold",
      }}
      text2Style={{
        fontSize: 14,
        fontFamily: "MontserratSemiBold",
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "#FF4D4D", marginTop: 20 }}
      text1Style={{
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "MontserratBold",
      }}
      text2Style={{
        fontSize: 14,
        fontFamily: "MontserratSemiBold",
      }}
    />
  ),
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  return (
    <QueryProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {children}
        <Toast config={toastConfig} />
      </ThemeProvider>
    </QueryProvider>
  );
};
