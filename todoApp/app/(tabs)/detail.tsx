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
    <View>
      <Text>{task.title}</Text>
      <Text>{status}</Text>

      <Button title="Cambiar estado" onPress={changeStatus} />
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}