import { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import ImagePicker from "../ui/ImagePicker";
import LocationPicker from "../ui/LocationPicker";

function PlaceForm() {
  const [enteredText, setEnteredText] = useState("");
  function titleTextHandler(enteredText) {
    setEnteredText(enteredText);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChange={titleTextHandler}
          value={enteredText}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    padding: 24,
    flex: 1,
  },
  label: {
    color: Colors.primary500,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    backgroundColor: Colors.primary100,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
    fontSize: 16,
  },
});
