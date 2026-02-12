import { FlatList, Text, View } from "react-native";
import PostCard from "../../components/PostCard";
import { posts } from "../../data";

export default function Index() {
  return (
    <View className="flex-1 bg-gray-100 px-4 pt-4">
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text className="text-2xl px-3 font-bold mb-6 text-gray-900">
            Latest Posts
          </Text>
        }
      />
    </View>
  );
}