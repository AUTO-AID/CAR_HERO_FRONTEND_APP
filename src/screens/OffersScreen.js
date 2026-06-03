import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getOffersStyles } from "../styles/offersStyles";
import { t } from "../services/i18n";

export default function OffersScreen({ lang = "ar", theme = "light", onBack }) {
  const insets = useSafeAreaInsets();
  const s = getOffersStyles(theme, lang);
  const isRtl = lang === "ar";

  const MOCK_OFFERS = [
    {
      id: "o1",
      tag: isRtl ? "خصم 20%" : "20% OFF",
      isHot: true,
      title: isRtl ? "خصم على تبديل الزيت في مركز السعادة" : "Oil Swap Discount at Al-Saada Center",
      subtitle: isRtl ? "عند حجز صيانة دورية عبر التطبيق." : "When booking periodic maintenance via the app.",
      expiresAt: isRtl ? "حتى 2025-12-30" : "Until 2025-12-30",
    },
    {
      id: "o2",
      tag: isRtl ? "غسيل مجاني" : "Free Wash",
      isHot: false,
      title: isRtl ? "غسيل خارجي مجاني عند طلب ميكانيك طارئ" : "Free exterior wash with emergency mechanic",
      subtitle: isRtl ? "يطبق على أول طلب فقط." : "Applies to first request only.",
      expiresAt: isRtl ? "حتى 2026-01-15" : "Until 2026-01-15",
    },
    {
      id: "o3",
      tag: isRtl ? "نقاط إضافية" : "Bonus Points",
      isHot: false,
      title: isRtl ? "احصل على 2x نقاط مع حساب Premium" : "Get 2x points with a Premium account",
      subtitle: isRtl ? "لكل طلب يتم عن طريق التطبيق." : "For every request done via the app.",
      expiresAt: isRtl ? "عرض مستمر" : "Ongoing offer",
    },
  ];

  const handleUseOffer = (offer) => {
    Alert.alert(
      isRtl ? "تم" : "Done",
      isRtl ? `تم اختيار العرض: ${offer.title}` : `Offer selected: ${offer.title}`
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
            {isRtl ? "العروض والإعلانات" : "Offers & Promos"}
          </Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          {isRtl
            ? "أحدث الخصومات والعروض من مراكز الصيانة وغسيل السيارات."
            : "Latest discounts and offers from maintenance and car wash centers."}
        </Text>
      </View>

      {/* Content */}
      <View style={s.content}>
        <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator={false}>
          {MOCK_OFFERS.map((offer) => (
            <View key={offer.id} style={s.card}>
              <View style={s.tagRow}>
                <View style={s.tag}>
                  <Text style={s.tagText}>{offer.tag}</Text>
                </View>

                {offer.isHot && (
                  <View style={s.badge}>
                    <Text style={s.badgeText}>{isRtl ? "عرض مميز" : "Hot Offer"}</Text>
                  </View>
                )}
              </View>

              <Text style={s.title}>{offer.title}</Text>
              <Text style={s.subtitle}>{offer.subtitle}</Text>

              <View style={s.footerRow}>
                <Text style={s.expiresText}>{offer.expiresAt}</Text>

                <TouchableOpacity
                  style={s.primaryBtn}
                  onPress={() => handleUseOffer(offer)}
                  activeOpacity={0.9}
                >
                  <Text style={s.primaryText}>
                    {isRtl ? "استخدام العرض" : "Use Offer"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
