import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ordersStyles as s } from "../styles/ordersStyles";

export default function ProfileScreen({
  onOpenVehicles,
  onOpenBooking,
  onOpenWashPlan,
  onOpenPremium,
  onOpenAddresses,
  onOpenPayments,
}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={s.screen}>
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>حسابي الشخصي</Text>
        <Text style={s.headerSubtitle}>
          عدّل بياناتك، سياراتك، عناوينك، وإعدادات التطبيق من هنا.
        </Text>
      </View>

      <ScrollView
        style={s.content}
        contentContainerStyle={{ paddingBottom: 120 + Math.max(insets.bottom, 10) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={s.card}>
          <Text style={{ fontSize: 15, fontWeight: "900", textAlign: "right" }}>الاسم</Text>
          <Text style={{ fontSize: 13, color: "#777", textAlign: "right" }}>
            سيتم جلبه من بيانات المستخدم بعد الربط مع الـ API.
          </Text>
        </View>

        <View style={s.card}>
          <Text style={{ fontSize: 15, fontWeight: "900", textAlign: "right" }}>رقم الموبايل</Text>
          <Text style={{ fontSize: 13, color: "#777", textAlign: "right" }}>
            نفس الرقم المستخدم في التسجيل.
          </Text>
        </View>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderStyle: "dashed", borderColor: "#D7CCF5" }]}
          onPress={onOpenVehicles}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: "right", marginBottom: 4 }}>
            سياراتي
          </Text>
          <Text style={{ fontSize: 12, color: "#777", textAlign: "right" }}>
            إدارة السيارات المسجلة، تعديلها، وتحديد السيارة الافتراضية للطلبات.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: "#E4D9F7" }]}
          onPress={onOpenBooking}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: "right" }}>الحجوزات المسبقة</Text>
          <Text style={{ fontSize: 12, color: "#777", textAlign: "right" }}>
            إدارة الحجوزات للصيانة الدورية وغسيل السيارة.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: "#E4D9F7" }]}
          onPress={onOpenWashPlan}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: "right" }}>غسل السيارة الدوري</Text>
          <Text style={{ fontSize: 12, color: "#777", textAlign: "right" }}>
            اختر خطة لغسل سيارتك بشكل منتظم.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: "#E4D9F7", backgroundColor: "#F9F5FF" }]}
          onPress={onOpenPremium}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: "right", marginBottom: 4 }}>
            ترقية إلى Premium
          </Text>
          <Text style={{ fontSize: 12, color: "#777", textAlign: "right" }}>
            مزايا إضافية مثل أولوية في الطلبات واختيار الفني الأعلى تقييماً.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: "#E4D9F7" }]}
          onPress={onOpenAddresses}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: "right" }}>عناويني</Text>
          <Text style={{ fontSize: 12, color: "#777", textAlign: "right" }}>
            إدارة عناوين المنزل والعمل لاستخدامها في الطلبات.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.card, { borderWidth: 1, borderColor: "#E4D9F7" }]}
          onPress={onOpenPayments}
          activeOpacity={0.9}
        >
          <Text style={{ fontSize: 14, fontWeight: "900", textAlign: "right" }}>طرق الدفع</Text>
          <Text style={{ fontSize: 12, color: "#777", textAlign: "right" }}>
            (Placeholder حالياً) لاحقاً: بطاقات/محفظة/… إلخ
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
