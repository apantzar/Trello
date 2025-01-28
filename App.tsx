import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TaskBoard from "./src/components/TaskBoard";

export default function App() {
  return (
    <View style={styles.container}>
      <TaskBoard />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
