import { NavigationContainer } from "@react-navigation/native";
import { MyTabs, SplashScreen } from "./src";

export default function App() {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <MyTabs />
    </NavigationContainer>
  );
}
