import React, { useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { pointsStyles as s } from "../styles/pointsStyles";
import { COLORS } from "../theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// بيانات تجريبية
const MOCK_POINTS_BALANCE = 2450;
const POINT_VALUE = 0.05; // قيمة النقطة الواحدة (مثال)
const MOCK_LEVEL = "عادي"; // لاحقاً: "Premium"

const MOCK_TRANSACTIONS = [
  {
    id: "tx1",
    type: "earn", // earn | spend
    title: "طلب خدمة: ميكانيك طارئ",
    description: "حصلت على نقاط مقابل إكمال الطلب.",
    date: "اليوم - 01:15 م",
    points: 120,
  },
  {
    id: "tx2",
    type: "earn",
    title: "طلب خدمة: تبديل دولاب",
    description: "نقاط ترحيبية للطلب الجديد.",
    date: "أمس - 10:40 ص",
    points: 80,
  },
  {
    id: "tx3",
    type: "spend",
    title: "استخدام نقاط للحصول على خصم",
    description: "تم استخدام النقاط في خصم على الطلب.",
    date: "2025-12-10",
    points: -150,
  },
];

export default function PointsScreen() {
  const insets = useSafeAreaInsets();
  const totalValue = useMemo(
    () => MOCK_POINTS_BALANCE * POINT_VALUE,
    []
  );

  const handleUsePoints = () => {
    // هذه مجرد محاكاة: لاحقاً سيتم استدعاؤها من شاشة الدفع للطلب
    Alert.alert(
      "استخدام النقاط",
      "لاحقاً يمكن ربط هذه الشاشة بصفحة تأكيد الطلب لاختيار عدد النقاط المستخدمة."
    );
  };

  const handleHowToEarn = () => {
    Alert.alert(
      "كيف أزيد نقاطي؟",
      "- كل طلب خدمة يعطيك نقاط.\n- العروض الخاصة.\n- الاشتراك في Premium قد يمنحك نقاط إضافية."
    );
  };

  // 👇👇👇 هنا نستدعي API لجلب رصيد النقاط وسجل الحركات
  //
  // useEffect(() => {
  //   fetch("https://api.example.com/wallet/points")
  //     .then(res => res.json())
  //     .then(data => {
  //       // setBalance(data.balance);
  //       // setTransactions(data.history);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>نظام النقاط</Text>
        <Text style={s.headerSubtitle}>
          اجمع النقاط من طلباتك، واستبدلها بخصومات على الخدمات.
        </Text>
      </View>

      <View style={s.content}>
        {/* بطاقة الرصيد */}
        <View style={s.balanceCard}>
          <View style={s.balanceRow}>
            <View>
              <Text style={s.balanceNumber}>{MOCK_POINTS_BALANCE}</Text>
              <Text style={s.balanceLabel}>رصيد النقاط الحالي</Text>
            </View>

            <View>
              <Text style={s.valueText}>
                تقريباً ≈ {totalValue.toFixed(1)} وحدة عملة
              </Text>
              <Text style={s.balanceLabel}>
                قيمة تقديرية حسب سعر النقطة في العروض.
              </Text>
            </View>
          </View>

          <View style={s.levelBadge}>
            <Text style={s.levelText}>مستوى الحساب: {MOCK_LEVEL}</Text>
          </View>

          <Text style={s.hintText}>
            عند الاشتراك في Premium يمكن أن تحصل على نقاط أكثر لكل طلب.
          </Text>

          <View style={s.actionsRow}>
            <TouchableOpacity
              style={s.secondaryBtn}
              onPress={handleHowToEarn}
              activeOpacity={0.9}
            >
              <Text style={s.secondaryText}>كيف أزيد نقاطي؟</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.primaryBtn}
              onPress={handleUsePoints}
              activeOpacity={0.9}
            >
              <Text style={s.primaryText}>استخدام النقاط في الدفع</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* سجل الحركات */}
        <Text style={s.sectionTitle}>سجل النقاط</Text>

        <ScrollView
          contentContainerStyle={s.list}
          showsVerticalScrollIndicator={false}
        >
          {MOCK_TRANSACTIONS.map((tx) => {
            const isEarn = tx.type === "earn";
            const sign = tx.points > 0 ? "+" : "";
            const color = isEarn ? "#10B981" : "#EF4444";

            return (
              <View key={tx.id} style={s.txCard}>
                <View style={s.txRow}>
                  <Text style={s.txTitle}>{tx.title}</Text>
                  <Text style={s.txDate}>{tx.date}</Text>
                </View>

                <Text style={s.txSub}>{tx.description}</Text>

                <View
                  style={[
                    s.txRow,
                    { marginTop: 6, alignItems: "flex-end" },
                  ]}
                >
                  <Text
                    style={[
                      s.txPoints,
                      { color, textAlign: "right", writingDirection: "rtl" },
                    ]}
                  >
                    {sign}
                    {Math.abs(tx.points)} نقطة
                  </Text>

                  <Text style={s.txSub}>
                    {isEarn ? "زيادة" : "استخدام"} نقاط
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
