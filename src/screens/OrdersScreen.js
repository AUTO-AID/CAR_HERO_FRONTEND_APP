import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ordersStyles as s } from "../styles/ordersStyles";
import { COLORS } from "../theme/colors";

const MOCK_ORDERS = [
  {
    id: "1",
    serviceType: "استبدال دولاب",
    providerName: "أحمد الخالد",
    date: "اليوم - 03:45 م",
    status: "active", // active | completed | cancelled
    statusLabel: "نشط",
    price: "80,000 ل.س",
    car: "Kia Rio 2017",
  },
  {
    id: "2",
    serviceType: "شحن بطارية",
    providerName: "مركز النور للخدمات",
    date: "أمس - 10:30 ص",
    status: "completed",
    statusLabel: "مكتمل",
    price: "50,000 ل.س",
    car: "Hyundai Elantra 2019",
  },
  {
    id: "3",
    serviceType: "تعبئة وقود",
    providerName: "محطة السلام",
    date: "2025-12-10 - 08:15 م",
    status: "cancelled",
    statusLabel: "ملغى",
    price: "—",
    car: "Toyota Corolla 2015",
  },
];

export default function OrdersScreen({ onOpenDetails }) {
  const [tab, setTab] = useState("active"); // active | completed | cancelled
  const insets = useSafeAreaInsets();
  const filtered = MOCK_ORDERS.filter((o) => o.status === tab);

  // 👇👇👇 هنا نستدعي API لجلب الطلبات
  //
  // useEffect(() => {
  //   fetch("https://api.example.com/user/orders")
  //     .then(res => res.json())
  //     .then(data => setOrders(data))
  //     .catch(err => console.log(err));
  // }, []);

  const getStatusColor = (status) => {
    if (status === "active") return "#F59E0B";
    if (status === "completed") return "#10B981";
    if (status === "cancelled") return "#EF4444";
    return COLORS.primary;
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>طلباتي</Text>
        <Text style={s.headerSubtitle}>
          راجع طلباتك النشطة والقديمة وتابع تفاصيل كل طلب.
        </Text>
      </View>

      {/* Content */}
      <View style={s.content}>
        {/* Tabs */}
        <View style={s.tabsRow}>
          <TouchableOpacity
            style={[s.tabBtn, tab === "active" && s.tabBtnActive]}
            onPress={() => setTab("active")}
          >
            <Text style={[s.tabText, tab === "active" && s.tabTextActive]}>
              نشطة
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[s.tabBtn, tab === "completed" && s.tabBtnActive]}
            onPress={() => setTab("completed")}
          >
            <Text style={[s.tabText, tab === "completed" && s.tabTextActive]}>
              مكتملة
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[s.tabBtn, tab === "cancelled" && s.tabBtnActive]}
            onPress={() => setTab("cancelled")}
          >
            <Text style={[s.tabText, tab === "cancelled" && s.tabTextActive]}>
              ملغاة
            </Text>
          </TouchableOpacity>
        </View>

        {/* List */}
        <ScrollView contentContainerStyle={s.list}>
          {filtered.length === 0 && (
            <Text style={s.emptyText}>
              لا توجد طلبات في هذا القسم حالياً.
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
                  الفني / المركز: {order.providerName}
                </Text>
                <Text style={s.labelLine}>السيارة: {order.car}</Text>
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
