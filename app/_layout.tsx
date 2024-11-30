import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import SplashScreen from "@/components/Common";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light"><SplashScreen>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </SplashScreen></GluestackUIProvider>
  );
}
