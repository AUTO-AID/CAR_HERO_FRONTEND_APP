import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Switch, Alert } from "react-native";
import { bookingStyles as s } from "../styles/bookingStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BookingScreen({ onBack }) {
  const insets = useSafeAreaInsets();
  const [selectedCar, setSelectedCar] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [center, setCenter] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const [reminderEnabled, setReminderEnabled] = useState(false);

  const handleConfirm = () => {
    if (!selectedCar || !serviceType || !center || !date || !time) {
      Alert.alert("تنبيه", "يرجى تعبئة جميع الحقول المطلوبة.");
      return;
    }

    const bookingData = {
      selectedCar,
      serviceType,
      center,
      date,
      time,
      reminder: reminderEnabled,
    };

    console.log("BOOKING DATA:", bookingData);

    // 👇👇👇 هنا نستدعي API لإنشاء الحجز
    //
    // fetch("https://api.example.com/bookings", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(bookingData),
    // })
    // .then(res => res.json())
    // .then(data => console.log("Booking Created:", data))
    // .catch(err => console.log("Booking Error:", err));

    Alert.alert("تم", "تم إنشاء الحجز بنجاح.");
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

          <Text style={s.headerTitle}>حجز صيانة / غسيل</Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          احجز موعدك القادم بسهولة واختر مركز الخدمة المناسب لك.
        </Text>
      </View>

      <ScrollView style={s.content} showsVerticalScrollIndicator={false}>
        {/* Car */}
        <View style={s.card}>
          <Text style={s.label}>اختيار السيارة</Text>

          <TouchableOpacity
            style={s.pickerBtn}
            onPress={() => setSelectedCar("Toyota Corolla 2018")}
          >
            <Text style={s.pickerText}>
              {selectedCar || "اضغط للاختيار من سياراتك"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Service Type */}
        <View style={s.card}>
          <Text style={s.label}>نوع الخدمة</Text>

          <TouchableOpacity
            style={s.pickerBtn}
            onPress={() => setServiceType("غسيل خارجي")}
          >
            <Text style={s.pickerText}>
              {serviceType || "اختر نوع الخدمة (غسيل – صيانة – تبديل زيت…)"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Center */}
        <View style={s.card}>
          <Text style={s.label}>مركز الخدمة</Text>

          <TouchableOpacity
            style={s.pickerBtn}
            onPress={() => setCenter("مركز السعادة لصيانة السيارات")}
          >
            <Text style={s.pickerText}>
              {center || "اضغط لاختيار مركز الخدمة"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Date + Time */}
        <View style={s.card}>
          <Text style={s.label}>التاريخ والوقت</Text>

          <View style={s.row}>
            <TouchableOpacity
              style={[s.pickerBtn, s.half]}
              onPress={() => setDate("2025-12-20")}
            >
              <Text style={s.pickerText}>{date || "اختر التاريخ"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[s.pickerBtn, s.half]}
              onPress={() => setTime("3:30 م")}
            >
              <Text style={s.pickerText}>{time || "اختر الوقت"}</Text>
            </TouchableOpacity>
          </View>

          <Text style={s.note}>
            لاحقاً سيتم إضافة DatePicker و TimePicker حقيقيين.
          </Text>
        </View>

        {/* Reminder */}
        <View style={s.card}>
          <View style={s.toggleRow}>
            <Text style={s.toggleLabel}>تذكير دوري كل 3 أشهر</Text>

            <Switch
              value={reminderEnabled}
              onValueChange={setReminderEnabled}
              thumbColor={reminderEnabled ? COLORS.primary : "#ccc"}
            />
          </View>

          <Text style={s.note}>
            عند التفعيل، سنرسل لك تذكيراً كل 3 أشهر للصيانة الدورية.
          </Text>
        </View>

        {/* Confirm */}
        <TouchableOpacity style={s.primaryBtn} onPress={handleConfirm}>
          <Text style={s.primaryText}>تأكيد الحجز</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
