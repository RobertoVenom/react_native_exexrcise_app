import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default function DurationExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

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
      <Text>Time: {time}s</Text>

      <Button title="Start" onPress={() => setRunning(true)} />
      <Button title="Stop" onPress={() => setRunning(false)} />
      <Button title="Reset" onPress={() => setTime(0)} />

      <Button title="Suggested Exercise" onPress={goToSuggested} />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DurationExercise;
