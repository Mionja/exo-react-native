import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const DATA = [
  { id: '1', title: 'pixel 1', description: 'Pixel is the most featureful phone ever', price: 800, rating: 3 },
  { id: '2', title: 'laptop', description: 'Laptop is most productive development tool', price: 2000, rating: 3 },
  { id: '3', title: 'tablet', description: 'Tablet is the most useful device ever for meeting', price: 1500, rating: 3 },
  { id: '4', title: 'pen drive', description: 'iPhone is the stylest phone ever', price: 100, rating: 3 },
  { id: '5', title: 'Floppy Drive', description: 'Legacy storage device', price: 10, rating: 2 },
];

export const ProductList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('ProductDetails', item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>Price: {item.price}</Text>
      <Text>Rating: {Array(item.rating).fill('⭐').join('')}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    backgroundColor: '#e4e4e4',
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