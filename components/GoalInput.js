import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputText(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }

  function addGoalHandler() {
    if (enteredGoalText != "") {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    } else {
      alert("Insert a Goal");
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={goalInputText}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
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
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
