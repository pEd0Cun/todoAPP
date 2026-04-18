import { Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export default function CustomButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "blue",
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "white", textAlign: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}