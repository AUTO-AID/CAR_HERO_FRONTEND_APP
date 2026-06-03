import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import { getHomeStyles } from "../styles/homeStyles";
import { t } from "../services/i18n";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export default function HomeScreen({
  lang = "ar",
  theme = "light",
  currentUser,
  onSelectService,
  onOpenMapExplore,
  onOpenOffers,
}) {
  const insets = useSafeAreaInsets();
  const s = getHomeStyles(theme, lang);
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  const SERVICES = [
    { id: "tire", title: t("tire", lang), description: t("tireDesc", lang), icon: "🛞" },
    { id: "battery", title: t("battery", lang), description: t("batteryDesc", lang), icon: "🔋" },
    { id: "mechanic", title: t("mechanic", lang), description: t("mechanicDesc", lang), icon: "🛠️" },
    { id: "tow", title: t("tow", lang), description: t("towDesc", lang), icon: "🚛" },
    { id: "fuel", title: t("fuel", lang), description: t("fuelDesc", lang), icon: "⛽" },
    { id: "emergency", title: t("emergency", lang), description: t("emergencyDesc", lang), icon: "🚨" },
  ];

  const handleServicePress = (service) => {
    console.log(t("selectServiceLog", lang) + service.id);
    onSelectService?.(service);
  };

  return (
    <View style={s.screen}>
      <HomeHeader 
        lang={lang} 
        theme={theme} 
        currentUser={currentUser} 
        style={{ paddingTop: Math.max(insets.top, 20) }} 
      />

      {/* Button: Techs on Map */}
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 8,
          marginBottom: 4,
          alignItems: isRtl ? "flex-end" : "flex-start",
        }}
      >
        <TouchableOpacity
          onPress={onOpenMapExplore}
          activeOpacity={0.85}
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            gap: 6,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 16,
            backgroundColor: theme === "dark" ? "#2B243C" : "#F5F0FF",
            borderWidth: 1,
            borderColor: theme === "dark" ? "#3D354E" : "#E3D8F8",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "800", color: colors.primary }}>
            {t("exploreTechnicians", lang)}
          </Text>
          <Text>🗺️</Text>
        </TouchableOpacity>
      </View>

      {/* Button: Offers & Discounts */}
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 6,
          marginBottom: 6,
          alignItems: isRtl ? "flex-end" : "flex-start",
        }}
      >
        <TouchableOpacity
          onPress={onOpenOffers}
          activeOpacity={0.85}
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            gap: 6,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 16,
            backgroundColor: theme === "dark" ? "#38241B" : "#FFF7ED",
            borderWidth: 1,
            borderColor: theme === "dark" ? "#5E3E2F" : "#FED7AA",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "800", color: theme === "dark" ? "#FF9B66" : "#C05621" }}>
            {t("offersAndDiscounts", lang)}
          </Text>
          <Text>🎁</Text>
        </TouchableOpacity>
      </View>

      <View style={s.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {SERVICES.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={s.card}
              activeOpacity={0.85}
              onPress={() => handleServicePress(item)}
            >
              <View style={s.iconWrap}>
                <Text style={s.icon}>{item.icon}</Text>
              </View>

              <View style={s.textWrap}>
                <Text style={s.title}>{item.title}</Text>
                <Text style={s.desc}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
