import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getOrdersStyles } from "../styles/ordersStyles";
import { t } from "../services/i18n";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export default function ProfileScreen({
  lang = "ar",
  setLang,
  theme = "light",
  setTheme,
  currentUser,
  onOpenVehicles,
  onOpenBooking,
  onOpenWashPlan,
  onOpenPremium,
  onOpenAddresses,
  onOpenPayments,
}) {
  const insets = useSafeAreaInsets();
  const s = getOrdersStyles(theme, lang);
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>{t("myProfile", lang)}</Text>
        <Text style={s.headerSubtitle}>{t("profileSubtitle", lang)}</Text>
      </View>

      <ScrollView
        style={s.content}
        contentContainerStyle={{ paddingBottom: 120 + Math.max(insets.bottom, 10) }}
        showsVerticalScrollIndicator={false}
      >
        {/* Name & Phone cards */}
        <View style={s.card}>
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.text }}>
            {t("userName", lang)}
          </Text>
          <Text style={{ fontSize: 13, color: colors.muted, textAlign: isRtl ? "right" : "left", marginTop: 4, fontWeight: "bold" }}>
            {currentUser?.fullName || "---"}
          </Text>
        </View>

        <View style={s.card}>
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.text }}>
            {t("phoneNumber", lang)}
          </Text>
          <Text style={{ fontSize: 13, color: colors.muted, textAlign: isRtl ? "right" : "left", marginTop: 4, fontWeight: "bold" }}>
            {currentUser?.phone || "---"}
          </Text>
        </View>

        {/* Dynamic Settings toggles directly inside profile */}
        <View style={s.card}>
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.text, marginBottom: 8 }}>
            {t("languageLabel", lang)}
          </Text>
          <View style={{ flexDirection: isRtl ? "row-reverse" : "row", gap: 10 }}>
            <TouchableOpacity
              onPress={() => setLang("ar")}
              activeOpacity={0.8}
              style={{
                flex: 1,
                paddingVertical: 10,
                borderRadius: 12,
                alignItems: "center",
                backgroundColor: lang === "ar" ? colors.primary : (theme === "dark" ? "#2B243C" : "#F0F0F0"),
                borderWidth: 1,
                borderColor: lang === "ar" ? colors.primary : colors.border,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: "800", color: lang === "ar" ? "#FFF" : colors.text }}>
                العربية
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setLang("en")}
              activeOpacity={0.8}
              style={{
                flex: 1,
                paddingVertical: 10,
                borderRadius: 12,
                alignItems: "center",
                backgroundColor: lang === "en" ? colors.primary : (theme === "dark" ? "#2B243C" : "#F0F0F0"),
                borderWidth: 1,
                borderColor: lang === "en" ? colors.primary : colors.border,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: "800", color: lang === "en" ? "#FFF" : colors.text }}>
                English
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={s.card}>
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.text, marginBottom: 8 }}>
            {t("themeLabel", lang)}
          </Text>
          <View style={{ flexDirection: isRtl ? "row-reverse" : "row", gap: 10 }}>
            <TouchableOpacity
              onPress={() => setTheme("light")}
              activeOpacity={0.8}
              style={{
                flex: 1,
                paddingVertical: 10,
                borderRadius: 12,
                alignItems: "center",
                backgroundColor: theme === "light" ? colors.primary : (theme === "dark" ? "#2B243C" : "#F0F0F0"),
                borderWidth: 1,
                borderColor: theme === "light" ? colors.primary : colors.border,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: "800", color: theme === "light" ? "#FFF" : colors.text }}>
                {t("lightMode", lang).split("/")[0].trim()}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setTheme("dark")}
              activeOpacity={0.8}
              style={{
                flex: 1,
                paddingVertical: 10,
                borderRadius: 12,
                alignItems: "center",
                backgroundColor: theme === "dark" ? colors.primary : (theme === "dark" ? "#2B243C" : "#F0F0F0"),
                borderWidth: 1,
                borderColor: theme === "dark" ? colors.primary : colors.border,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: "800", color: theme === "dark" ? "#FFF" : colors.text }}>
                {t("darkMode", lang).split("/")[0].trim()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Regular Profile Menu options */}
        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderStyle: "dashed", borderColor: theme === "dark" ? "#5E4A8A" : "#D7CCF5" }]}
          onPress={onOpenVehicles}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.text, marginBottom: 4 }}>
            {t("myVehicles", lang)}
          </Text>
          <Text style={{ fontSize: 12, color: colors.muted, textAlign: isRtl ? "right" : "left" }}>
            {t("myVehiclesDesc", lang)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: colors.border }]}
          onPress={onOpenBooking}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.text, marginBottom: 4 }}>
            {t("myBookings", lang)}
          </Text>
          <Text style={{ fontSize: 12, color: colors.muted, textAlign: isRtl ? "right" : "left" }}>
            {t("myBookingsDesc", lang)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: colors.border }]}
          onPress={onOpenWashPlan}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.text, marginBottom: 4 }}>
            {t("periodicWash", lang)}
          </Text>
          <Text style={{ fontSize: 12, color: colors.muted, textAlign: isRtl ? "right" : "left" }}>
            {t("periodicWashDesc", lang)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: colors.border, backgroundColor: theme === "dark" ? "#2B1E38" : "#F9F5FF" }]}
          onPress={onOpenPremium}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.primary, marginBottom: 4 }}>
            {t("upgradePremium", lang)}
          </Text>
          <Text style={{ fontSize: 12, color: colors.muted, textAlign: isRtl ? "right" : "left" }}>
            {t("upgradePremiumDesc", lang)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: colors.border }]}
          onPress={onOpenAddresses}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.text, marginBottom: 4 }}>
            {t("myAddresses", lang)}
          </Text>
          <Text style={{ fontSize: 12, color: colors.muted, textAlign: isRtl ? "right" : "left" }}>
            {t("myAddressesDesc", lang)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: colors.border }]}
          onPress={onOpenPayments}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: isRtl ? "right" : "left", color: colors.text, marginBottom: 4 }}>
            {t("paymentMethods", lang)}
          </Text>
          <Text style={{ fontSize: 12, color: colors.muted, textAlign: isRtl ? "right" : "left" }}>
            {t("paymentMethodsPlaceholder", lang)}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
