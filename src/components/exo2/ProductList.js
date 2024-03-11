import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const products = [
  {
    id: 1,
    title: "Pixel",
    image: "https://img.icons8.com/clouds/100/000000/groups.png",
    price: 124.711,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
    rating: 2,
  },
  {
    id: 2,
    title: "Laptop",
    image: "https://img.icons8.com/color/100/000000/real-estate.png",
    price: 234.722,
    description:
      "Lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
    rating: 3,
  },
  {
    id: 3,
    title: "Tablet",
    image: "https://img.icons8.com/color/100/000000/find-matching-job.png",
    price: 324.723,
    description:
      "Lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
    rating: 2,
  },
  {
    id: 4,
    title: "Personal",
    image: "https://img.icons8.com/clouds/100/000000/employee-card.png",
    price: 154.573,
    description:
      "Lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
    rating: 3,
  },
  {
    id: 5,
    title: "For sale",
    image: "https://img.icons8.com/color/100/000000/land-sales.png",
    price: 124.678,
    description:
      "Lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
    rating: 1,
  },
];

export const ProductList = ({ navigation }) => {
  const getStars = (rating) => {
    rating = Math.min(3, Math.max(0, rating));
    const filledStars = Array.from({ length: rating }, (_, i) => "★");
    const emptyStars = Array.from({ length: 3 - rating }, (_, i) => "☆");
    const stars = filledStars.concat(emptyStars);
    return stars.join(" ");
  };
  const renderProductCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>Price: {item.price}</Text>
        <Text style={styles.rating}>{getStars(item.rating)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <FlatList
        style={styles.contentList}
        columnWrapperStyle={styles.listContainer}
        data={products}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    backgroundColor: "#fff",
  },
  // navigation: {
  //   backgroundColor: "#0066ff",
  //   padding: 10,
  // },
  // navigationTitle: {
  //   color: "#fff",
  //   fontWeight: "bold",
  // },
  contentList: {
    margin: 1,
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ebf0f7",
  },

  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: "center",
    color: "black",
    justifyContent: "text-align",
  },
  price: {
    fontWeight: "bold",
  },
  rating: {
    color: "orange",
    marginTop: 5,
    fontSize: 18,
  },
});

