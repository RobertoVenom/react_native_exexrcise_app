import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const exerciseData = [
  { id: '1', title: 'Push-ups', type: 'Repetition' },
  { id: '2', title: 'Running', type: 'Duration' },
  // Add other exercises here
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <Button
      title={item.title}
      onPress={() =>
        navigation.navigate(item.type === 'Repetition' ? 'RepetitionExercise' : 'DurationExercise', {
          exercise: item,
        })
      }
    />
  );

  return (
    <View>
      <Text>Exercise List</Text>
      <FlatList
        data={exerciseData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
