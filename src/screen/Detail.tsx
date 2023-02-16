import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { useNumber } from "../context/BagProducts";

export const Details = () => {
  const { detail, setBagNumber } = useNumber();
  return (
    <>
      <ScrollView>
        <View>
          <SvgXml xml={detail?.xml} width="100%" />
        </View>
        <Text>{detail?.name}</Text>
      </ScrollView>
      <View className="px-[15] pt-[13] pb-[35] bg-white">
        <TouchableOpacity
          className="w-full h-[45] bg-[#D3A762] rounded flex items-center justify-center"
          onPress={() => setBagNumber((p: number) => p + 1)}
        >
          <Text className="text-[14px] font-medium text-[#fff]">Add to bag</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
