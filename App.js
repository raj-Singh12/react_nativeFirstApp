import { StatusBar } from 'expo-status-bar';
import { TextInput, Text, View, Button } from 'react-native';
import styles from './assets/StyleSheets';
import { useState } from 'react';

export default function App() {
  const [entredGoalText, setEnteredGoalText] = useState('');
  const [courseGoal, setcourseGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
  function addGoaHandler() {
    setcourseGoal([])
  }
  return (
    <View style={styles.container}>
      <View style={styles.Row}>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={goalInputHandler}
        />
        <Button
          onPress={addGoaHandler}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <hr style={styles.hr} />
      <Text style={styles.GoalTitle}>List of Goal...</Text>
      <StatusBar style="auto" />
    </View>
  );
}