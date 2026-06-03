import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { getLocationStyles } from "../styles/locationPermissionStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "../services/i18n";
import {
  requestLocationPermission,
  getCurrentLocation,
} from "../services/locationService";

export default function LocationPermissionScreen({
  lang = "ar",
  theme = "light",
  onDone,
  onPickFromMap,
}) {
  const insets = useSafeAreaInsets();
  const s = getLocationStyles(theme, lang);
  const isRtl = lang === "ar";

  const handleEnableLocation = async () => {
    const granted = await requestLocationPermission();
    if (!granted) {
      Alert.alert(
        t("alertNotification", lang),
        isRtl
          ? "الرجاء تفعيل صلاحية الموقع من الإعدادات للحصول على أفضل تجربة."
          : "Please enable location permission from settings for the best experience."
      );
      return;
    }

    try {
      const loc = await getCurrentLocation();
      console.log("CURRENT LOCATION FROM PERMISSION SCREEN:", loc);
    } catch (e) {
      console.log(e);
    }

    onDone?.();
  };

  const handlePickManually = () => {
    onPickFromMap?.();
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>{t("locationTitle", lang)}</Text>
        <Text style={s.headerSubtitle}>{t("locationSubtitle", lang)}</Text>
      </View>

      {/* Content */}
      <View style={s.content}>
        <View style={s.card}>
          <View style={s.iconCircle}>
            <Text style={s.iconEmoji}>📍</Text>
          </View>

          <Text style={s.title}>
            {isRtl ? "لماذا نحتاج إلى موقعك؟" : "Why do we need your location?"}
          </Text>
          <Text style={s.text}>
            {isRtl
              ? "لتحديد أقرب مزود خدمة، وحساب وقت الوصول، وتوجيه الفني مباشرة إلى مكانك بدون اتصالات إضافية."
              : "To identify the closest service provider, calculate arrival time, and route the technician directly to you without extra calls."}
          </Text>

          <View style={s.bulletRow}>
            <View style={s.bulletDot} />
            <Text style={s.bulletText}>
              {isRtl
                ? "إرسال أقرب فني ممكن إلى موقعك."
                : "Sending the nearest possible technician to your location."}
            </Text>
          </View>
          <View style={s.bulletRow}>
            <View style={s.bulletDot} />
            <Text style={s.bulletText}>
              {isRtl
                ? "عرض موقع الفني على الخريطة وتتبع تحركه نحوك."
                : "Showing the technician location on map and tracking their movement."}
            </Text>
          </View>
          <View style={s.bulletRow}>
            <View style={s.bulletDot} />
            <Text style={s.bulletText}>
              {isRtl
                ? "حفظ عناوينك المفضلة لتسهيل الطلبات القادمة."
                : "Saving your favorite addresses to simplify upcoming requests."}
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={s.footer}>
        <TouchableOpacity
          style={s.primaryBtn}
          onPress={handleEnableLocation}
          activeOpacity={0.9}
        >
          <Text style={s.primaryText}>{t("allowLocation", lang)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.secondaryBtn}
          onPress={handlePickManually}
          activeOpacity={0.9}
        >
          <Text style={s.secondaryText}>{t("pickFromMap", lang)}</Text>
        </TouchableOpacity>

        <Text style={s.note}>
          {isRtl
            ? "يمكنك تغيير صلاحيات الموقع لاحقاً من إعدادات التطبيق أو من داخل صفحة الحساب الشخصي."
            : "You can change location permissions later from app settings or inside the profile page."}
        </Text>
      </View>
    </View>
  );
}
