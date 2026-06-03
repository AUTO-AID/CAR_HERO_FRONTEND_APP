import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getTrackingStyles } from "../styles/trackingStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "../services/i18n";

const SERVICE_ICONS = {
  tire: "🛞",
  battery: "🔋",
  mechanic: "🛠️",
  tow: "🚛",
  fuel: "⛽",
  emergency: "🚨",
};

export default function TechnicianTrackingScreen({ lang = "ar", theme = "light", request, onDone }) {
  const insets = useSafeAreaInsets();
  const s = getTrackingStyles(theme, lang);
  const isRtl = lang === "ar";
  const [stepIndex, setStepIndex] = useState(0);
  const [eta, setEta] = useState(15);

  const STATUS_STEPS = [
    t("searchingTechnician", lang),
    isRtl ? "تم قبول الطلب من الفني" : "Request accepted by technician",
    t("technicianOnWay", lang),
    t("technicianArrived", lang),
  ];

  useEffect(() => {
    const fake = setInterval(() => {
      setStepIndex((prev) => (prev < 3 ? prev + 1 : 3));
      setEta((prev) => (prev > 3 ? prev - 3 : prev));
    }, 6000);

    return () => clearInterval(fake);
  }, []);

  const currentStatus = STATUS_STEPS[stepIndex];
  const icon = SERVICE_ICONS[request?.serviceType] || SERVICE_ICONS.mechanic || "🧰";

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onDone} activeOpacity={0.85}>
            <Text style={s.backText}>{t("done", lang)}</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>{t("trackingTitle", lang)}</Text>

          <Text style={{ color: "transparent" }}>___</Text>
        </View>
      </View>

      <View style={s.content}>
        {/* Service card */}
        <View style={s.card}>
          <View style={s.row}>
            <View style={s.iconCircle}>
              <Text style={s.iconText}>{icon}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={s.title}>
                {request?.serviceType ? t(request.serviceType, lang) : t("emergencyService", lang)}
              </Text>
              <Text style={s.sub}>
                {request?.carModel || (isRtl ? "سيارتك" : "Your Car")} • {currentStatus}
              </Text>
            </View>
          </View>
        </View>

        {/* Steps card */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>{isRtl ? "حالة الطلب" : "Request Status"}</Text>

          <View style={s.stepsRow}>
            {STATUS_STEPS.map((label, idx) => {
              const active = idx <= stepIndex;
              return (
                <View key={label} style={s.stepItem}>
                  <View
                    style={[
                      s.stepBullet,
                      active ? s.stepBulletActive : s.stepBulletInactive,
                    ]}
                  />
                  <Text style={active ? s.stepTextActive : s.stepTextInactive}>
                    {label}
                  </Text>
                </View>
              );
            })}
          </View>

          <Text style={s.etaText}>
            {stepIndex < 3
              ? isRtl
                ? `الوقت التقديري لوصول الفني: ${eta} دقيقة تقريباً`
                : `Estimated arrival time: ~${eta} minutes`
              : isRtl
                ? "يفترض أن الفني قد وصل لموقعك الآن ✅"
                : "The technician should have arrived at your location ✅"}
          </Text>
        </View>

        {/* Tech Info */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>
            {isRtl ? "معلومات الفني (تجريبية)" : "Technician Details (Demo)"}
          </Text>
          <Text style={s.sub}>
            {isRtl ? "الاسم: أحمد الخالد" : "Name: Ahmed Al-Khaled"}
          </Text>
          <Text style={s.sub}>
            {isRtl ? "رقم السيارة: س.1234" : "Car Plate: S.1234"}
          </Text>
          <Text style={s.sub}>
            {isRtl ? "رقم التواصل: 09xx xxx xxx" : "Contact Number: 09xx xxx xxx"}
          </Text>
          <Text style={[s.sub, { marginTop: 6, opacity: 0.7 }]}>
            {isRtl
              ? "(لاحقاً سيتم جلب هذه البيانات من API حسب أقرب فني تم اختياره)"
              : "(Later this data will be fetched from API based on chosen technician)"}
          </Text>
        </View>

        <TouchableOpacity style={s.primaryBtn} onPress={onDone} activeOpacity={0.85}>
          <Text style={s.primaryBtnText}>
            {isRtl ? "العودة إلى الصفحة الرئيسية" : "Back to Home Screen"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
