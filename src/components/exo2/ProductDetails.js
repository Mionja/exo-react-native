import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

export const ProductDetails = ({ route }) => {
  const { product } = route.params;
  // const product =   {
  //   id: 1,
  //   title: "Comunity",
  //   image: "https://img.icons8.com/clouds/100/000000/groups.png",
  //   price: 124.711,
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
  //   rating: 2,
  // }
  const getStars = (rating) => {
    rating = Math.min(3, Math.max(0, rating));
    const filledStars = Array.from({ length: rating }, (_, i) => "★");
    const emptyStars = Array.from({ length: 3 - rating }, (_, i) => "☆");
    const stars = filledStars.concat(emptyStars);
    return stars.join(" ");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View>
        <Text style={styles.heading}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Price: {product.price}</Text>
        <Text style={styles.rating}>{getStars(product.rating)}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>comment</Text>
        </TouchableOpacity>
      </View>
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
    fontWeight: "bold",
    marginBottom: 16,
  },
  listItem: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  rating: {
    color: "orange",
    marginTop: 5,
    marginBottom: 16,
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
    display: "block",
    alignItems: "center",
  },
});