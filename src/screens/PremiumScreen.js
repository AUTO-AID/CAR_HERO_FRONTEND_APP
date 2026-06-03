import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getPremiumStyles } from "../styles/premiumStyles";
import { t } from "../services/i18n";

export default function PremiumScreen({ lang = "ar", theme = "light", onBack }) {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const insets = useSafeAreaInsets();
  const s = getPremiumStyles(theme, lang);
  const isRtl = lang === "ar";

  const handleSubscribe = () => {
    const plan = billingCycle === "monthly"
      ? isRtl ? "شهري" : "Monthly"
      : isRtl ? "سنوي" : "Yearly";

    Alert.alert(
      "Premium",
      isRtl ? `(تجريبي) تم اختيار الاشتراك ${plan}.` : `(Demo) Subscription ${plan} selected.`
    );
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onBack} activeOpacity={0.85}>
            <Text style={s.backText}>{isRtl ? "رجوع" : "Back"}</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>
            {isRtl ? "الاشتراك Premium" : "Premium Subscription"}
          </Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          {isRtl
            ? "استمتع بمزايا إضافية وخدمات أسرع عند ترقية حسابك."
            : "Enjoy extra perks and faster services when upgrading your account."}
        </Text>
      </View>

      <ScrollView
        style={s.content}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* plan options */}
        <View style={s.planRow}>
          <TouchableOpacity
            style={[
              s.planCard,
              billingCycle === "monthly" && s.planCardActive,
            ]}
            onPress={() => setBillingCycle("monthly")}
            activeOpacity={0.9}
          >
            <Text style={s.planName}>{isRtl ? "شهري" : "Monthly"}</Text>
            <Text style={s.planPrice}>{isRtl ? "9.99 / شهر" : "$9.99 / mo"}</Text>
            <Text style={s.planNote}>
              {isRtl ? "إلغاء أو تجديد في أي وقت." : "Cancel or renew anytime."}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              s.planCard,
              billingCycle === "yearly" && s.planCardActive,
            ]}
            onPress={() => setBillingCycle("yearly")}
            activeOpacity={0.9}
          >
            <Text style={s.planName}>{isRtl ? "سنوي" : "Yearly"}</Text>
            <Text style={s.planPrice}>{isRtl ? "99.99 / سنة" : "$99.99 / yr"}</Text>
            <Text style={s.planNote}>
              {isRtl ? "وفر شهرين مقارنة بالشهري." : "Save 2 months compared to monthly."}
            </Text>

            <View style={s.badge}>
              <Text style={s.badgeText}>{isRtl ? "الأكثر توفيراً" : "Best Value"}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* comparison table */}
        <Text style={s.tableTitle}>
          {isRtl
            ? "مقارنة بين الحساب العادي و Premium"
            : "Comparison: Regular vs Premium"}
        </Text>

        <View style={s.tableCard}>
          <View style={s.tableHeaderRow}>
            <Text style={s.colLabel}>Premium</Text>
            <Text style={[s.colLabel, { flex: 1.5, textAlign: isRtl ? "right" : "left" }]}>
              {isRtl ? "الميزة" : "Feature"}
            </Text>
            <Text style={s.colLabel}>{isRtl ? "عادي" : "Regular"}</Text>
          </View>

          {/* Feature 1 */}
          <View style={s.rowItem}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>
              {isRtl
                ? "اختيار مزوّد الخدمة حسب الأعلى تقييماً أولاً"
                : "Choose the highest-rated service provider first"}
            </Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>

          {/* Feature 2 */}
          <View style={s.rowItem}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>
              {isRtl
                ? "أولوية في البحث عن فني واستجابة أسرع للطلبات"
                : "Priority in technician search and faster response"}
            </Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>

          {/* Feature 3 */}
          <View style={s.rowItem}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>
              {isRtl
                ? "الحصول على نقاط إضافية لكل طلب يتم عبر التطبيق"
                : "Get bonus points for every order made through the app"}
            </Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>

          {/* Feature 4 */}
          <View style={s.rowItem}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>
              {isRtl ? "دعم فني مخصص وسريع" : "Dedicated and fast support"}
            </Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>

          {/* Feature 5 */}
          <View style={[s.rowItem, s.rowItemLast]}>
            <View style={s.colValue}>
              <Text style={s.check}>✓</Text>
            </View>

            <Text style={s.featureText}>
              {isRtl
                ? "استخدام المميزات المميزة (مثل اختيار الفني المفضّل، حجوزات خاصة...)"
                : "Access premium tools (favorite tech selection, special bookings...)"}
            </Text>

            <View style={s.colValue}>
              <Text style={s.cross}>✕</Text>
            </View>
          </View>
        </View>

        <Text style={s.lightText}>
          {isRtl
            ? "يمكنك الاستمرار في استخدام الحساب العادي مجاناً، لكن بعض المزايا ستكون متاحة لحساب Premium فقط."
            : "You can continue using the regular account for free, but some features are only available to Premium accounts."}
        </Text>

        {/* Subscribe Button */}
        <TouchableOpacity
          style={s.primaryBtn}
          onPress={handleSubscribe}
          activeOpacity={0.9}
        >
          <Text style={s.primaryText}>
            {isRtl ? "الاشتراك الآن" : "Subscribe Now"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
