import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TaskListItem from "./src/components/TaskListItem";
import TaskList from "./src/components/TaskList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TaskList />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3E62",
  },
  innerContainer: {
    padding: 10,
  },
});
