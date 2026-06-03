import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getWashStyles } from "../styles/washStyles";
import { t } from "../services/i18n";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export default function WashPlanScreen({ lang = "ar", theme = "light", onBack }) {
  const insets = useSafeAreaInsets();
  const s = getWashStyles(theme, lang);
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  const FREQUENCY_OPTIONS = [
    { id: "1", label: isRtl ? "مرة شهرياً" : "Once monthly" },
    { id: "2", label: isRtl ? "مرتان شهرياً" : "Twice monthly" },
    { id: "4", label: isRtl ? "أربع مرات شهرياً" : "Four times monthly" },
  ];

  const WASH_TYPES = [
    { id: "external", label: isRtl ? "غسيل خارجي" : "Exterior Wash" },
    { id: "internal", label: isRtl ? "تنظيف داخلي" : "Interior Cleaning" },
    { id: "full", label: isRtl ? "غسيل كامل" : "Full Wash" },
  ];

  const LOCATION_OPTIONS = [
    { id: "home", label: isRtl ? "المنزل" : "Home" },
    { id: "work", label: isRtl ? "العمل" : "Work" },
  ];

  const TIME_SLOTS = [
    { id: "morning", label: isRtl ? "الصباح (8–11)" : "Morning (8-11)" },
    { id: "noon", label: isRtl ? "الظهر (12–3)" : "Afternoon (12-3)" },
    { id: "evening", label: isRtl ? "المساء (4–8)" : "Evening (4-8)" },
  ];

  const [selectedCar, setSelectedCar] = useState(null);
  const [frequency, setFrequency] = useState("2");
  const [washType, setWashType] = useState("full");
  const [locationType, setLocationType] = useState("home");
  const [timeSlot, setTimeSlot] = useState("evening");
  const [autoReminder, setAutoReminder] = useState(true);

  const handleConfirm = () => {
    if (!selectedCar) {
      Alert.alert(
        t("alertNotification", lang),
        isRtl ? "يرجى اختيار السيارة أولاً." : "Please select a vehicle first."
      );
      return;
    }

    Alert.alert(
      isRtl ? "تم" : "Done",
      isRtl ? "تم حفظ خطة الغسيل الدوري (تجريبي)." : "Periodic car wash plan saved (Demo)."
    );
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          {onBack ? (
            <TouchableOpacity style={s.backBtn} onPress={onBack} activeOpacity={0.85}>
              <Text style={s.backText}>{isRtl ? "رجوع" : "Back"}</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 48 }} />
          )}

          <Text style={s.headerTitle}>
            {isRtl ? "خدمة غسيل السيارة الدوري" : "Periodic Car Wash Service"}
          </Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          {isRtl
            ? "اختر عدد الزيارات شهرياً، ونوع الغسيل، والموقع المفضّل."
            : "Choose the number of visits monthly, wash type, and preferred location."}
        </Text>
      </View>

      <ScrollView
        style={s.content}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* السيارة */}
        <View style={s.card}>
          <Text style={s.label}>{t("carModel", lang)}</Text>

          <TouchableOpacity
            style={s.pickerBtn}
            onPress={() => setSelectedCar("Toyota Corolla 2018")}
            activeOpacity={0.85}
          >
            <Text style={s.pickerText}>
              {selectedCar || (isRtl ? "اضغط لاختيار سيارة من (سياراتي)" : "Tap to choose a car from (My Vehicles)")}
            </Text>
          </TouchableOpacity>

          <Text style={s.hint}>
            {isRtl
              ? "لاحقاً سيتم ربط هذه الشاشة بشاشة 'سياراتي' لاختيار السيارة فعلياً."
              : "Later, this screen will link with 'My Vehicles' to physically choose the car."}
          </Text>
        </View>

        {/* عدد الزيارات */}
        <View style={s.card}>
          <Text style={s.label}>{isRtl ? "عدد الزيارات شهرياً" : "Visits Monthly"}</Text>

          <View style={s.pillRow}>
            {FREQUENCY_OPTIONS.map((opt) => {
              const active = frequency === opt.id;
              return (
                <TouchableOpacity
                  key={opt.id}
                  style={[s.pill, active && s.pillActive]}
                  onPress={() => setFrequency(opt.id)}
                  activeOpacity={0.85}
                >
                  <Text
                    style={[
                      s.pillText,
                      active && s.pillTextActive,
                      { color: active ? "#FFF" : colors.text },
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={s.hint}>
            {isRtl
              ? "يمكنك تغيير عدد الزيارات لاحقاً من إعدادات الخطة."
              : "You can change the number of visits later from plan settings."}
          </Text>
        </View>

        {/* نوع الغسيل */}
        <View style={s.card}>
          <Text style={s.label}>{isRtl ? "نوع الغسيل" : "Wash Type"}</Text>

          <View style={s.pillRow}>
            {WASH_TYPES.map((opt) => {
              const active = washType === opt.id;
              return (
                <TouchableOpacity
                  key={opt.id}
                  style={[s.pill, active && s.pillActive]}
                  onPress={() => setWashType(opt.id)}
                  activeOpacity={0.85}
                >
                  <Text
                    style={[
                      s.pillText,
                      active && s.pillTextActive,
                      { color: active ? "#FFF" : colors.text },
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* الموقع */}
        <View style={s.card}>
          <Text style={s.label}>{isRtl ? "الموقع المفضّل" : "Preferred Location"}</Text>

          <View style={s.pillRow}>
            {LOCATION_OPTIONS.map((opt) => {
              const active = locationType === opt.id;
              return (
                <TouchableOpacity
                  key={opt.id}
                  style={[s.pill, active && s.pillActive]}
                  onPress={() => setLocationType(opt.id)}
                  activeOpacity={0.85}
                >
                  <Text
                    style={[
                      s.pillText,
                      active && s.pillTextActive,
                      { color: active ? "#FFF" : colors.text },
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={s.hint}>
            {isRtl
              ? "لاحقاً نسمح لك باختيار عنوان محدد من العناوين المحفوظة."
              : "Later we will let you select a specific address from saved addresses."}
          </Text>
        </View>

        {/* الوقت المفضل */}
        <View style={s.card}>
          <Text style={s.label}>{isRtl ? "الأوقات المفضلة للزيارة" : "Preferred Time Slot"}</Text>

          <View style={s.pillRow}>
            {TIME_SLOTS.map((opt) => {
              const active = timeSlot === opt.id;
              return (
                <TouchableOpacity
                  key={opt.id}
                  style={[s.pill, active && s.pillActive]}
                  onPress={() => setTimeSlot(opt.id)}
                  activeOpacity={0.85}
                >
                  <Text
                    style={[
                      s.pillText,
                      active && s.pillTextActive,
                      { color: active ? "#FFF" : colors.text },
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* تفعيل التذكير */}
        <View style={s.card}>
          <View style={s.toggleRow}>
            <Text style={s.toggleLabel}>
              {isRtl ? "تفعيل تذكير قبل موعد الغسيل" : "Enable reminder before wash schedule"}
            </Text>

            <Switch
              value={autoReminder}
              onValueChange={setAutoReminder}
              thumbColor={autoReminder ? colors.primary : "#ccc"}
              trackColor={{ true: colors.primary + "88", false: "#ddd" }}
            />
          </View>

          <Text style={s.hint}>
            {isRtl
              ? "عند التفعيل سنرسل لك إشعاراً قبل موعد الغسيل بوقت مناسب."
              : "When enabled, we will send you a notification at a suitable time before the schedule."}
          </Text>
        </View>

        {/* تأكيد الخطة */}
        <TouchableOpacity
          style={s.primaryBtn}
          onPress={handleConfirm}
          activeOpacity={0.9}
        >
          <Text style={s.primaryText}>
            {isRtl ? "حفظ خطة الغسيل الدوري" : "Save Periodic Wash Plan"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
