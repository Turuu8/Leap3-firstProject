import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { BackIcon, closeIcon } from "../../assets";
import { NavigatorRoutes } from "../enum";
import { useNumber } from "../context/BagProducts";
import { ListsType } from "../components/ProductsCard";
import { SvgXml } from "react-native-svg";

export const Bag = () => {
  const { bag, bagNumber } = useNumber() as { bag: ListsType[]; bagNumber: number };
  console.log(bag);
  return (
    // <ScrollView>
    <View className="pt-[20] px-[15] ">
      <Text className="font-medium text-[16px]">Order items {`(${bagNumber})`}</Text>
      <View>
        {bag[0] === undefined ? null : (
          <FlatList
            data={bag}
            renderItem={({ item }) => (
              <>
                <View className="pt-[20] flex flex-row gap-[16]">
                  <Image className="w-[96px] h-[96px] rounded" source={item.image} />
                  <View>
                    <Text className="text-[16px] font-medium">{item.name}</Text>
                    <Text className="text-[13px] font-light">{item.price}</Text>
                  </View>
                  <TouchableOpacity
                    className=" pl-[100] w-[20]"
                    onPress={() => {
                      console.log("jjj");
                    }}
                  >
                    <SvgXml xml={closeIcon} width={20} height={20} />
                  </TouchableOpacity>
                </View>
              </>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
    // </ScrollView>
  );
};

// navigate(NavigatorRoutes.Home as never)

const backIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_220_2459)">
<path d="M10.828 12L15.778 16.95L14.364 18.364L7.99995 12L14.364 5.63601L15.778 7.05001L10.828 12Z" fill="#2D2A2B"/>
</g>
<defs>
<clipPath id="clip0_220_2459">
<rect x="24" y="24" width="24" height="24" rx="2" transform="rotate(180 24 24)" fill="white"/>
</clipPath>
</defs>
</svg>
`;
