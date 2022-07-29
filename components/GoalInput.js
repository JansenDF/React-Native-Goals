import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputText(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }

  function addGoalHandler() {
    if (enteredGoalText != "") {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
      alert("Insert successfully!");
    } else {
      alert("Insert a Goal");
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={goalInputText}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    backgroundColor: "#311b6b",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
