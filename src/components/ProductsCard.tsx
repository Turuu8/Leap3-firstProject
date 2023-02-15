import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

export const ProductsCard = ({ lists }) => {
  return (
    <View>
      <SvgXml className="w-[160px] h-[185px] rounded" xml={lists.xml} />
      <Text className="text-[#2D2A2B] text-[16px] leading-[20px] font-medium pt-[10] pb-[2]">{lists.name}</Text>
      <Text className="text-[#2D2A2B] text-[13px] leading-[20px] font-light ">{lists.price}</Text>
    </View>
  );
};
