import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Appearance, useColorScheme } from "react-native";
import { QueryProvider } from "./QueryProvider";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  Appearance.setColorScheme("light");
  return (
    <QueryProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
};
