import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { BackIcon, DetailBagIcon } from "../../assets";
import { ListsType } from "../components/ProductsCard";
import { useNumber } from "../context/BagProducts";
import { Dispatch, SetStateAction } from "react";
import { SvgXml } from "react-native-svg";
import { NavigatorRoutes } from "../enum";
import { cupSize } from "../utils";

export const Details = () => {
  const { detail, bagNumber, setBagNumber, setBag } = useNumber() as ContextType;

  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View>
          <SvgXml xml={detail[0]?.xml} width="100%" />
        </View>
        <View className="p-[15]">
          <Text className="font-medium text-[16px] pb-[15]">Size options</Text>
          <View className="border-b-[#D3A762] border-b-[1.5px] opacity-[0.2] " />
        </View>
        <View className="flex flex-row justify-between">
          <FlatList
            data={cupSize}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            horizontal
            renderItem={({ item }) => (
              <View>
                <SvgXml xml={item.xml} />
                <Text>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
      {/* back btn */}
      <TouchableOpacity className="absolute left-[15] top-[60]" onPress={() => navigation.navigate(NavigatorRoutes.Home as never)}>
        <SvgXml xml={BackIcon} width={40} height={40} />
      </TouchableOpacity>
      {/* bag btn */}
      <TouchableOpacity className="absolute right-[15] top-[60]" onPress={() => navigation.navigate(NavigatorRoutes.Bag as never)}>
        {bagNumber === 0 ? null : (
          <View className="absolute w-[16] h-[16] bg-[#D3A762] rounded-full flex items-center justify-center left-0 top-0">
            <Text className="text-[#fff] text-[10px]">{bagNumber}</Text>
          </View>
        )}
        <SvgXml xml={DetailBagIcon} width={40} height={40} />
      </TouchableOpacity>
      {/* -------------  Add to bag   ------------ */}
      <View className="px-[15] pt-[13] pb-[35] bg-white">
        <TouchableOpacity
          className="w-full h-[45] bg-[#D3A762] rounded flex items-center justify-center"
          onPress={() => {
            setBagNumber((p: number) => p + 1);
            setBag(detail);
          }}
        >
          <Text className="text-[14px] font-medium text-[#fff]">Add to bag</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

type ContextType = {
  setBagNumber: Dispatch<SetStateAction<number>>;
  setBag: Dispatch<SetStateAction<ListsType[] | never[]>>;
  detail: ListsType[];
  bagNumber: number;
};
