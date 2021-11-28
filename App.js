import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

const App = () => {
  const [inputText, setInputText] = useState(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setInputText(value)}
        value={inputText}
        placeholder="useless placeholder"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
