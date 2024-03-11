import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export const Calculatrice = () => {
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const handleInput = (value) => {
    setResult(result + value);
  };

  const handleOperation = (op) => {
    setOperation(op);
    setResult(result + op);
  };

  const handleEqual = () => {
    try {
      const evaluated = eval(result);
      setResult(evaluated.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setResult("");
    setOperation("");
  };

  const handleDel = () => {
    setResult(result.slice(0, -1));
  };
  const operations = ["+", "-", "*", "/", "%"];
  const buttons = [
    ["AC", "DEL", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    ["0", "00", ".", "="],
  ];
  const getButtonStyle = (value) => {
    if (value === "AC" || value === "DEL") {
      return styles.clearButton;
    } else if (operations.includes(value)) {
      return styles.operationButton;
    } else {
      return styles.numberButton;
    }
  };

  const { width } = Dimensions.get("window");
  const buttonSize = width / 5;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
          {result}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((value, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={[
                  styles.button,
                  getButtonStyle(value),
                  { width: buttonSize, height: buttonSize },
                ]}
                onPress={() => {
                  if (value === "AC") {
                    handleClear();
                  } else if (value === "DEL") {
                    handleDel();
                  } else if (value === "=") {
                    handleEqual();
                  } else if (operations.includes(value)) {
                    handleOperation(value);
                  } else {
                    handleInput(value.toString());
                  }
                }}
              >
                <Text style={styles.buttonText}>{value || " "}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "gray",
  },
  resultContainer: {
    width: "90%",
    minHeight: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
    marginBottom: 20,
    flexShrink: 1,
  },
  result: {
    fontSize: 36,
    color: "white",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  buttonsContainer: {
    width: "90%",
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    padding: 2,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  clearButton: {
    backgroundColor: "#262222",
  },
  operationButton: {
    backgroundColor: "#b76807",
  },
  numberButton: {
    backgroundColor: "#474343",
  },
});
