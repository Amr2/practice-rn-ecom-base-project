import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import SplashScreen from "@/components/Common";

import { Provider } from "@ant-design/react-native";
import * as Haptics from 'expo-haptics'
import { Platform } from 'react-native'

export default function RootLayout() {
  return (
      <Provider 
      onHaptics={() => Platform.OS !== 'web' && Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
      >
        <SplashScreen>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </SplashScreen>
      </Provider>
  );
}
