import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";

export const Bag = () => {
  return (
    <View>
      <View className="flex flex-row relative w-full">
        <TouchableOpacity className="absolute left-[15px]">
          <SvgXml xml={backIcon} width={24} height={24} />
        </TouchableOpacity>
        <Text className="w-full">My Bag</Text>
      </View>
    </View>
  );
};

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
