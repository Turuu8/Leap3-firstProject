import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { BackIcon, DetailBagIcon } from "../../assets";
import { ListsType } from "../components/ProductsCard";
import { useNumber } from "../context/BagProducts";
import { Dispatch, SetStateAction, useState } from "react";
import { SvgXml } from "react-native-svg";
import { NavigatorRoutes } from "../enum";
import { cupSize } from "../utils";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";

export const Details = () => {
  const { detail, bagNumber, favourite, setBagNumber, setBag, setFavourite } = useNumber() as ContextType;
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View>
          <Image source={detail[0]?.image} style={{ width: "100%", height: 340 }} />
          <LinearGradient colors={["transparent", "#00000054"]} className="w-full h-[340px] absolute"></LinearGradient>
        </View>
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
          <SvgXml xml={DetailBagIcon} width={45} height={45} />
        </TouchableOpacity>
        {/* favourite btn */}
        <TouchableOpacity
          className="absolute right-[20] top-[290]"
          onPress={() => {
            if (detail[0]?.image !== favourite[0]?.image) {
              setFavourite((prev) => [...prev, ...detail]);
            }
          }}
        >
          <Text className="text-[#fff] text-[16px] opacity-[0.85]">Liked</Text>
        </TouchableOpacity>
        <View className="p-[15] ">
          <Text className="font-medium text-[16px] pb-[15]">Size options</Text>
          <View className="border-b-[#D3A762] border-b-[1.5px] opacity-[0.2] " />
        </View>
        <View className="flex px-[15]">
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
        <View className="p-[15] mt-[50]">
          <Text className="text-[16px] font-medium pb-[16]">Flavor changes</Text>
          <View className="border-b-[#D3A762] border-b-[1.5px] opacity-[0.2] " />
          <View>
            <Text className="pt-[35] text-[12p] font-normal text-[#969495]">Milk</Text>
            {/* <Picker selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)} mode="dropdown">
              <Picker.Item label="Standard" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker> */}
          </View>
        </View>
      </ScrollView>

      {/* -------------  Add to bag   ------------ */}
      <View className="px-[15] pt-[13] pb-[35] bg-white">
        <TouchableOpacity
          className="w-full h-[45] bg-[#D3A762] rounded flex items-center justify-center"
          onPress={() => {
            setBagNumber((p: number) => p + 1);
            setBag((prev) => [...prev, ...detail]);
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
  favourite: ListsType[];
  setFavourite: Dispatch<SetStateAction<ListsType[]>>;
  bagNumber: number;
};
