import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const GoalList = props => {
  return (
    <TouchableOpacity onPress={props.onDelete} style={styles.listItem}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalList;
