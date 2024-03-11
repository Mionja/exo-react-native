import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const Exo1 = () => {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setClicks(clicks + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setClicks(clicks + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.countText}>{count}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleDecrement}>
            <Text style={styles.buttonText}>➖</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleIncrement}>
            <Text style={styles.buttonText}>➕</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.clickCountText}>You clicked {clicks} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  content: {
    alignItems: "center",
  },
  countText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  buttons: { display: "flex", flexDirection: "row" },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "blue",
  },
  clickCountText: {
    marginTop: 20,
    fontSize: 16,
    color: "white",
  },
});
