import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Switch, Alert } from "react-native";
import { getBookingStyles } from "../styles/bookingStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "../services/i18n";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export default function BookingScreen({ lang = "ar", theme = "light", onBack }) {
  const insets = useSafeAreaInsets();
  const s = getBookingStyles(theme, lang);
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  const [selectedCar, setSelectedCar] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [center, setCenter] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [reminderEnabled, setReminderEnabled] = useState(false);

  const handleConfirm = () => {
    if (!selectedCar || !serviceType || !center || !date || !time) {
      Alert.alert(
        t("alertNotification", lang),
        isRtl ? "يرجى تعبئة جميع الحقول المطلوبة." : "Please fill in all required fields."
      );
      return;
    }

    Alert.alert(
      isRtl ? "تم" : "Done",
      isRtl ? "تم إنشاء الحجز بنجاح." : "Booking created successfully."
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
            {isRtl ? "حجز صيانة / غسيل" : "Book Maintenance / Wash"}
          </Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          {isRtl
            ? "احجز موعدك القادم بسهولة واختر مركز الخدمة المناسب لك."
            : "Book your next appointment easily and select the service center right for you."}
        </Text>
      </View>

      <ScrollView style={s.content} showsVerticalScrollIndicator={false}>
        {/* Car */}
        <View style={s.card}>
          <Text style={s.label}>{t("carModel", lang)}</Text>

          <TouchableOpacity
            style={s.pickerBtn}
            onPress={() => setSelectedCar("Toyota Corolla 2018")}
            activeOpacity={0.85}
          >
            <Text style={s.pickerText}>
              {selectedCar || (isRtl ? "اضغط للاختيار من سياراتك" : "Tap to select from your vehicles")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Service Type */}
        <View style={s.card}>
          <Text style={s.label}>{isRtl ? "نوع الخدمة" : "Service Type"}</Text>

          <TouchableOpacity
            style={s.pickerBtn}
            onPress={() => setServiceType(isRtl ? "غسيل خارجي" : "Exterior Wash")}
            activeOpacity={0.85}
          >
            <Text style={s.pickerText}>
              {serviceType || (isRtl ? "اختر نوع الخدمة (غسيل – صيانة – تبديل زيت…)" : "Select service type (Wash - Maintenance - Oil swap...)")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Center */}
        <View style={s.card}>
          <Text style={s.label}>{isRtl ? "مركز الخدمة" : "Service Center"}</Text>

          <TouchableOpacity
            style={s.pickerBtn}
            onPress={() => setCenter(isRtl ? "مركز السعادة لصيانة السيارات" : "Al-Saada Maintenance Center")}
            activeOpacity={0.85}
          >
            <Text style={s.pickerText}>
              {center || (isRtl ? "اضغط لاختيار مركز الخدمة" : "Tap to select service center")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Date + Time */}
        <View style={s.card}>
          <Text style={s.label}>{isRtl ? "التاريخ والوقت" : "Date & Time"}</Text>

          <View style={s.row}>
            <TouchableOpacity
              style={[s.pickerBtn, s.half]}
              onPress={() => setDate("2025-12-20")}
              activeOpacity={0.85}
            >
              <Text style={s.pickerText}>
                {date || (isRtl ? "اختر التاريخ" : "Select Date")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[s.pickerBtn, s.half]}
              onPress={() => setTime(isRtl ? "3:30 م" : "3:30 PM")}
              activeOpacity={0.85}
            >
              <Text style={s.pickerText}>
                {time || (isRtl ? "اختر الوقت" : "Select Time")}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={s.note}>
            {isRtl
              ? "لاحقاً سيتم إضافة DatePicker و TimePicker حقيقيين."
              : "Later, real DatePicker & TimePicker will be added."}
          </Text>
        </View>

        {/* Reminder */}
        <View style={s.card}>
          <View style={s.toggleRow}>
            <Text style={s.toggleLabel}>
              {isRtl ? "تذكير دوري كل 3 أشهر" : "Periodic reminder every 3 months"}
            </Text>

            <Switch
              value={reminderEnabled}
              onValueChange={setReminderEnabled}
              thumbColor={reminderEnabled ? colors.primary : "#ccc"}
              trackColor={{ true: colors.primary + "88", false: "#ddd" }}
            />
          </View>

          <Text style={s.note}>
            {isRtl
              ? "عند التفعيل، سنرسل لك تذكيراً كل 3 أشهر للصيانة الدورية."
              : "When enabled, we will send you a reminder every 3 months for periodic maintenance."}
          </Text>
        </View>

        {/* Confirm */}
        <TouchableOpacity style={s.primaryBtn} onPress={handleConfirm} activeOpacity={0.9}>
          <Text style={s.primaryText}>
            {isRtl ? "تأكيد الحجز" : "Confirm Booking"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
