import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

export default function App() {
  return (
    <>
      <SafeAreaView
        style={[styles.container, { marginTop: StatusBar.currentHeight }]}
      >
        <View style={styles.searchBox}>
          <Text> search </Text>
        </View>
        <View style={styles.listBox}>
          <Text> list </Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    padding: 16,
    backgroundColor: "green",
  },
  listBox: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
