import React, { useState } from "react";
import { Image, FlatList, Dimensions, View, SafeAreaView, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const numColumns = 4;
const tileSize = screenWidth / numColumns;

const imageArr = new Array(11).fill("http://placeimg.com/640/360/tech");

function renderItem({ item }) {
  return <Image 
    source={{ uri: item }} 
    style={{ height: tileSize , width: tileSize }} 
  />;
}

export default function App() {
  const [images, setImages] = useState(imageArr);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <FlatList 
          data={images} 
          renderItem={renderItem} 
          ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
          numColumns={4} 
          key={4}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  inputContainer: {
    width: screenWidth
  }
});
