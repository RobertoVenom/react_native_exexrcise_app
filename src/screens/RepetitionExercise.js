import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [count, setCount] = useState(0);

  const goToSuggested = () => {
    const next = exercises.find(e => e.id === exercise.suggested);
    if (next.type === 'reps') {
      navigation.push('Reps', { exercise: next, exercises });
    } else {
      navigation.push('Duration', { exercise: next, exercises });
    }
  };

  return (
    <View>
      <Text>{exercise.name}</Text>
      <Text>Count: {count}</Text>

      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
      <Button title="Suggested Exercise" onPress={goToSuggested} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default RepetitionExercise;
