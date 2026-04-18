import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { getTasks, saveTasks, Task } from "../storage/taskStorage";

export default function Add() {
  const [title, setTitle] = useState("");
  const [taskId, setTaskId] = useState<number>(1);

  useFocusEffect(
     useCallback(()=>{
        const loadId = async () => {
        const tasks = await getTasks();

        const newId =
            tasks.length > 0
            ? tasks[tasks.length - 1].id + 1
            : 1;

        setTaskId(newId);
        };

        loadId();
    }, [])
);

  const save = async () => {
    const tasks = await getTasks();

    const newTask: Task = {
      id: taskId, 
      title: title,
      status: "Pendiente",
    };

    const updatedTasks = [...tasks, newTask];

    await saveTasks(updatedTasks);
    setTitle("");
    router.back();
  };

  return (
    <View style={{ padding: 20 }}>
      
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Nueva tarea #{taskId}
      </Text>

      <TextInput
        placeholder="Título de la tarea"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Button title="Guardar" onPress={save} />
    </View>
  );
}