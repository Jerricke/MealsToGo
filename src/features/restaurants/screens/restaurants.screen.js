// import React from "react";
// import { Searchbar } from "react-native-paper";
// import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
// import styled from "styled-components/native";

// const SearchContainer = styled.View`
//   padding: ${(props) => props.theme.space[3]};
//   background-color: ${(props) => props.theme.colors.brand.primary};
// `;

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentheight && `margin-top: ${StatusBar.currentheight}px`}; sdf
// `;
// // && says that if "statusbar.currenheight" has a value, then execute _____

// const ListBox = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
//   background-color: ${(props) => props.theme.colors.brand.secondary};
// `;
// export const RestaurantsScreen = () => {
//   return (
//     <SafeArea>
//       <SearchContainer>
//         <Searchbar />
//       </SearchContainer>
//       <ListBox>
//         <RestaurantInfoCard />
//       </ListBox>
//     </SafeArea>
//   );
// };

import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
