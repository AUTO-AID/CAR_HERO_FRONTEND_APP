import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getOrdersStyles } from "../styles/ordersStyles";
import { t } from "../services/i18n";

export default function OrdersScreen({ lang = "ar", theme = "light", onOpenDetails }) {
  const [tab, setTab] = useState("active"); // active | completed | cancelled
  const insets = useSafeAreaInsets();
  const s = getOrdersStyles(theme, lang);
  const isRtl = lang === "ar";

  const MOCK_ORDERS = [
    {
      id: "1",
      serviceType: t("tire", lang),
      providerName: lang === "ar" ? "أحمد الخالد" : "Ahmed Al-Khaled",
      date: lang === "ar" ? "اليوم - 03:45 م" : "Today - 03:45 PM",
      status: "active",
      statusLabel: lang === "ar" ? "نشط" : "Active",
      price: lang === "ar" ? "80,000 ل.س" : "80,000 SYP",
      car: "Kia Rio 2017",
    },
    {
      id: "2",
      serviceType: t("battery", lang),
      providerName: lang === "ar" ? "مركز النور للخدمات" : "Al-Noor Service Center",
      date: lang === "ar" ? "أمس - 10:30 ص" : "Yesterday - 10:30 AM",
      status: "completed",
      statusLabel: lang === "ar" ? "مكتمل" : "Completed",
      price: lang === "ar" ? "50,000 ل.س" : "50,000 SYP",
      car: "Hyundai Elantra 2019",
    },
    {
      id: "3",
      serviceType: t("fuel", lang),
      providerName: lang === "ar" ? "محطة السلام" : "Al-Salam Station",
      date: lang === "ar" ? "2025-12-10 - 08:15 م" : "2025-12-10 - 08:15 PM",
      status: "cancelled",
      statusLabel: lang === "ar" ? "ملغى" : "Cancelled",
      price: "—",
      car: "Toyota Corolla 2015",
    },
  ];

  const filtered = MOCK_ORDERS.filter((o) => o.status === tab);

  const getStatusColor = (status) => {
    if (status === "active") return "#F59E0B";
    if (status === "completed") return "#10B981";
    if (status === "cancelled") return "#EF4444";
    return s.primaryBtn?.backgroundColor || "#B57EDC";
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>{t("tabOrders", lang)}</Text>
        <Text style={s.headerSubtitle}>
          {lang === "ar"
            ? "راجع طلباتك النشطة والقديمة وتابع تفاصيل كل طلب."
            : "Review your active and old orders and track the details of each order."}
        </Text>
      </View>

      {/* Content */}
      <View style={s.content}>
        {/* Tabs */}
        <View style={s.tabsRow}>
          <TouchableOpacity
            style={[s.tabBtn, tab === "active" && s.tabBtnActive]}
            onPress={() => setTab("active")}
            activeOpacity={0.85}
          >
            <Text style={[s.tabText, tab === "active" && s.tabTextActive]}>
              {lang === "ar" ? "نشطة" : "Active"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[s.tabBtn, tab === "completed" && s.tabBtnActive]}
            onPress={() => setTab("completed")}
            activeOpacity={0.85}
          >
            <Text style={[s.tabText, tab === "completed" && s.tabTextActive]}>
              {lang === "ar" ? "مكتملة" : "Completed"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[s.tabBtn, tab === "cancelled" && s.tabBtnActive]}
            onPress={() => setTab("cancelled")}
            activeOpacity={0.85}
          >
            <Text style={[s.tabText, tab === "cancelled" && s.tabTextActive]}>
              {lang === "ar" ? "ملغاة" : "Cancelled"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* List */}
        <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator={false}>
          {filtered.length === 0 && (
            <Text style={s.emptyText}>
              {lang === "ar"
                ? "لا توجد طلبات في هذا القسم حالياً."
                : "There are no orders in this section currently."}
            </Text>
          )}

          {filtered.map((order) => (
            <TouchableOpacity
              key={order.id}
              style={s.card}
              activeOpacity={0.9}
              onPress={() => onOpenDetails?.(order)}
            >
              <View style={s.rowTop}>
                <Text style={s.serviceTitle}>{order.serviceType}</Text>
                <View
                  style={[
                    s.statusPill,
                    { backgroundColor: getStatusColor(order.status) },
                  ]}
                >
                  <Text style={s.statusText}>{order.statusLabel}</Text>
                </View>
              </View>

              <View style={s.rowMid}>
                <Text style={s.labelLine}>
                  {lang === "ar" ? "الفني / المركز: " : "Tech / Center: "}
                  {order.providerName}
                </Text>
                <Text style={s.labelLine}>
                  {lang === "ar" ? "السيارة: " : "Car: "}
                  {order.car}
                </Text>
              </View>

              <View style={s.rowBottom}>
                <Text style={s.dateText}>{order.date}</Text>
                <Text style={s.priceText}>{order.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
