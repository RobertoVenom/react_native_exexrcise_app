import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function RepetitionExercise({ route, navigation }) {
  const { exercise } = route.params;
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  return (
    <View>
      <Text>{exercise.title}</Text>
      <Text>Repetitions: {count}</Text>
      <Button title="Increase" onPress={increaseCount} />
      <Button title="Reset" onPress={resetCount} />
      <Button
        title="Suggested Exercise"
        onPress={() => navigation.navigate(exercise.type === 'Repetition' ? 'RepetitionExercise' : 'DurationExercise', {
          exercise: { id: '3', title: 'Suggested Exercise', type: 'Duration' }, // Update this with the suggested exercise from the array
        })}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
