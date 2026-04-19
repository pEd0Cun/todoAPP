import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { getTasks, saveTasks, Task } from "../storage/taskStorage";

export default function Add() {
  const [title, setTitle] = useState("");
  const [taskId, setTaskId] = useState<number>(1);
  const [status, setStatus] = useState<"Pendiente"  | "Completada">("Pendiente");
  
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
      status: status,
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
      <Text style={{ marginTop: 10 }}>Estado:</Text>
<View style={{ flexDirection: "row", marginBottom: 20 }}>
  
 
  <View
    style={{
      backgroundColor: status === "Pendiente" ? "#f39c12" : "#ccc",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    }}
  >
    <Text
      style={{ color: "white" }}
      onPress={() => setStatus("Pendiente")}
    >
      Pendiente
    </Text>
  </View>

  <View style={{ width: 10 }} />

 
  <View
    style={{
      backgroundColor: status === "Completada" ? "#2ecc71" : "#ccc",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    }}
  >
    <Text
      style={{ color: "white" }}
      onPress={() => setStatus("Completada")}
    >
      Completada
    </Text>
  </View>

</View>
      <Button title="Guardar" onPress={save} />
    </View>
  );
}