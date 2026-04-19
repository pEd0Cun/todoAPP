import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import TaskItem from "../../components/TaskItem";
import { getTasks, saveTasks, Task } from "../storage/taskStorage";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useFocusEffect(
    
    useCallback(()=> {
    loadTasks();
    },[])
  );

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const deleteTask = async (id: number) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
    await saveTasks(newTasks);
  };

  return (
    
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        TODO LIST
      </Text>
        
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onPress={() =>
              router.push({
                pathname: "/detail",
                params: {
                  task: JSON.stringify(item), 
                },
              })
            }
            onDelete={() => deleteTask(item.id)}
          />
        )}
      />

      <Button title="Agregar" onPress={() => router.push("/add")} />
    </View>
  );
}