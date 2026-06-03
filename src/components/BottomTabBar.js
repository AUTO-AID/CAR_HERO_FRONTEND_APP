import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";
import { t } from "../services/i18n";

export default function BottomTabBar({ lang = "ar", theme = "light", current, onChange }) {
  const insets = useSafeAreaInsets();
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;
  const isRtl = lang === "ar";

  const TABS = [
    { id: "home", label: t("tabHome", lang), icon: "🏠" },
    { id: "orders", label: t("tabOrders", lang), icon: "📦" },
    { id: "points", label: t("tabPoints", lang), icon: "⭐" },
    { id: "chats", label: t("tabChats", lang), icon: "💬" },
    { id: "profile", label: t("tabProfile", lang), icon: "👤" },
  ];

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom, 8),
          flexDirection: isRtl ? "row-reverse" : "row",
          backgroundColor: colors.navBg,
          borderColor: colors.border,
        },
      ]}
    >
      {TABS.map((tab) => {
        const active = current === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tab}
            onPress={() => onChange(tab.id)}
            activeOpacity={0.85}
          >
            <Text style={[styles.icon, active && styles.iconActive, { color: active ? colors.navActive : colors.navInactive }]}>
              {tab.icon}
            </Text>
            <Text
              style={[
                styles.label,
                active ? styles.labelActive : styles.labelInactive,
                { color: active ? colors.navActive : colors.muted },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
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
  label: { fontSize: 11, fontWeight: "700" },
  labelActive: { fontWeight: "900" },
  labelInactive: { fontWeight: "700" },
});
