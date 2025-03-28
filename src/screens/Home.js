import React from 'react';
import { FlatList, View } from 'react-native';
import { Button } from 'react-native-elements';

const Home = ({ navigation }) => {
  const exercises = [
    { id: '1', name: 'Push-ups', type: 'repetition', suggestedExercise: 'Squats' },
    { id: '2', name: 'Squats', type: 'repetition', suggestedExercise: 'Push-ups' },
    { id: '3', name: 'Running', type: 'duration', suggestedExercise: 'Jumping Jacks' },
    { id: '4', name: 'Jumping Jacks', type: 'duration', suggestedExercise: 'Running' },
  ];

  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      onPress={() => navigation.navigate(item.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise', {
        exercise: item,
        exercises,
      })}
    />
  );

  return (
    <View>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
