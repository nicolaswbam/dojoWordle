import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Keyboard } from "./components/Keyboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View></View>
      <Keyboard
        onDelPress={() => {}}
        onEnterPress={() => {}}
        onKeyPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
