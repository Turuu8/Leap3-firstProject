import { splashScreenLogo } from "../../assets/splash-logo";
import { SvgXml } from "react-native-svg";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NavigatorRoutes } from "../enum";

export const SplashScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View className="bg-[#2D2A2B] h-full items-center justify-center gap-[10]">
      <SvgXml xml={splashScreenLogo} width="215px" />
      <View className="flex gap-[10]">
        <TextInput className="h-[40] w-[200] border-[0.5px] border-[#fff] text-[#fff] p-[10]" placeholder="User name" placeholderTextColor="#fff" />
        <TextInput className="h-[40] w-[200] border-[0.5px] border-[#fff] text-[#fff] p-[10]" placeholder="Password" placeholderTextColor="#fff" />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate(NavigatorRoutes.Bottom as never);
        }}
      >
        <View className="bg-[#fff] rounded ">
          <Text className="text-[#2D2A2B] py-[5] px-[15] font-bold text-[16px]">Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
