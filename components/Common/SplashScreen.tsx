import React from "react";
import { useFonts } from "expo-font";
import LogoComponent from "../svgs";
import useGlobleStore from "@/store";
import { Button, View } from "react-native";

const SplashScreen: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { globalLoading, updateGlobalLoading } = useGlobleStore(
    (state) => state
  );
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  React.useEffect(() => {
    let id = setTimeout(() => {
      updateGlobalLoading(false);
    }, 5000);
    return () => clearTimeout(id);
  }, [loaded]);

  return globalLoading ? (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Button onPress={() => updateGlobalLoading(false)} title="skip intro" />
      <LogoComponent />
    </View>
  ) : (
    children
  );
};

export default SplashScreen;
