import { bottomTabBag, bottomTabHome, bottomTabOrder, bottomTabProfile, bottomTabScan, HeaderIcon } from "../../assets";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useNumber } from "../context/BagProducts";
import { Dispatch, SetStateAction } from "react";
import ProfileScreen from "../screen/Profile";
import OrderScreen from "../screen/Order";
import { SvgXml } from "react-native-svg";
import { NavigatorRoutes } from "../enum";
import HomeScreen from "../screen/Home";
import ScanScreen from "../screen/Scan";

const Tab = createBottomTabNavigator();

const active = "#D3A762";
const inActive = "#838383";

export const MyTabs = () => {
  const { bagNumber, setBagNumber } = useNumber() as { bagNumber: number; setBagNumber: Dispatch<SetStateAction<number>> };
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: active,
        tabBarInactiveTintColor: inActive,
        headerShown: true,
        tabBarStyle: styles.bottomTabShadow,
        header: () => {
          return (
            <View className="h-[110] flex items-center justify-center bg-[#fff] pt-[48] shadow relative">
              <SvgXml xml={HeaderIcon} width={170} height={25} />
              <TouchableOpacity
                className="absolute right-[16] bottom-[16]"
                onPress={() => {
                  navigation.navigate(NavigatorRoutes.Bag as never);
                }}
              >
                <SvgXml xml={bottomTabBag} width={20} height={20} />
                {bagNumber === 0 ? null : (
                  <View className="absolute w-[16] h-[16] bg-[#D3A762] rounded-full flex items-center justify-center left-[-5] top-[-5]">
                    <Text className="text-[#fff] text-[10px]">{bagNumber}</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          );
        },
      }}
    >
      {Screens.map((it, i) => (
        <Tab.Screen
          key={i}
          name={it.name}
          component={it.component}
          options={{
            title: it.name,
            tabBarIcon: ({ size, focused }) => {
              return <SvgXml xml={it.xml(focused ? active : inActive)} width={size} height={size} />;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Screens = [
  {
    name: NavigatorRoutes.Home,
    component: HomeScreen,
    xml: bottomTabHome,
  },
  {
    name: NavigatorRoutes.Scan,
    component: ScanScreen,
    xml: bottomTabScan,
  },
  {
    name: NavigatorRoutes.Order,
    component: OrderScreen,
    xml: bottomTabOrder,
  },
  {
    name: NavigatorRoutes.Profile,
    component: ProfileScreen,
    xml: bottomTabProfile,
  },
];

const styles = StyleSheet.create({
  bottomTabShadow: {
    shadowOffset: { width: -1, height: -3 },
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 3,
    borderTopWidth: 0,
  },
});
