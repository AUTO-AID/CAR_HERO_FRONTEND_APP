import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { premiumStyles as s } from "../styles/premiumStyles";

export default function PremiumScreen({ onBack }) {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly | yearly
  const insets = useSafeAreaInsets();

  const handleSubscribe = () => {
    const plan = billingCycle === "monthly" ? "شهري" : "سنوي";

    const payload = {
      plan: billingCycle,
    };

    console.log("PREMIUM SUBSCRIBE PAYLOAD:", payload);

    // 👇👇👇 هنا نستدعي API لبدء عملية الاشتراك / الدفع
    //
    // fetch("https://api.example.com/premium/subscribe", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // success: حفظ حالة المستخدم كـ Premium
    //   })
    //   .catch((err) => console.log(err));

    Alert.alert("Premium", `(تجريبي) تم اختيار الاشتراك ${plan}.`);
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onBack}>
            <Text style={s.backText}>رجوع</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>الاشتراك Premium</Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          استمتع بمزايا إضافية وخدمات أسرع عند ترقية حسابك.
        </Text>
      </View>

      <ScrollView
        style={s.content}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* اختيار الخطة */}
        <View style={s.planRow}>
          <TouchableOpacity
            style={[
              s.planCard,
              billingCycle === "monthly" && s.planCardActive,
            ]}
            onPress={() => setBillingCycle("monthly")}
            activeOpacity={0.9}
          >
            <Text style={s.planName}>شهري</Text>
            <Text style={s.planPrice}>9.99 / شهر</Text>
            <Text style={s.planNote}>إلغاء أو تجديد في أي وقت.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              s.planCard,
              billingCycle === "yearly" && s.planCardActive,
            ]}
            onPress={() => setBillingCycle("yearly")}
            activeOpacity={0.9}
          >
            <Text style={s.planName}>سنوي</Text>
            <Text style={s.planPrice}>99.99 / سنة</Text>
            <Text style={s.planNote}>وفر شهرين مقارنة بالشهري.</Text>

            <View style={s.badge}>
              <Text style={s.badgeText}>الأكثر توفيراً</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* جدول المقارنة */}
        <Text style={s.tableTitle}>مقارنة بين الحساب العادي و Premium</Text>

        <View style={s.tableCard}>
          <View style={s.tableHeaderRow}>
            <Text style={s.colLabel}>Premium</Text>
            <Text style={[s.colLabel, { flex: 1.5, textAlign: "right" }]}>
              الميزة
            </Text>
            <Text style={s.colLabel}>عادي</Text>
          </View>

          {/* 1 - اختيار مزود حسب الأعلى تقييماً */}
          <View style={s.rowItem}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>
              اختيار مزوّد الخدمة حسب الأعلى تقييماً أولاً
            </Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>

          {/* 2 - أولوية في البحث عن الفني */}
          <View style={s.rowItem}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>
              أولوية في البحث عن فني واستجابة أسرع للطلبات
            </Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>

          {/* 3 - نقاط إضافية */}
          <View style={s.rowItem}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>
              الحصول على نقاط إضافية لكل طلب يتم عبر التطبيق
            </Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>

          {/* 4 - دعم مميز */}
          <View style={s.rowItem}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>دعم فني مخصص وسريع</Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>

          {/* 5 - استخدام مميزات مدفوعة */}
          <View style={[s.rowItem, s.rowItemLast]}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>
              استخدام المميزات المميزة (مثل اختيار الفني المفضّل، حجوزات خاصة...)
            </Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>
        </View>

        <Text style={s.lightText}>
          يمكنك الاستمرار في استخدام الحساب العادي مجاناً، لكن بعض المزايا ستكون
          متاحة لحساب Premium فقط.
        </Text>

        {/* زر الاشتراك */}
        <TouchableOpacity
          style={s.primaryBtn}
          onPress={handleSubscribe}
          activeOpacity={0.9}
        >
          <Text style={s.primaryText}>الاشتراك الآن</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
