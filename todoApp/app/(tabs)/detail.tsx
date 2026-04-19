import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { getTasks, saveTasks } from "../storage/taskStorage";

export default function Detail() {
  const params = useLocalSearchParams();

  const task = params.task ? JSON.parse(params.task as string) : null;

  const [status, setStatus] = useState(task?.status || "Pendiente");

  const changeStatus = async () => {
    if (!task) return;

    const tasks = await getTasks();

    const updated = tasks.map((t: any) =>
      t.id === task.id
        ? {
            ...t,
            status: status === "Pendiente" ? "Completada" : "Pendiente",
          }
        : t
    );

    const newStatus =
      status === "Pendiente" ? "Completada" : "Pendiente";

    setStatus(newStatus);
    await saveTasks(updated);
  };

  if (!task) {
    return (
      <View>
        <Text>Error: no se recibió la tarea</Text>
        <Button title="Volver" onPress={() => router.back()} />
      </View>
    );
  }

  
 return (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    }}
  >
    <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
      {task.title}
    </Text>

    <Text style={{ fontSize: 18, marginBottom: 20 }}>
      Estado: {status}
    </Text>

    <View
      style={{
        backgroundColor: "#4CAF50",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ color: "white" }} onPress={changeStatus}>
        Cambiar estado
      </Text>
    </View>


    <View
      style={{
        backgroundColor: "#2196F3",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "white" }} onPress={() => router.back()}>
        Volver
      </Text>
    </View>
  </View>
);
}