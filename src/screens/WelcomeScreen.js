import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { welcomeStyles as s } from "../styles/welcomeStyles";

const SLIDES = [
  {
    id: "tire",
    emoji: "🛞",
    title: "تبديل دولاب وإصلاح البنشر",
    text: "لو انفقع الدولاب أو صار عندك بنشر فجأة، نرسل لك أقرب فني لمكانك ليبدل أو يصلح الدولاب مباشرة.",
    bg: "#1F2933",
  },
  {
    id: "battery",
    emoji: "🔋",
    title: "شحن بطارية وإقلاع السيارة",
    text: "سيارتك ما عم تدور؟ نرسل فني بشاحن متنقل ليساعدك تقلع السيارة وتكمل طريقك بأمان.",
    bg: "#102A43",
  },
  {
    id: "tow",
    emoji: "🚛",
    title: "سحب السيارة عند الأعطال الكبيرة",
    text: "في حال توقفت السيارة بالكامل، تقدر تطلب شاحنة سحب تنقلك لأقرب مركز صيانة تثق فيه.",
    bg: "#111827",
  },
  {
    id: "fuel",
    emoji: "⛽",
    title: "توصيل الوقود لموقعك",
    text: "خلص البنزين بعيد عن المحطة؟ نوصلك الوقود لموقعك بدون ما تضطر تترك السيارة.",
    bg: "#1A202E",
  },
];

export default function WelcomeScreen({ onLoginPress, onRegisterPress }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const insets = useSafeAreaInsets();

  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const index = Math.round(
      contentOffset.x / layoutMeasurement.width
    );
    setActiveIndex(Math.min(Math.max(index, 0), SLIDES.length - 1));
  };

  return (
    <View style={s.screen}>
      {/* Header ثابت فوق */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.brand}>Car Help</Text>
        <Text style={s.title}>كل ما تحتاجه لسيارتك في مكان واحد</Text>
        <Text style={s.subtitle}>
          اسحب بين الخدمات للتعرف على ما يقدمه التطبيق، ثم تابع بتسجيل رقم
          الموبايل.
        </Text>
      </View>

      {/* Slider أفقي لكل خدمة */}
      <View style={s.sliderWrap}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {SLIDES.map((item) => (
            <View key={item.id} style={s.slidePage}>
              <View style={s.slideInner}>
                <View style={s.slideTextBlock}>
                  <Text style={s.slideTitle}>{item.title}</Text>
                  <Text style={s.slideText}>{item.text}</Text>
                </View>

                <View style={[s.imageBox, { backgroundColor: item.bg }]}>
                  {/* 
                    لاحقاً يمكنك استبدال هذا الـ Emoji بصورة حقيقية باستخدام <Image />.
                    مثلاً:
                    <Image source={require("../../assets/tire.png")} ... />
                  */}
                  <Text style={s.imageEmoji}>{item.emoji}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={s.dotsRow}>
          {SLIDES.map((_, idx) => (
            <View
              key={idx}
              style={[s.dot, idx === activeIndex && s.dotActive]}
            />
          ))}
        </View>
      </View>

      {/* Footer: أزرار الدخول / إنشاء حساب */}
      <View style={s.footer}>
        <View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "800", color: "#555" }}>
              تسجيل الدخول برقم الموبايل
            </Text>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 16,
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderWidth: 1,
              borderColor: "#E4D9F7",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#777",
                textAlign: "right",
                writingDirection: "rtl",
              }}
            >
              لا يمكن استخدام التطبيق بدون تسجيل الدخول برقم الموبايل.
            </Text>
          </View>

          <View style={{ flexDirection: "row-reverse", gap: 10 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={s.primaryBtn}
                onPress={onLoginPress}
                activeOpacity={0.9}
              >
                <Text style={s.primaryText}>تسجيل الدخول</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={s.secondaryBtn}
                onPress={onRegisterPress}
                activeOpacity={0.9}
              >
                <Text style={s.secondaryText}>إنشاء حساب جديد</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
