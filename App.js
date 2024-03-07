// import { Exo1 } from './src/components/Exo1';
import { ProductList } from "./src/components/exo2/ProductList";
import { ProductDetails } from "./src/components/exo2/ProductDetails";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <Exo1 />
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}