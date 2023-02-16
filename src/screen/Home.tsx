import { FlatList, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { favouriteList, productsType, SeasonalDrinks } from "../utils";
import { ProductsCard } from "../components/ProductsCard";
import { ArrowRight, SpecialImage } from "../../assets";
import { LinearGradient } from "expo-linear-gradient";
import { FlatGrid } from "react-native-super-grid";
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
              console.log("Arrow");
            }}
          >
            <SvgXml xml={ArrowRight} width={24} height={24} />
          </TouchableOpacity>
        </View>
        {/* -------------  Special products   ------------ */}
        <View className="p-[15]">
          <View className="relative">
            <LinearGradient colors={["#1f3932", "#12221e"]} className="w-full h-[205] flex items-center flex-row rounded">
              <SvgXml className="absolute right-[30] bottom-[20]" xml={SpecialImage} />
              <Text className="text-[#fff] text-[20px] w-[172px] leading-[32px] font-[700] ml-[23px]">
                HERE’S TO MORE SUNNY DAYS AHEAD!
              </Text>
            </LinearGradient>
          </View>
        </View>
        {/* -------------  Favourite products  ------------ */}
        <View className="p-[15]">
          <Text className="text-[#2D2A2B] text-[16px] leading-[20px] font-medium pb-[15]">Your favourite</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={favouriteList}
            renderItem={({ item }) => (
              <View className="pr-[12]">
                <ProductsCard lists={item} />
              </View>
            )}
            keyExtractor={(item) => item.xml}
            horizontal
          />
        </View>
        {/* -------------  Seasonal special products  ------------ */}
        <View className="p-[15]">
          <Text className="text-[#2D2A2B] text-[20px] leading-[20px] font-bold  pb-[25]">Seasonal drinks</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={SeasonalDrinks}
            renderItem={({ item }) => (
              <View className="pr-[12]">
                <ProductsCard lists={item} />
              </View>
            )}
            keyExtractor={(item) => item.xml}
            horizontal
          />
        </View>
        {/* -------------  Type choose bottoms ------------ */}
        <View className="pt-[20] pl-[15] pr-[15] flex flex-row justify-between">
          {productsType.map((el, i) => (
            <Pressable key={i} onPress={() => console.log("hello")}>
              <Text className="text-[16px] font-normal leading-[19]">{el}</Text>
            </Pressable>
          ))}
        </View>
        <View className="p-[15] flex">
          {/* {productsDrinks?.map((el, i) => (
            <View key={i}>
              <ProductsCard lists={el} />
            </View>
          ))} */}
          {/* <FlatGrid
            scrollEnabled={false}
            data={productsDrinks}
            renderItem={({ item }) => (
              <View>
                <ProductsCard lists={item} />
              </View>
            )}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
