import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowRight, SpecialImage } from "../../assets";
import { SvgXml } from "react-native-svg";

const HomeScreen = () => {
  return (
    <View className="h-[100%] bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="h-[60] bg-[#2D2A2B] p-[15] flex flex-row justify-between items-center fl">
          <View>
            <Text className="text-[#fff] opacity-70 text-[10px] leading-[13px]">Pick-up store</Text>
            <Text className="text-[#fff] text-[14px] leading-[18px] mt-[3px]">Barkley village * 0.5 mi</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log("arrow");
            }}
          >
            <SvgXml xml={ArrowRight} width={24} height={24} />
          </TouchableOpacity>
        </View>
        <View className="p-[15]">
          <View className="bg-[#1E3932] from-[#1E3932] h-[205] rounded relative flex items-center flex-row">
            <SvgXml className="absolute right-[30] bottom-[20]" xml={SpecialImage} />
            <Text className="text-[#fff] text-[20px] w-[172px] leading-[32px] font-[700] ml-[23px]">HERE’S TO MORE SUNNY DAYS AHEAD!</Text>
          </View>
        </View>
        <Text className="h-[100vh]">HomeScreen</Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
