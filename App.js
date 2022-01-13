import React, {useState, Component} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalList from './components/goalList';
import GoalInput from './components/goalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAdd, setisAdd] = useState(false);
  const addNewGoal = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {key: Math.random().toString(), value: goalTitle},
    ]);
    setisAdd(false);
  };

  const closingModal = () => {
    setisAdd(false);
  };
  const deleteGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setisAdd(true)} />
      <GoalInput
        closeModal={closingModal}
        visible={isAdd}
        onAddGoal={addNewGoal}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={item => item.key}
        renderItem={itemData => (
          <GoalList
            onDelete={deleteGoal.bind(this, itemData.item.key)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
