import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";
import { Details } from "../screen/Detail";
import { SvgXml } from "react-native-svg";
import { NavigatorRoutes } from "../enum";
import { Bag } from "../screen/Bag";
import { MyTabs } from "./Bottom";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigatorRoutes.Bottom} component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen
        name={NavigatorRoutes.Bag}
        component={Bag}
        options={{
          // headerShown: false,
          header: ({ navigation }) => (
            <View className="flex flex-row relative h-[110px] items-end border-b-2 border-b-[#EAEAEA]">
              <TouchableOpacity className="p-[15] w-[24] h-[24] bg-black" onPress={() => navigation.navigate(NavigatorRoutes.Home)}>
                <SvgXml xml={backIcon} width={24} height={24} />
              </TouchableOpacity>
              <Text className="w-full text-center text-[18px] font-medium leading-[20px] py-[18] ">My Bag</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen name={NavigatorRoutes.Detail} component={Details} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

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
