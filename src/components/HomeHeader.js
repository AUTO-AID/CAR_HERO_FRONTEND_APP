import React from "react";
import { View, Text } from "react-native";
import { getHomeStyles } from "../styles/homeStyles";
import { t } from "../services/i18n";

export default function HomeHeader({ lang = "ar", theme = "light", currentUser, style }) {
  const s = getHomeStyles(theme, lang);
  const isRtl = lang === "ar";

  const welcomeText = isRtl
    ? `مرحباً بك، ${currentUser?.fullName ? currentUser.fullName.split(" ")[0] : ""}`
    : `Welcome, ${currentUser?.fullName ? currentUser.fullName.split(" ")[0] : ""}`;

  const subtitleText = isRtl
    ? "اختر نوع الخدمة التي تحتاجها الآن"
    : "Choose the service you need now";

  return (
    <View style={[s.header, style]}>
      <View style={s.headerTopRow}>
        <Text style={s.brand}>{t("brand", lang)}</Text>
        <Text style={{ color: "#fff", opacity: 0.9 }}> </Text>
      </View>

      <View style={s.headerTitleRow}>
        <Text style={{ fontSize: 22 }}>👋</Text>
        <Text style={s.headerTitle}>{welcomeText}</Text>
      </View>

      <Text style={s.headerSubtitle}>
        {subtitleText}
      </Text>
    </View>
  );
}
