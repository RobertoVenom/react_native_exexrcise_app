import React from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { exercises } from '../data/exercises';

export default function Home({ navigation }) {

  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      onPress={() => {
        if (item.type === 'reps') {
          navigation.push('Reps', { exercise: item, exercises });
        } else {
          navigation.push('Duration', { exercise: item, exercises });
        }
      }}
      containerStyle={{ margin: 10 }}
    />
  );

  return (
    <View>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Home;
