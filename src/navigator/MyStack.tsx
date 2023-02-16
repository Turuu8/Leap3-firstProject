import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorRoutes } from "../enum";
import { Bag } from "../screen/Bag";
import { Details } from "../screen/Detail";
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
          title: "My Bag",
        }}
      />
      <Stack.Screen name={NavigatorRoutes.Detail} component={Details} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
