import { NavigationContainer } from "@react-navigation/native";
import { MyTabs, SplashScreen } from "./src";
import { NumberBag } from "./src/context/BagProducts";
import MyStack from "./src/navigator/MyStack";

export default function App() {
  return (
    <NavigationContainer>
      <NumberBag>
        {/* <SplashScreen /> */}
        <MyStack />
      </NumberBag>
    </NavigationContainer>
  );
}
