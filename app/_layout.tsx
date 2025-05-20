import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router";
import "../global.css";
import { CounterProvider } from "../components/CounterContext";

export default function RootLayout() {
  return (
  <CounterProvider>
    <Tabs screenOptions={{
      tabBarStyle: {
        paddingTop: 5
      }}}>
      <Tabs.Screen name="settings" options={{ title: "",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        )
      }}/>
      <Tabs.Screen name="index" options={{ title: "",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="walk-outline" size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="shop" options={{ title: "",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="cart-outline" size={size} color={color} />
        )
      }}/>
    </Tabs>
  </CounterProvider>
  )
}