import * as React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";

import { Video } from "expo-av";

/*const image = {
  uri:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAADFBMVEUXGC0ZGi8WFywYGC6WQdN7AAABIklEQVR4nO3cwRKCIBQFUJH//+fKrTljzryQ6zn7HG4BwktZFgDKtLfRbSiVnm9Jz7f00Q1gLukD4jOlraMbUam1njLqD2Lsu2hdp22t8CZ//sJ196nKgEcXXvcDMH6lAcAsZrklfRZ8Fz8o4C20Fr0jAQAAgF/Msp2/TEAAAACAOvGVifSAakvFwr/e+O4TH5AkR6+lPGWej48Z/9TrAwKObgEAPFL8anh7Pb2HHGjwTekJA3eQng8AAAAASsTX1dLz5f+Bnp4PmFv+JJwdsMcvEwAAALi1+H1pfED1awAAAGAW8YWa+IBs4n/n+IBqqgAAAOfFbxIFnF18QPi//GEVH1D9EwCgQvxCWcDZxQcEroqfHp5wfGl8wNFNAAAA8r0AdBoA5uH+JS0AAAAASUVORK5CYII=",
};*/

export default function Home() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/homepage-poster.jpg")}
        style={{ width: "100%", height: 505 }}
      >
        <Image
          source={require("./images/logo.jpg")}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 60,
            bottom: 0,
            width: 120,
            height: 50,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: 150,
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "left",
            marginRight: "auto",
            marginLeft: "auto",
            padding: 10,
          }}
        >
          {" "}
          Welcome!
        </Text>
        <TextInput
          placeholder="Search for new offer!"
          style={{
            top: 200,
            borderRadius: 13,
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            width: "90%",
            height: 40,
            backgroundColor: "#FFFFFF",
            padding: 10,
            marginRight: "auto",
            marginLeft: "auto",
            color:'black'
          }}
        ></TextInput>
        <View
        style={{
          flexDirection: "row",
          width: "90%",
          height: 150,
          backgroundColor: "white",
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: 30,
          top:230
        }}
      >
        <Text
          style={{
            position: "absolute",
            color: "gray",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "left",
            marginRight: "auto",
            marginLeft: "auto",
            padding: 10,
            top:50,
            left:10
          }}
        >
          {" "}
          Our Vision!
        </Text>
        <Video
        source={require("./images/homepage.mp4")}
        useNativeControls
        style={{
          width: "50%",
          height: "73%",
          top: 20,
          left:175,
          right:0,
          bottom: 0,
          borderRadius:20
        }}
      />
      </View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});


/* <Video
        source={require("./images/homepage.mp4")}
        useNativeControls
        style={{
          width: "100%",
          height: "26%",
          position: "absolute",
          top: 250,
          right: 0,
          left: 0,
          marginRight: "auto",
          marginLeft: "auto",
          bottom: 0,
        }}
      />*/