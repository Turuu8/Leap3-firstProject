import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { ListsType } from "../components/ProductsCard";
import { useNumber } from "../context/BagProducts";
import { Image, ScrollView, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { closeIcon } from "../../assets";
import { BottomBigBtn } from "../components";

export const Bag = () => {
  const { bag, bagNumber } = useNumber() as { bag: ListsType[]; bagNumber: number };
  console.log(bag);

  const Checkout = () => {
    console.log("checkout");
  };
  return (
    <>
      <ScrollView>
        <View className="pt-[20] px-[15] ">
          <Text className="font-medium text-[16px]">Order items {`(${bagNumber})`}</Text>
          <View>
            {bag[0] === undefined ? null : (
              <FlatList
                scrollEnabled={false}
                data={bag}
                renderItem={({ item }) => (
                  <>
                    <View className="pt-[20] flex flex-row gap-[16] justify-between border-b-[1px] border-[#EAEAEA] pb-[20]">
                      <Image className="w-[96px] h-[96px] rounded" source={item.image} />
                      <View className="mr-[100]">
                        <Text className="text-[16px] font-medium">{item.name}</Text>
                        <Text className="text-[13px] font-light">{item.price}</Text>
                      </View>
                      <TouchableOpacity
                        className=""
                        onPress={() => {
                          console.log("jj");
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
      </ScrollView>
      <BottomBigBtn func={Checkout} title="Check out $7.30" />
    </>
  );
};
