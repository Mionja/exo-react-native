import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { cardEmojis } from "./CardLists";

export const Card1 = () => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [rotation] = useState(new Animated.Value(0));

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(rotation, {
      toValue: isFlipped ? 180 : 0,
      duration: 350,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 2],
    outputRange: ["0deg", "4deg"],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCard}>
        <Animated.Text
          style={[
            styles.card,
            { transform: [{ rotateY: interpolatedRotation }] },
          ]}
        >
          {isFlipped ? cardEmojis["Flipped"] : cardEmojis["Queen"]["h"]}
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    fontSize: '15rem',
    alignItems: "center",
    shadowColor: "#000",
  },
});
