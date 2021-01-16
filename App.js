import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from "./components/CarItem";
import CarsList from "./components/CarsList";
import Header from "./components/Header";
// import CarItem from "./components/CarItem/index";


export default function App() 
{
  return (
    <View style={styles.container}>
      {/* <CarItem name={"Model 3"} tagline={"Order Online For"} taglineCTA={"Touchless Delivery"} image={require("./assets/images/Model3.jpeg")} /> */}
      <Header />
      <CarsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
