import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { trackingStyles as s } from "../styles/trackingStyles";
import { COLORS } from "../theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const STATUS_STEPS = [
  "جاري البحث عن أقرب فني",
  "تم قبول الطلب من الفني",
  "الفني في الطريق إليك",
  "الفني وصل إلى موقعك",
];

const SERVICE_ICONS = {
  tire: "🛞",
  battery: "🔋",
  mechanic: "🛠️",
  tow: "🚛",
  fuel: "⛽",
  emergency: "🚨",
};

export default function TechnicianTrackingScreen({ request, onDone }) {
  const insets = useSafeAreaInsets();
  const [stepIndex, setStepIndex] = useState(0);
  const [eta, setEta] = useState(15); // تقدير وصول بالدقائق (تجريبي)

  useEffect(() => {
    // 👇👇👇 هنا نستدعي API لمتابعة حالة الطلب بشكل دوري
    //
    // مثال (polling كل 5 ثواني):
    //
    // const interval = setInterval(() => {
    //   fetch(`https://api.example.com/requests/${request.id}/status`)
    //     .then(res => res.json())
    //     .then(data => {
    //       // data.status ممكن تكون: searching, accepted, on_way, arrived
    //       // نحدث stepIndex حسب الحالة:
    //       // if (data.status === "searching") setStepIndex(0);
    //       // else if (data.status === "accepted") setStepIndex(1);
    //       // else if (data.status === "on_way") setStepIndex(2);
    //       // else if (data.status === "arrived") setStepIndex(3);
    //       // setEta(data.etaMinutes);
    //     })
    //     .catch(console.log);
    // }, 5000);
    //
    // return () => clearInterval(interval);

    // ▫️ للتجربة فقط: نحرك الحالة داخلياً كل 6 ثواني
    const fake = setInterval(() => {
      setStepIndex((prev) => (prev < 3 ? prev + 1 : 3));
      setEta((prev) => (prev > 3 ? prev - 3 : prev));
    }, 6000);

    return () => clearInterval(fake);
  }, []);

  const currentStatus = STATUS_STEPS[stepIndex];

  const icon =
    SERVICE_ICONS[request?.serviceType] || SERVICE_ICONS.mechanic || "🧰";

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onDone}>
            <Text style={s.backText}>إنهاء</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>تتبع الفني</Text>

          <Text style={{ color: "transparent" }}>___</Text>
        </View>
      </View>

      <View style={s.content}>
        {/* بطاقة الخدمة */}
        <View style={s.card}>
          <View style={s.row}>
            <View style={s.iconCircle}>
              <Text style={s.iconText}>{icon}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={s.title}>
                {request?.serviceLabel || "طلب خدمة"}
              </Text>
              <Text style={s.sub}>
                {request?.carModel || "سيارتك"} • {currentStatus}
              </Text>
            </View>
          </View>
        </View>

        {/* خطوات الحالة */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>حالة الطلب</Text>

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
              ? `الوقت التقديري لوصول الفني: ${eta} دقيقة تقريباً`
              : "الفني يفترض أن يكون قد وصل لموقعك الآن ✅"}
          </Text>
        </View>

        {/* معلومات فنية تجريبية */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>معلومات الفني (تجريبية)</Text>
          <Text style={s.sub}>الاسم: أحمد الخالد</Text>
          <Text style={s.sub}>رقم السيارة: س.1234</Text>
          <Text style={s.sub}>رقم التواصل: 09xx xxx xxx</Text>
          <Text style={[s.sub, { marginTop: 6 }]}>
            (لاحقاً سيتم جلب هذه البيانات من API حسب أقرب فني تم اختياره)
          </Text>
        </View>

        <TouchableOpacity style={s.primaryBtn} onPress={onDone}>
          <Text style={s.primaryBtnText}>العودة إلى الصفحة الرئيسية</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
