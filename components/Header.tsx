// import logo from ""
import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'

export default function Header({ isLogin }: any) {
    const router = useRouter()
    return (
        <View className='w-full px-8 py-5 flex-row justify-between'>
            {/* logo */}
            <Pressable onPress={() => router.push("./")}>
                <Image
                    source={require("../assets/react-logo.png")}
                    className="w-8 h-8"
                    resizeMode="contain"
                />
            </Pressable>

            {/* buttons */}
            <View className='flex-row gap-5'>
                {isLogin ?
                    <>
                        <Pressable>
                            <Text className='font-medium'>Create</Text>
                        </Pressable>

                        <Pressable>
                            <Text className='font-medium'>Logout</Text>
                        </Pressable>

                    </> :
                    <Pressable onPress={() => router.push("/login")}>
                        <Text className='font-medium'>Login</Text>
                    </Pressable>}
            </View>

        </View>
    )
}