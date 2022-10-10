import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Game } from "./components/Game";
import { Keyboard } from "./components/Keyboard";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Game />
      </View>
    </SafeAreaProvider>
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
