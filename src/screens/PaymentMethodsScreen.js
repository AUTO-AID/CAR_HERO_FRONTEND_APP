import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { paymentStyles as s } from "../styles/paymentStyles";

// بيانات تجريبية
const MOCK_METHODS = [
  {
    id: "m1",
    type: "cash",
    name: "الدفع نقداً عند إتمام الخدمة",
    description: "متاح دائماً لكل المستخدمين.",
    isDefault: true,
  },
  {
    id: "m2",
    type: "card",
    name: "بطاقة فيزا منتهية بـ 1234",
    description: "سيتم خصم المبلغ تلقائياً بعد الخدمة.",
    isDefault: false,
  },
];

export default function PaymentMethodsScreen({ onBack }) {
  const [methods, setMethods] = useState(MOCK_METHODS);
  const insets = useSafeAreaInsets();

  const handleSetDefault = (id) => {
    const next = methods.map((m) => ({
      ...m,
      isDefault: m.id === id,
    }));

    // 👇👇👇 هنا نستدعي API لتعيين طريقة الدفع الافتراضية
    //
    // fetch("https://api.example.com/user/payment/default", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ methodId: id }),
    // });

    setMethods(next);
  };

  const handleDelete = (id) => {
    Alert.alert("تأكيد", "هل أنت متأكد من حذف طريقة الدفع هذه؟", [
      { text: "إلغاء", style: "cancel" },
      {
        text: "حذف",
        style: "destructive",
        onPress: () => {
          const next = methods.filter((m) => m.id !== id);

          // 👇👇👇 هنا نستدعي API لحذف طريقة الدفع
          //
          // fetch(`https://api.example.com/user/payment/${id}`, {
          //   method: "DELETE",
          // });

          setMethods(next);
        },
      },
    ]);
  };

  const handleAdd = () => {
    Alert.alert(
      "إضافة طريقة دفع",
      "لاحقاً يمكن إضافة شاشة لإدخال بيانات البطاقة أو ربط محفظة إلكترونية."
    );
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onBack}>
            <Text style={s.backText}>رجوع</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>طرق الدفع</Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          إدارة طرق الدفع المتاحة لاستخدامها في الطلبات.
        </Text>
      </View>

      {/* Content */}
      <View style={s.content}>
        <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator={false}>
          {methods.map((m) => (
            <View key={m.id} style={s.card}>
              <View style={s.row}>
                <Text style={s.methodName}>{m.name}</Text>
                {m.isDefault && (
                  <View style={s.defaultBadge}>
                    <Text style={s.defaultText}>افتراضية</Text>
                  </View>
                )}
              </View>

              <Text style={s.metaText}>{m.description}</Text>

              <View style={s.actionsRow}>
                <TouchableOpacity
                  style={s.actionBtn}
                  onPress={() =>
                    Alert.alert(
                      "التفاصيل",
                      "لاحقاً يمكن عرض تفاصيل البطاقة أو وسيلة الدفع."
                    )
                  }
                >
                  <Text style={s.actionText}>تفاصيل</Text>
                </TouchableOpacity>

                {m.type !== "cash" && (
                  <TouchableOpacity
                    style={s.actionBtn}
                    onPress={() => handleDelete(m.id)}
                  >
                    <Text style={s.actionText}>حذف</Text>
                  </TouchableOpacity>
                )}

                {!m.isDefault && (
                  <TouchableOpacity
                    style={s.actionBtn}
                    onPress={() => handleSetDefault(m.id)}
                  >
                    <Text style={s.actionText}>تعيين كافتراضية</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={s.addButton}
          onPress={handleAdd}
          activeOpacity={0.9}
        >
          <Text style={s.addButtonText}>إضافة طريقة دفع جديدة</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
