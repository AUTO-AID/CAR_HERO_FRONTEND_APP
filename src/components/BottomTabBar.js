// src/components/BottomTabBar.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../theme/colors";

const TABS = [
  { id: "home", label: "الرئيسية", icon: "🏠" },
  { id: "orders", label: "الطلبات", icon: "📦" },
  { id: "points", label: "النقاط", icon: "⭐" },
  { id: "chats", label: "المحادثات", icon: "💬" },
  { id: "profile", label: "الحساب", icon: "👤" },
];

export default function BottomTabBar({ current, onChange }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {TABS.map((tab) => {
        const active = current === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tab}
            onPress={() => onChange(tab.id)}
            activeOpacity={0.85}
          >
            <Text style={[styles.icon, active && styles.iconActive]}>{tab.icon}</Text>
            <Text style={[styles.label, active && styles.labelActive]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    borderTopWidth: 1,
    borderColor: "#E6DEFA",
    backgroundColor: "#FFFFFF",
    paddingTop: 6,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    paddingVertical: 6,
  },
  icon: { fontSize: 20, opacity: 0.7 },
  iconActive: { opacity: 1 },
  label: { fontSize: 11, color: "#777", fontWeight: "700" },
  labelActive: { color: COLORS.primary, fontWeight: "900" },
});
