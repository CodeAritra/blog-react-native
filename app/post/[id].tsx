import { View, Text, ScrollView, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { posts } from "../../data";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BlogPage() {
    const { id } = useLocalSearchParams();
    const router = useRouter()

    const post = posts.find((item) => item.id === id);

    if (!post) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text className="text-gray-500">Post not found</Text>
            </View>
        );
    }

    return (
        <SafeAreaView className="flex-1">
            <ScrollView
                className="flex-1 bg-gray-100 px-2"
                contentContainerStyle={{ padding: 20 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Back Button */}
                <Pressable onPress={() => router.back()} className="mb-6">
                    <Text className="text-blue-600 text-base">← Back</Text>
                </Pressable>

                <Text className="text-2xl font-bold text-gray-900 mb-2">
                    {post.title}
                </Text>

                <Text className="text-sm text-gray-400 mb-6">
                    {post.author} • {post.date}
                </Text>

                <Text className="text-base text-gray-800 leading-7">
                    {post.content}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}
