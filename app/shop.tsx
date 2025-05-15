import { Text, View } from "react-native";
import "../global.css";

export default function Stories() {
  const items = [
    {
      name: "cursor",
      incNum: "1",
    }
  ]
  return (
    <View className="items-center">
      <Text className="text-5xl text-blue-500">shop</Text>
    </View>
  );
}