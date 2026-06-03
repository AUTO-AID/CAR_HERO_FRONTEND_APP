import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getPaymentStyles } from "../styles/paymentStyles";
import { t } from "../services/i18n";

export default function PaymentMethodsScreen({ lang = "ar", theme = "light", onBack }) {
  const insets = useSafeAreaInsets();
  const s = getPaymentStyles(theme, lang);
  const isRtl = lang === "ar";

  const MOCK_METHODS = [
    {
      id: "m1",
      type: "cash",
      name: isRtl ? "الدفع نقداً عند إتمام الخدمة" : "Cash payment on completion",
      description: isRtl ? "متاح دائماً لكل المستخدمين." : "Always available to all users.",
      isDefault: true,
    },
    {
      id: "m2",
      type: "card",
      name: isRtl ? "بطاقة فيزا منتهية بـ 1234" : "Visa ending in 1234",
      description: isRtl ? "سيتم خصم المبلغ تلقائياً بعد الخدمة." : "Amount will be automatically charged after service.",
      isDefault: false,
    },
  ];

  const [methods, setMethods] = useState(MOCK_METHODS);

  const handleSetDefault = (id) => {
    const next = methods.map((m) => ({
      ...m,
      isDefault: m.id === id,
    }));
    setMethods(next);
  };

  const handleDelete = (id) => {
    Alert.alert(
      isRtl ? "تأكيد" : "Confirm",
      isRtl ? "هل أنت متأكد من حذف طريقة الدفع هذه؟" : "Are you sure you want to delete this payment method?",
      [
        { text: isRtl ? "إلغاء" : "Cancel", style: "cancel" },
        {
          text: isRtl ? "حذف" : "Delete",
          style: "destructive",
          onPress: () => {
            const next = methods.filter((m) => m.id !== id);
            setMethods(next);
          },
        },
      ]
    );
  };

  const handleAdd = () => {
    Alert.alert(
      isRtl ? "إضافة طريقة دفع" : "Add Payment Method",
      isRtl
        ? "لاحقاً يمكن إضافة شاشة لإدخال بيانات البطاقة أو ربط محفظة إلكترونية."
        : "Later we can add a screen to input card details or link an e-wallet."
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

          <Text style={s.headerTitle}>{t("paymentMethods", lang)}</Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          {isRtl
            ? "إدارة طرق الدفع المتاحة لاستخدامها في الطلبات."
            : "Manage available payment methods to use in orders."}
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
                    <Text style={s.defaultText}>{isRtl ? "افتراضية" : "Default"}</Text>
                  </View>
                )}
              </View>

              <Text style={s.metaText}>{m.description}</Text>

              <View style={s.actionsRow}>
                <TouchableOpacity
                  style={s.actionBtn}
                  onPress={() =>
                    Alert.alert(
                      isRtl ? "التفاصيل" : "Details",
                      isRtl ? "لاحقاً يمكن عرض تفاصيل البطاقة أو وسيلة الدفع." : "Later, view card or payment details."
                    )
                  }
                  activeOpacity={0.8}
                >
                  <Text style={s.actionText}>{isRtl ? "تفاصيل" : "Details"}</Text>
                </TouchableOpacity>

                {m.type !== "cash" && (
                  <TouchableOpacity
                    style={s.actionBtn}
                    onPress={() => handleDelete(m.id)}
                    activeOpacity={0.8}
                  >
                    <Text style={s.actionText}>{isRtl ? "حذف" : "Delete"}</Text>
                  </TouchableOpacity>
                )}

                {!m.isDefault && (
                  <TouchableOpacity
                    style={s.actionBtn}
                    onPress={() => handleSetDefault(m.id)}
                    activeOpacity={0.8}
                  >
                    <Text style={s.actionText}>{isRtl ? "تعيين كافتراضية" : "Set Default"}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={s.addButton} onPress={handleAdd} activeOpacity={0.9}>
          <Text style={s.addButtonText}>
            {isRtl ? "إضافة طريقة دفع جديدة" : "Add New Payment Method"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
