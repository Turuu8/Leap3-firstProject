import { bottomTabHome, bottomTabOrder, bottomTabProfile, bottomTabScan } from "../../assets";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
    <Tab.Navigator>
      <Tab.Screen
        name={NavigatorRoutes.Home}
        component={HomeScreen}
        options={{
          title: NavigatorRoutes.Home,
          tabBarActiveTintColor: active,
          tabBarInactiveTintColor: inActive,
          tabBarIcon: ({ size, focused }) => {
            return <SvgXml xml={bottomTabHome(focused ? active : inActive)} width={size} height={size} />;
          },
        }}
      />
      <Tab.Screen
        name={NavigatorRoutes.Scan}
        component={ScanScreen}
        options={{
          title: NavigatorRoutes.Scan,
          tabBarActiveTintColor: active,
          tabBarInactiveTintColor: inActive,
          tabBarIcon: ({ size, focused }) => {
            return <SvgXml xml={bottomTabScan(focused ? active : inActive)} width={size} height={size} />;
          },
        }}
      />
      <Tab.Screen
        name={NavigatorRoutes.Order}
        component={OrderScreen}
        options={{
          title: NavigatorRoutes.Order,
          tabBarActiveTintColor: active,
          tabBarInactiveTintColor: inActive,
          tabBarIcon: ({ size, focused }) => {
            return <SvgXml xml={bottomTabOrder(focused ? active : inActive)} width={size} height={size} />;
          },
        }}
      />
      <Tab.Screen
        name={NavigatorRoutes.Profile}
        component={ProfileScreen}
        options={{
          title: NavigatorRoutes.Profile,
          tabBarActiveTintColor: active,
          tabBarInactiveTintColor: inActive,
          tabBarIcon: ({ size, focused }) => <SvgXml xml={bottomTabProfile(focused ? active : inActive)} width={size} height={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
