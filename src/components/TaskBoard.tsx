import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TaskList from "./TaskList";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const TaskBoard = () => {
  return (
    <View style={styles.innerContainer}>
      <LinearGradient
        colors={["#1E3E62", "#0B192C"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView edges={["left", "right", "top"]}>
        <TaskList />
      </SafeAreaView>
    </View>
  );
};

export default TaskBoard;

const styles = StyleSheet.create({
  innerContainer: {
    padding: 10,
    flex: 1,
  },
});
