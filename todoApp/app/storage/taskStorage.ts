import AsyncStorage from "@react-native-async-storage/async-storage";
// Clave donde se guardan las tareas
const KEY = "TASKS";

// Tipo de tarea (puedes importarlo si tienes types.ts)
export interface Task {
  id: number;
  title: string;
  status: "Pendiente" | "Completada";
}

// Guardar tareas
export const saveTasks = async (tasks: Task[]): Promise<void> => {
  try {
    const json = JSON.stringify(tasks);
    await AsyncStorage.setItem(KEY, json);
  } catch (error) {
    console.log("Error guardando tareas", error);
  }
};

// Obtener tareas
export const getTasks = async (): Promise<Task[]> => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error obteniendo tareas", error);
    return [];
  }
};

// (Opcional) limpiar todas las tareas
export const clearTasks = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) {
    console.log("Error limpiando tareas", error);
  }
};