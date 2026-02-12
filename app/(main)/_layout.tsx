import { Stack } from "expo-router";
import Header from "../../components/Header";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainLayout() {
  return (
    <View className="flex-1 bg-white">

      {/* Safe area only for header top */}
      <SafeAreaView edges={["top"]} className="bg-gray-100">
        <Header isLogin={false} />
      </SafeAreaView>

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}
