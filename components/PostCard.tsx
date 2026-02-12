import { useRouter } from "expo-router";
import { Text, Pressable } from "react-native";

export type Post = {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
};

export default function PostCard({ post }: { post: Post }) {
    const router = useRouter()
    return (
        <Pressable
            className="bg-white rounded-2xl p-5 mb-4 shadow-sm"
            onPress={() => router.push({
                pathname: "/post/[id]",
                params: { id: post.id },
            })}
        >
            <Text className="text-lg font-semibold text-gray-900 mb-2">
                {post.title}
            </Text>

            <Text className="text-gray-600 mb-3">
                {post.content}
            </Text>

            <Text className="text-xs text-gray-400">
                {post.author} • {post.date}
            </Text>
        </Pressable>
    );
}
