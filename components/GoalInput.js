import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Your course goal!"
        onChangeText={goalInputText}
        value={enteredGoalText}
      />
      <Button title="ADD Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
