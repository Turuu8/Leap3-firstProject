import { NavigationProp, Route, useNavigation } from "@react-navigation/native";
import { Dispatch, SetStateAction } from "react";
import { Pressable, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { useNumber } from "../context/BagProducts";
import { NavigatorRoutes } from "../enum";
import { StackNavigationProp } from "@react-navigation/stack";

export const ProductsCard = ({ lists }: ProductsCardPropsType) => {
  const { navigate } = useNavigation();
  const { setDetail } = useNumber() as { setDetail: Dispatch<SetStateAction<ListsType[]>> };
  return (
    <Pressable
      onPress={() => {
        navigate(NavigatorRoutes.Detail as never);
        setDetail([lists]);
      }}
    >
      <SvgXml className="w-[160px] h-[185px] rounded" xml={lists?.xml} />
      <Text className="text-[#2D2A2B] text-[16px] leading-[20px] font-medium pt-[10] pb-[2]">{lists.name}</Text>
      <Text className="text-[#2D2A2B] text-[13px] leading-[20px] font-light ">{lists.price}</Text>
    </Pressable>
  );
};

export type ListsType = { xml: string; name: string; price: string };

type ProductsCardPropsType = {
  lists: ListsType;
};
