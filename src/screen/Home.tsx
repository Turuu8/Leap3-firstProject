import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { ArrowRight } from "../../assets";

const HomeScreen = () => {
  return (
    <View className="h-[100%] bg-white">
      <ScrollView>
        <View className="h-[60] bg-[#2D2A2B] p-[15] flex flex-row justify-between items-center fl">
          <View>
            <Text className="text-[#fff] opacity-70 text-[10px] leading-[13px]">Pick-up store</Text>
            <Text className="text-[#fff] text-[14px] leading-[18px] mt-[3px]">Barkley village * 0.5 mi</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log(window.pageYOffset);
            }}
          >
            <SvgXml xml={ArrowRight} width={24} height={24} />
          </TouchableOpacity>
        </View>
        <Text className="h-[100vh]">HomeScreen</Text>
        <Text className="h-[100vh]">HomeScreen</Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
