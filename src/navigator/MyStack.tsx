import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorRoutes } from "../enum";
import { Bag } from "../screen/Bag";
import { Details } from "../screen/Detail";
import { MyTabs } from "./Bottom";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bottom" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen
        name={NavigatorRoutes.Bag}
        component={Bag}
        options={{
          title: "My Bag",
        }}
      />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
}
