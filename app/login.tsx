import { View, Text, KeyboardAvoidingView, TextInput, Pressable, ActivityIndicator, Platform } from 'react-native'
import React, { useState } from 'react'

export default function Login() {
  const [form, setForm] = useState({
    email: "", password: ""
  })
  const [loading, setloading] = useState(false)

  const handleChange = (key: 'email' | 'password', text: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: text
    }))
  }

  const handleClick = () => {
    console.log("clicked")
    console.log("form = ", form)
  }

  return (
    <KeyboardAvoidingView
      className='flex-1'
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className='flex-1 px-10 justify-center'>

        {/* header */}
        <View className='items-center mb-5' >
          <Text className='text-4xl font-bold'>RaMan Recipe App</Text>
          <Text className='text-2xl'>Sign In to continue</Text>
        </View>

        {/* form */}
        <View>
          <TextInput
            placeholder="email"
            autoCapitalize="none"
            keyboardType="email-address"
            className='border rounded-xl p-4 text-lg mb-2 '
            value={form.email}
            onChangeText={(text) => handleChange("email", text)}
          />

          <TextInput
            placeholder="password"
            secureTextEntry
            className="border rounded-xl p-4 text-lg mb-2"
            value={form.password}
            onChangeText={(text) => handleChange("password", text)}
          />

          <Pressable className='bg-[rgba(59,134,255,0.1)] p-3 items-center rounded-xl' onPress={handleClick}>
            {loading ? (
              <ActivityIndicator color="rgb(59, 134, 255)" />
            ) : (
              <Text className='text-lg text-[rgb(59,134,255)]'>Login</Text>
            )}
          </Pressable>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}