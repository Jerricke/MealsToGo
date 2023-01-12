import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listBox}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBox: {
    padding: 16,
    backgroundColor: "powderblue",
  },
  listBox: {
    flex: 1,
    padding: 16,
    // backgroundColor: "blue",
  },
});
