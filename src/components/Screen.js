import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Screen({ children, style }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: "#F7F4FB" }, style]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View
          style={{
            flex: 1,
            paddingBottom: Math.max(insets.bottom, 12),
          }}
        >
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
