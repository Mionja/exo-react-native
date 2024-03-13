import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { cardEmojis } from "./CardLists";

export const Card2 = () => {
  const [cells, setCells] = useState({
    c0: { number: 9, family: "s" },
    c1: { number: 1, family: "h" },
    c2: { number: 2, family: "d" },
    c3: { number: 3, family: "c" },
    c4: { number: 4, family: "h" },
    c5: { number: 5, family: "d" },
    c6: { number: 6, family: "s" },
    c7: { number: 7, family: "h" },
  });

  const handleButtonClick = () => {
    const updatedCells = { ...cells };

    for (const key in updatedCells) {
      if (Object.hasOwnProperty.call(updatedCells, key)) {
        const cell = updatedCells[key];
        switch (cell.number) {
          case 1:
            cell.number = 7;
            break;
          case 10:
            cell.number = "Jack";
            break;
          case "Jack":
            cell.number = "Queen";
            break;
          case "Queen":
            cell.number = "King";
            break;
          case "King":
            cell.number = 1;
            break;
          default:
            if (cell.number < 10 && cell.number > 1) {
              cell.number += 1;
            }
            break;
        }
      }
    }

    setCells(updatedCells);
  };
  const handleCardClick = (id) => {
    const updatedCells = { ...cells };

    switch (updatedCells[id].family) {
      case "s": // pique trèfle
        updatedCells[id].family = "c";
        break;
      case "h": // coeur pique
        updatedCells[id].family = "s";
        break;
      case "d": // carreau coeur
        updatedCells[id].family = "h";
        break;
      case "c": // trèfle carreau
        updatedCells[id].family = "d";
        break;
      default:
        break;
    }

    setCells(updatedCells);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.topLeft]}
          onPress={() => handleCardClick("c0")}
        >
          <Text style={styles.buttonText}>
            {/* C0 */}
            {cardEmojis[cells.c0.number][cells.c0.family]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.top]}
          onPress={() => handleCardClick("c1")}
        >
          <Text style={styles.buttonText}>
            {/* C1 */}
            {cardEmojis[cells.c1.number][cells.c1.family]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.topRight]}
          onPress={() => handleCardClick("c2")}
        >
          <Text style={styles.buttonText}>
            {/* C2 */}
            {cardEmojis[cells.c2.number][cells.c2.family]}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.right]}
          onPress={() => handleCardClick("c7")}
        >
          <Text style={styles.buttonText}>
            {/* C7 */}
            {cardEmojis[cells.c7.number][cells.c7.family]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleButtonClick}
          style={[styles.button, styles.center]}
        >
          {/* <Text style={styles.buttonText}>Center</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.left]}
          onPress={() => handleCardClick("c3")}
        >
          <Text style={styles.buttonText}>
            {/* C3 */}
            {cardEmojis[cells.c3.number][cells.c3.family]}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.bottomLeft]}
          onPress={() => handleCardClick("c6")}
        >
          <Text style={styles.buttonText}>
            {/* C6 */}
            {cardEmojis[cells.c6.number][cells.c6.family]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bottom]}
          onPress={() => handleCardClick("c5")}
        >
          <Text style={styles.buttonText}>
            {/* C5 */}
            {cardEmojis[cells.c5.number][cells.c5.family]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.bottomRight]}
          onPress={() => handleCardClick("c4")}
        >
          <Text style={styles.buttonText}>
            {/* C4 */}
            {cardEmojis[cells.c4.number][cells.c4.family]}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  button: {
    width: "6rem",
    height: "7rem",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: "6rem",
  },
  topLeft: {
    borderTopLeftRadius: 5,
  },
  topRight: {
    borderTopRightRadius: 5,
  },
  bottomLeft: {
    borderBottomLeftRadius: 5,
  },
  bottomRight: {
    borderBottomRightRadius: 5,
  },
  top: {
    borderTopWidth: 0,
  },
  right: {
    borderRightWidth: 0,
  },
  bottom: {
    borderBottomWidth: 0,
  },
  left: {
    borderLeftWidth: 0,
  },
  center: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "red",
    borderRadius: "5px",
  },
});
