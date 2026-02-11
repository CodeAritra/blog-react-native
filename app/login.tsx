import { View, Text, KeyboardAvoidingView, TextInput, Pressable, StyleSheet, ActivityIndicator, Platform } from 'react-native'
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
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <View style={styles.container}>

          {/* header */}
          <View style={styles.header}>
            <Text style={styles.title}>RaMan Recipe App</Text>
            <Text style={styles.subtitle}>Sign In to continue</Text>
          </View>

          {/* form */}
          <View style={styles.form}>
            <TextInput
              placeholder="email"
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
              value={form.email}
              onChangeText={(text) => handleChange("email", text)}
            />

            <TextInput
              placeholder="password"
              secureTextEntry
              style={styles.input}
              value={form.password}
              onChangeText={(text) => handleChange("password", text)}
            />

            <Pressable style={styles.button} onPress={handleClick}>
              {loading ? (
              <ActivityIndicator color="rgb(59, 134, 255)" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
            </Pressable>
          </View>

        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 36,
    fontWeight: 600
  },
  subtitle: {
    fontSize: 20,
  },
  form: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "rgb(59, 134, 255, 0.1)",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: "rgb(59, 134, 255)"
  }
})