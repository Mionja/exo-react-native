import { View, Text } from "react-native";

export default function Flexbox() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", flex: 1 , height:'150px'}}>
        <View style={{ flex: 1, backgroundColor: "cyan" }}>
          <Text
            style={{ textAlign: "center", fontStyle: "bold", fontSize: "40px" }}
          >
            1
          </Text>
        </View>
        <View style={{ flex: 2, backgroundColor: "magenta" }}>
          <Text
            style={{ textAlign: "center", fontStyle: "bold", fontSize: "40px" }}
          >
            2
          </Text>
        </View>
        <View style={{ flex: 3, backgroundColor: "yellow" }}>
          <Text
            style={{ textAlign: "center", fontStyle: "bold", fontSize: "40px" }}
          >
            3
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "red", height:'150px' }}>
        <Text
          style={{ textAlign: "center", fontStyle: "bold", fontSize: "40px" }}
        >
          4
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "green", height:'150px' }}>
        <Text
          style={{ textAlign: "center", fontStyle: "bold", fontSize: "40px" }}
        >
          5
        </Text>
      </View>
      <View style={{ flexDirection: "row", flex: 6 }}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Text
            style={{ textAlign: "center", fontStyle: "bold", fontSize: "40px" }}
          >
            6
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "blue" }}>
          <Text
            style={{ textAlign: "center", fontStyle: "bold", fontSize: "40px" }}
          >
            7
          </Text>
        </View>
      </View>
    </View>
  );
}