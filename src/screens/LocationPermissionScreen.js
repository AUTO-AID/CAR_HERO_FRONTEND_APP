import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { locationStyles as s } from "../styles/locationPermissionStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  requestLocationPermission,
  getCurrentLocation,
} from "../services/locationService";

export default function LocationPermissionScreen({
  onDone,
  onPickFromMap,
}) {
  const insets = useSafeAreaInsets();
  const handleEnableLocation = async () => {
    // هنا نستدعي API النظام لطلب صلاحيات الموقع
    const granted = await requestLocationPermission();
    if (!granted) {
      Alert.alert(
        "تنبيه",
        "الرجاء تفعيل صلاحية الموقع من الإعدادات للحصول على أفضل تجربة."
      );
      return;
    }

    // اختياري: جلب الموقع مباشرة وتخزينه لو حابب
    try {
      const loc = await getCurrentLocation();
      console.log("CURRENT LOCATION FROM PERMISSION SCREEN:", loc);
      // ممكن تخزّن loc في حالة عليا (App) لو حبيت
    } catch (e) {
      console.log(e);
    }

    onDone?.(); // نكمل إلى الشاشة الرئيسية
  };

  const handlePickManually = () => {
    // هنا نحول المستخدم لشاشة الخريطة اليدوية (MapScreen)
    onPickFromMap?.();
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>صلاحيات تحديد الموقع</Text>
        <Text style={s.headerSubtitle}>
          نحتاج إلى استخدام موقعك لنتمكن من إرسال أقرب فني لخدمتك بشكل دقيق.
        </Text>
      </View>

      {/* Content */}
      <View style={s.content}>
        <View style={s.card}>
          <View style={s.iconCircle}>
            <Text style={s.iconEmoji}>📍</Text>
          </View>

          <Text style={s.title}>لماذا نحتاج إلى موقعك؟</Text>
          <Text style={s.text}>
            لتحديد أقرب مزود خدمة، وحساب وقت الوصول، وتوجيه الفني مباشرة إلى
            مكانك بدون اتصالات إضافية.
          </Text>

          <View style={s.bulletRow}>
            <View style={s.bulletDot} />
            <Text style={s.bulletText}>إرسال أقرب فني ممكن إلى موقعك.</Text>
          </View>
          <View style={s.bulletRow}>
            <View style={s.bulletDot} />
            <Text style={s.bulletText}>
              عرض موقع الفني على الخريطة وتتبع تحركه نحوك.
            </Text>
          </View>
          <View style={s.bulletRow}>
            <View style={s.bulletDot} />
            <Text style={s.bulletText}>
              حفظ عناوينك المفضلة لتسهيل الطلبات القادمة.
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
          <Text style={s.primaryText}>تفعيل تحديد الموقع الآن</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.secondaryBtn}
          onPress={handlePickManually}
          activeOpacity={0.9}
        >
          <Text style={s.secondaryText}>اختيار الموقع من الخريطة يدوياً</Text>
        </TouchableOpacity>

        <Text style={s.note}>
          يمكنك تغيير صلاحيات الموقع لاحقاً من إعدادات التطبيق أو من داخل صفحة
          الحساب الشخصي.
        </Text>
      </View>
    </View>
  );
}
