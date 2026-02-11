import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import "../global.css"

export default function Index() {
  const router = useRouter()
  return (
    <View
      className="flex-1 justify-center items-center"
    >
      <TouchableOpacity className="bg-[#111] p-4 rounded-xl" onPress={() => router.push("/login")}>
        <Text className="text-[#fff] text-xl font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
}