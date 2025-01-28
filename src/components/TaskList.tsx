import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import TaskListItem from "./TaskListItem";
import { useState } from "react";
import { Task } from "../types/task";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      description: "First",
    },
    {
      description: "Second",
    },
    {
      description: "Third",
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const renderList = ({ item }: { item: Task }) => {
    return <TaskListItem task={item} />;
  };

  const createTask = () => {
    setTasks([...tasks, { description: newTask }]);

    setNewTask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>ToDo List</Text>

      {/* The list if tasks */}
      <FlatList
        data={tasks}
        renderItem={renderList}
        contentContainerStyle={{ gap: 5 }}
      />

      {/* New Task input */}
      <TextInput
        placeholder="New Task..."
        placeholderTextColor="gray"
        style={styles.input}
        onChangeText={setNewTask}
        value={newTask}
      />

      <Button title="Add Task" onPress={createTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B192C",
    padding: 20,
    borderRadius: 5,
    gap: 10,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
  },

  input: {
    color: "white",
    padding: 20,
    backgroundColor: "black",
    borderRadius: 5,
  },
});
