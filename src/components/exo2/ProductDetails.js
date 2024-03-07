import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ProductDetails = ({ route }) => {
  const { title, description, price, rating } = route.params;
  // const { title, description, price, rating } = { id: '5', title: 'Floppy Drive', description: 'Legacy storage device', price: 10, rating: 2 };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>Price: {price}</Text>
      <Text>Rating: {Array(rating).fill('⭐').join('')}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>comment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listItem: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});