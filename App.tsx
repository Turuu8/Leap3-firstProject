import { NavigationContainer } from "@react-navigation/native";
import { NumberBag } from "./src/context/BagProducts";
import MyStack from "./src/navigator/MyStack";

export default function App() {
  return (
    <NavigationContainer>
      <NumberBag>
        <MyStack />
      </NumberBag>
    </NavigationContainer>
  );
}
