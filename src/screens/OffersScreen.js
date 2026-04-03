import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { offersStyles as s } from "../styles/offersStyles";

// بيانات تجريبية للعروض
const MOCK_OFFERS = [
  {
    id: "o1",
    tag: "خصم 20%",
    isHot: true,
    title: "خصم على تبديل الزيت في مركز السعادة",
    subtitle: "عند حجز صيانة دورية عبر التطبيق.",
    expiresAt: "حتى 2025-12-30",
  },
  {
    id: "o2",
    tag: "غسيل مجاني",
    isHot: false,
    title: "غسيل خارجي مجاني عند طلب ميكانيك طارئ",
    subtitle: "يطبق على أول طلب فقط.",
    expiresAt: "حتى 2026-01-15",
  },
  {
    id: "o3",
    tag: "نقاط إضافية",
    isHot: false,
    title: "احصل على 2x نقاط مع حساب Premium",
    subtitle: "لكل طلب يتم عن طريق التطبيق.",
    expiresAt: "عرض مستمر",
  },
];

export default function OffersScreen({ onBack }) {
  const insets = useSafeAreaInsets();
  const handleUseOffer = (offer) => {
    console.log("USE OFFER PAYLOAD:", offer);

    // 👇👇👇 هنا نستدعي API لتطبيق العرض على طلب / حساب المستخدم
    //
    // fetch("https://api.example.com/offers/use", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ offerId: offer.id }),
    // });

    alert(`(تجريبي) تم اختيار العرض: ${offer.title}`);
  };

  // 👇👇👇 هنا نستدعي API لجلب العروض
  //
  // useEffect(() => {
  //   fetch("https://api.example.com/offers")
  //     .then(res => res.json())
  //     .then(data => setOffers(data))
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onBack}>
            <Text style={s.backText}>رجوع</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>العروض والإعلانات</Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          أحدث الخصومات والعروض من مراكز الصيانة وغسيل السيارات.
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
                    <Text style={s.badgeText}>عرض مميز</Text>
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
                  <Text style={s.primaryText}>استخدام العرض</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
