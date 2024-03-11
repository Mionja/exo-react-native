import { Exo1 } from './src/components/Exo1';
import { ProductList } from "./src/components/exo2/ProductList";
import { ProductDetails } from "./src/components/exo2/ProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Calculatrice } from "./src/components/calculatrice/Calculatrice";
import { HomePage } from './src/HomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Calculator" component={Calculatrice} />
        <Stack.Screen name="Count" component={Exo1} />
        <Stack.Screen name="Products" component={ProductList} />
        <Stack.Screen name="Product details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
