import { Text, TouchableOpacity, View } from "react-native";

export const BottomBigBtn = ({ func, title }: { func: Function; title: string }) => {
  return (
    <View className="px-[15] pt-[13] pb-[35] bg-white">
      <TouchableOpacity
        className="w-full h-[45] bg-[#D3A762] rounded flex items-center justify-center"
        onPress={() => {
          func();
        }}
      >
        <Text className="text-[14px] font-medium text-[#fff]">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
