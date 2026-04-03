import React from "react";
import { View, Text } from "react-native";
import { homeStyles } from "../styles/homeStyles";

export default function HomeHeader({ style }) {
  return (
    <View style={[homeStyles.header, style]}>
      <View style={homeStyles.headerTopRow}>
        <Text style={homeStyles.brand}>Car Help</Text>
        {/* مستقبلاً ممكن تحط أيقونة حساب/اشعارات هون */}
        <Text style={{ color: "#fff", opacity: 0.9 }}> </Text>
      </View>

      <View style={homeStyles.headerTitleRow}>
        <Text style={{ fontSize: 22 }}>👋</Text>
        <Text style={homeStyles.headerTitle}>مرحباً بك</Text>
      </View>

      <Text style={homeStyles.headerSubtitle}>
        اختر نوع الخدمة التي تحتاجها الآن
      </Text>
    </View>
  );
}
