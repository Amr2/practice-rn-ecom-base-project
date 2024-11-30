import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import SplashScreen from "@/components/Common";

export default function RootLayout() {
  return (
    <SplashScreen>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </SplashScreen>
  );
}
