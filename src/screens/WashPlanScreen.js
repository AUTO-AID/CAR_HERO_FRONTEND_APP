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
import { washStyles as s } from "../styles/washStyles";

const FREQUENCY_OPTIONS = [
  { id: "1", label: "مرة شهرياً" },
  { id: "2", label: "مرتان شهرياً" },
  { id: "4", label: "أربع مرات شهرياً" },
];

const WASH_TYPES = [
  { id: "external", label: "غسيل خارجي" },
  { id: "internal", label: "تنظيف داخلي" },
  { id: "full", label: "غسيل كامل" },
];

const LOCATION_OPTIONS = [
  { id: "home", label: "المنزل" },
  { id: "work", label: "العمل" },
];

const TIME_SLOTS = [
  { id: "morning", label: "الصباح (8–11)" },
  { id: "noon", label: "الظهر (12–3)" },
  { id: "evening", label: "المساء (4–8)" },
];

export default function WashPlanScreen({ onBack }) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [frequency, setFrequency] = useState("2");
  const [washType, setWashType] = useState("full");
  const [locationType, setLocationType] = useState("home");
  const [timeSlot, setTimeSlot] = useState("evening");
  const [autoReminder, setAutoReminder] = useState(true);
  const insets = useSafeAreaInsets();

  const handleConfirm = () => {
    if (!selectedCar) {
      Alert.alert("تنبيه", "يرجى اختيار السيارة أولاً.");
      return;
    }

    const payload = {
      car: selectedCar,
      frequency,
      washType,
      locationType,
      timeSlot,
      autoReminder,
    };

    console.log("WASH PLAN PAYLOAD:", payload);

    // 👇👇👇 هنا نستدعي API لحفظ خطة الغسيل الدوري
    //
    // fetch("https://api.example.com/wash-plans", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("Wash plan saved:", data))
    //   .catch((err) => console.log(err));

    Alert.alert("تم", "تم حفظ خطة الغسيل الدوري (تجريبي).");
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          {onBack ? (
            <TouchableOpacity style={s.backBtn} onPress={onBack}>
              <Text style={s.backText}>رجوع</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 48 }} />
          )}

          <Text style={s.headerTitle}>خدمة غسيل السيارة الدوري</Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          اختر عدد الزيارات شهرياً، ونوع الغسيل، والموقع المفضّل.
        </Text>
      </View>

      <ScrollView
        style={s.content}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* السيارة */}
        <View style={s.card}>
          <Text style={s.label}>اختيار السيارة</Text>

          <TouchableOpacity
            style={s.pickerBtn}
            onPress={() => setSelectedCar("Toyota Corolla 2018")}
          >
            <Text style={s.pickerText}>
              {selectedCar || "اضغط لاختيار سيارة من (سياراتي)"}
            </Text>
          </TouchableOpacity>

          <Text style={s.hint}>
            لاحقاً سيتم ربط هذه الشاشة بشاشة "سياراتي" لاختيار السيارة فعلياً.
          </Text>
        </View>

        {/* عدد الزيارات */}
        <View style={s.card}>
          <Text style={s.label}>عدد الزيارات شهرياً</Text>

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
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={s.hint}>
            يمكنك تغيير عدد الزيارات لاحقاً من إعدادات الخطة.
          </Text>
        </View>

        {/* نوع الغسيل */}
        <View style={s.card}>
          <Text style={s.label}>نوع الغسيل</Text>

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
          <Text style={s.label}>الموقع المفضّل</Text>

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
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={s.hint}>
            لاحقاً نسمح لك باختيار عنوان محدد من العناوين المحفوظة.
          </Text>
        </View>

        {/* الوقت المفضل */}
        <View style={s.card}>
          <Text style={s.label}>الأوقات المفضلة للزيارة</Text>

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
              تفعيل تذكير قبل موعد الغسيل
            </Text>

            <Switch
              value={autoReminder}
              onValueChange={setAutoReminder}
            />
          </View>

          <Text style={s.hint}>
            عند التفعيل سنرسل لك إشعاراً قبل موعد الغسيل بوقت مناسب.
          </Text>
        </View>

        {/* تأكيد الخطة */}
        <TouchableOpacity
          style={s.primaryBtn}
          onPress={handleConfirm}
          activeOpacity={0.9}
        >
          <Text style={s.primaryText}>حفظ خطة الغسيل الدوري</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
