import React, { useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { getPointsStyles } from "../styles/pointsStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "../services/i18n";

// بيانات تجريبية ثابتة
const MOCK_POINTS_BALANCE = 2450;
const POINT_VALUE = 0.05; // قيمة النقطة الواحدة

export default function PointsScreen({ theme = "light", lang = "ar" }) {
  const insets = useSafeAreaInsets();
  const s = useMemo(() => getPointsStyles(theme, lang), [theme, lang]);

  const levelLabel = useMemo(() => t("levelNormal", lang), [lang]);

  const totalValue = useMemo(
    () => MOCK_POINTS_BALANCE * POINT_VALUE,
    []
  );

  const mockTransactions = useMemo(() => {
    if (lang === "en") {
      return [
        {
          id: "tx1",
          type: "earn",
          title: "Service Request: Emergency Mechanic",
          description: "Earned points for completing the order.",
          date: "Today - 01:15 PM",
          points: 120,
        },
        {
          id: "tx2",
          type: "earn",
          title: "Service Request: Tire Replacement",
          description: "Welcome points for the new order.",
          date: "Yesterday - 10:40 AM",
          points: 80,
        },
        {
          id: "tx3",
          type: "spend",
          title: "Redeemed points for discount",
          description: "Points used as a discount on the order.",
          date: "2025-12-10",
          points: -150,
        },
      ];
    }
    return [
      {
        id: "tx1",
        type: "earn",
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
  }, [lang]);

  const handleUsePoints = () => {
    Alert.alert(
      t("pointsAlertTitle", lang),
      t("pointsAlertBody", lang)
    );
  };

  const handleHowToEarn = () => {
    Alert.alert(
      t("howToEarnAlertTitle", lang),
      t("howToEarnAlertBody", lang)
    );
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>{t("pointsSystem", lang)}</Text>
        <Text style={s.headerSubtitle}>
          {t("pointsHeaderSubtitle", lang)}
        </Text>
      </View>

      <View style={s.content}>
        {/* بطاقة الرصيد */}
        <View style={s.balanceCard}>
          <View style={s.balanceRow}>
            <View>
              <Text style={s.balanceNumber}>{MOCK_POINTS_BALANCE}</Text>
              <Text style={s.balanceLabel}>{t("currentPointsBalance", lang)}</Text>
            </View>

            <View>
              <Text style={s.valueText}>
                {t("approximateValue", lang).replace("{value}", totalValue.toFixed(1))}
              </Text>
              <Text style={s.balanceLabel}>
                {t("estimatedValueDesc", lang)}
              </Text>
            </View>
          </View>

          <View style={s.levelBadge}>
            <Text style={s.levelText}>
              {t("accountLevelLabel", lang).replace("{level}", levelLabel)}
            </Text>
          </View>

          <Text style={s.hintText}>
            {t("pointsPremiumHint", lang)}
          </Text>

          <View style={s.actionsRow}>
            <TouchableOpacity
              style={s.secondaryBtn}
              onPress={handleHowToEarn}
              activeOpacity={0.9}
            >
              <Text style={s.secondaryText}>{t("howToIncreasePoints", lang)}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.primaryBtn}
              onPress={handleUsePoints}
              activeOpacity={0.9}
            >
              <Text style={s.primaryText}>{t("usePointsInPayment", lang)}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* سجل الحركات */}
        <Text style={s.sectionTitle}>{t("pointsHistory", lang)}</Text>

        <ScrollView
          contentContainerStyle={s.list}
          showsVerticalScrollIndicator={false}
        >
          {mockTransactions.map((tx) => {
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
                      { color, textAlign: lang === "ar" ? "right" : "left", writingDirection: lang === "ar" ? "rtl" : "ltr" },
                    ]}
                  >
                    {sign}
                    {Math.abs(tx.points)} {t("pointsUnit", lang)}
                  </Text>

                  <Text style={s.txSub}>
                    {isEarn ? t("pointsIncrease", lang) : t("pointsUse", lang)} {t("pointsUnit", lang)}
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

