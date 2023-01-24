import { StatusBar } from 'expo-status-bar';
import { TextInput, Text, View, Button } from 'react-native';
import styles from './assets/StyleSheets';
import { useState } from 'react';

export default function App() {
  const [entredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoaHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      entredGoalText
    ]);
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
      {/* <View>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View> */}

      <View>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}