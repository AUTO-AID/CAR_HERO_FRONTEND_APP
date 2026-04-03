import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import { homeStyles } from "../styles/homeStyles";
import { COLORS } from "../theme/colors";

const SERVICES = [
  { id: "tire", title: "استبدال دولاب", description: "تبديل الإطارات على الطريق", icon: "🛞" },
  { id: "battery", title: "شحن بطارية", description: "إقلاع السيارة ببطارية ضعيفة", icon: "🔋" },
  { id: "mechanic", title: "ميكانيك طارئ", description: "فحص وإصلاح أعطال مفاجئة", icon: "🛠️" },
  { id: "tow", title: "شاحنة سحب", description: "سحب السيارة في حال التعطل الكامل", icon: "🚛" },
  { id: "fuel", title: "تعبئة وقود", description: "توصيل الوقود لموقعك", icon: "⛽" },
  { id: "emergency", title: "خدمات الطوارئ", description: "اتصال بالإسعاف أو الدفاع المدني", icon: "🚨" },
];

export default function HomeScreen({
  onSelectService,
  onOpenMapExplore,
  onOpenOffers,
}) {
  const insets = useSafeAreaInsets();

  const handleServicePress = (service) => {
    console.log("اختيار الخدمة:", service.id);

    //  نستدعي API
    // مثال:
    // fetch("https://api.example.com/create-request", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     serviceType: service.id,
    //     // location, userId, carInfo ...
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("تم إنشاء الطلب بنجاح", data);
    //     // navigation.navigate("Tracking", { requestId: data.id })
    //   })
    //   .catch((error) => console.log(error));

    onSelectService?.(service);
  };

  return (
    <View style={homeStyles.screen}>
      <HomeHeader style={{ paddingTop: Math.max(insets.top, 20) }} />
      {/* زر خريطة الفنيين */}
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 8,
          marginBottom: 4,
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={onOpenMapExplore}
          activeOpacity={0.85}
          style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: 6,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 16,
            backgroundColor: "#F5F0FF",
            borderWidth: 1,
            borderColor: "#E3D8F8",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "800", color: COLORS.primary }}>
            عرض الفنيين على الخريطة
          </Text>
          <Text>🗺️</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 6,
          marginBottom: 6,
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={onOpenOffers}
          activeOpacity={0.85}
          style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: 6,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 16,
            backgroundColor: "#FFF7ED",
            borderWidth: 1,
            borderColor: "#FED7AA",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "800", color: "#C05621" }}>
            عروض وخصومات متاحة
          </Text>
          <Text>🎁</Text>
        </TouchableOpacity>
      </View>

      <View style={homeStyles.content}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
          <View style={homeStyles.gridContainer}>
            {SERVICES.map((s) => (
              <TouchableOpacity
                key={s.id}
                style={homeStyles.card}
                activeOpacity={0.85}
                onPress={() => handleServicePress(s)}
              >
                <View style={homeStyles.iconWrap}>
                  <Text style={homeStyles.icon}>{s.icon}</Text>
                </View>

                <View style={homeStyles.textWrap}>
                  <Text style={homeStyles.title}>{s.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
