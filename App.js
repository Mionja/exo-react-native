import { Exo1 } from './src/components/Exo1';
import { ProductList } from "./src/components/exo2/ProductList";
import { ProductDetails } from "./src/components/exo2/ProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Calculatrice } from "./src/components/calculatrice/Calculatrice";
import { HomePage } from './src/HomePage';
import { Card1 } from './src/components/cards/Card1';
import { Card2 } from './src/components/cards/Card2';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import UserApplication from './src/components/UserApplication';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Calculator" component={Calculatrice} />
          <Stack.Screen name="Count" component={Exo1} />
          <Stack.Screen name="Products" component={ProductList} />
          <Stack.Screen name="Product details" component={ProductDetails} />
          <Stack.Screen name="Flip card" component={Card1} />
          <Stack.Screen name="Card 2" component={Card2} />
          <Stack.Screen name="User Application" component={UserApplication} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
