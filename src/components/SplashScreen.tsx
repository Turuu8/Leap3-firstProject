import { splashScreenLogo } from "../../assets/splash-logo";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";

export const SplashScreen = () => {
  return (
    <View className="bg-[#2D2A2B] h-[100vh] items-center justify-center">
      <SvgXml xml={splashScreenLogo} width="215px" />
    </View>
  );
};
