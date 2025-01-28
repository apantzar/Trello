import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Task } from "../types/task";

export default function TaskListItem({ task }: { task: Task }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.description}</Text>
      <AntDesign name="close" size={24} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
