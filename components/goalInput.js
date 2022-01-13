import React, {useState} from 'react';
import {View, TextInput, Modal, StyleSheet, Button} from 'react-native';

const GoalInput = props => {
  const [newGoal, setGoal] = useState('');
  const goalInputHandler = enteredText => {
    setGoal(enteredText);
  };
  return (
    <Modal animationType="fade" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={newGoal}
        />
        <Button title="ADD" onPress={() => props.onAddGoal(newGoal)} />
        <Button title="CANCEL" onPress={() => props.closeModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {borderColor: 'black', borderWidth: 1, width: '80%', marginBottom: 10},
});

export default GoalInput;
