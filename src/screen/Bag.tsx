import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { BackIcon } from "../../assets";
import { NavigatorRoutes } from "../enum";

export const Bag = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      {/* <View className="flex flex-row relative h-[110px] items-end border-b-2 border-b-[#EAEAEA]">
        <TouchableOpacity className="" onPress={() => console.log("h")}>
          <SvgXml xml={backIcon} width={24} height={24} />
        </TouchableOpacity>
        <Text className="w-full text-center text-[18px] font-medium leading-[20px] py-[18] ">My Bag</Text>
      </View> */}
    </View>
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
