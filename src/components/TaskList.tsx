import { View, Text, StyleSheet, FlatList } from "react-native";
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

  const renderList = ({ item }: { item: Task }) => {
    return <TaskListItem task={item} />;
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B192C",
    padding: 20,
    borderRadius: 5,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
  },
});
