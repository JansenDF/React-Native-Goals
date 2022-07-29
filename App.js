import { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function onDeleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function resetHandler() {
    setCourseGoals([]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} onChangeInput={goalInputHandler} />
      <Text style={styles.goalList}>List of Goals</Text>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={onDeleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      <View style={styles.resetButton}>
        <Button title="Reset" color={"red"} onPress={resetHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
  resetButton: {
    marginBottom: 20,
  },
  goalList: {
    margin: 8,
  },
});
