import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function DurationExercise({ route, navigation }) {
  const { exercise } = route.params;
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  const resetTimer = () => {
    setTimer(0);
    setIsActive(false);
  };

  return (
    <View>
      <Text>{exercise.title}</Text>
      <Text>Timer: {timer}s</Text>
      <Button title={isActive ? 'Stop Timer' : 'Start Timer'} onPress={() => setIsActive(!isActive)} />
      <Button title="Reset Timer" onPress={resetTimer} />
      <Button
        title="Suggested Exercise"
        onPress={() => navigation.navigate(exercise.type === 'Repetition' ? 'RepetitionExercise' : 'DurationExercise', {
          exercise: { id: '4', title: 'Suggested Duration Exercise', type: 'Duration' }, // Update this with the suggested exercise from the array
        })}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DurationExercise;
