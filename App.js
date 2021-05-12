import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image , ImageBackground} from 'react-native';
import Home from "./components/Home";

const image = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAADFBMVEUXGC0ZGi8WFywYGC6WQdN7AAABIklEQVR4nO3cwRKCIBQFUJH//+fKrTljzryQ6zn7HG4BwktZFgDKtLfRbSiVnm9Jz7f00Q1gLukD4jOlraMbUam1njLqD2Lsu2hdp22t8CZ//sJ196nKgEcXXvcDMH6lAcAsZrklfRZ8Fz8o4C20Fr0jAQAAgF/Msp2/TEAAAACAOvGVifSAakvFwr/e+O4TH5AkR6+lPGWej48Z/9TrAwKObgEAPFL8anh7Pb2HHGjwTekJA3eQng8AAAAASsTX1dLz5f+Bnp4PmFv+JJwdsMcvEwAAALi1+H1pfED1awAAAGAW8YWa+IBs4n/n+IBqqgAAAOfFbxIFnF18QPi//GEVH1D9EwCgQvxCWcDZxQcEroqfHp5wfGl8wNFNAAAA8r0AdBoA5uH+JS0AAAAASUVORK5CYII=" };

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});
