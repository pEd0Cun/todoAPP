import { Text, TouchableOpacity, View } from "react-native";
import { Task } from "../app/storage/taskStorage";

interface Props {
  task: Task;
  onPress: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onPress, onDelete }: Props) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      

      <TouchableOpacity onPress={onPress}>
        <Text style={{ fontSize: 16 }}>
          {task.id} - {task.title} - {task.status}
        </Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={onDelete}>
        <Text style={{ color: "red", marginTop: 5 }}>
          Eliminar
        </Text>
      </TouchableOpacity>

    </View>
  );
}