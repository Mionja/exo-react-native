// import { Exo1 } from './src/components/Exo1';
import { ProductList } from "./src/components/exo2/ProductList";
import { ProductDetails } from "./src/components/exo2/ProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <Exo1 />
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text style={styles.navigationTitle}>Product Navigation</Text>
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navigation: {
    backgroundColor: "#0066ff",
    padding: 10,
  },
  navigationTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
});