import { bottomTabBag, bottomTabHome, bottomTabOrder, bottomTabProfile, bottomTabScan, HeaderIcon } from "../../assets";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { NavigatorRoutes } from "../components/enum";
import ProfileScreen from "../screen/Profile";
import OrderScreen from "../screen/Order";
import { SvgXml } from "react-native-svg";
import HomeScreen from "../screen/Home";
import ScanScreen from "../screen/Scan";

const Tab = createBottomTabNavigator();

const active = "#D3A762";
const inActive = "#838383";

export const MyTabs = () => {
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
                  console.log("bag");
                }}
              >
                <SvgXml xml={bottomTabBag} width={20} height={20} />
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
