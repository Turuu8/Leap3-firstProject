import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { useNumber } from "../context/BagProducts";

export const ProductsCard = ({ lists }) => {
  const navigation = useNavigation();
  const { setDetail } = useNumber();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Detail");
        setDetail(lists);
      }}
    >
      <SvgXml className="w-[160px] h-[185px] rounded" xml={lists.xml} />
      <Text className="text-[#2D2A2B] text-[16px] leading-[20px] font-medium pt-[10] pb-[2]">{lists.name}</Text>
      <Text className="text-[#2D2A2B] text-[13px] leading-[20px] font-light ">{lists.price}</Text>
    </Pressable>
  );
};
