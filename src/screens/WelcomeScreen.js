import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getWelcomeStyles } from "../styles/welcomeStyles";
import { t } from "../services/i18n";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const SLIDES = [
  {
    id: "slide1",
    image: require("../../assets/slide1.jpg"),
    titleKey: "welcomeSlide1Title",
    textKey: "welcomeSlide1Text",
  },
  {
    id: "slide2",
    image: require("../../assets/slide2.jpg"),
    titleKey: "welcomeSlide2Title",
    textKey: "welcomeSlide2Text",
  },
  {
    id: "slide3",
    image: require("../../assets/slide3.jpg"),
    titleKey: "welcomeSlide3Title",
    textKey: "welcomeSlide3Text",
  },
  {
    id: "slide4",
    image: require("../../assets/slide4.jpg"),
    titleKey: "welcomeSlide4Title",
    textKey: "welcomeSlide4Text",
  },
  {
    id: "slide5",
    image: require("../../assets/slide5.jpg"),
    titleKey: "welcomeSlide5Title",
    textKey: "welcomeSlide5Text",
  },
];

export default function WelcomeScreen({ lang, setLang, theme, setTheme, onLoginPress, onRegisterPress }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const insets = useSafeAreaInsets();
  const s = getWelcomeStyles(theme, lang);
  const isRtl = lang === "ar";

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / SCREEN_WIDTH);
    setActiveIndex(Math.min(Math.max(index, 0), SLIDES.length - 1));
  };

  return (
    <View style={s.screen}>
      {/* Header and Switches */}
      <View style={{ 
        flexDirection: isRtl ? "row-reverse" : "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingHorizontal: 24, 
        paddingTop: Math.max(insets.top, 20),
        paddingBottom: 10
      }}>
        <Text style={s.brand}>{t("brand", lang)}</Text>
        <View style={{ flexDirection: isRtl ? "row-reverse" : "row", gap: 10 }}>
          <TouchableOpacity 
            onPress={() => setLang(lang === "ar" ? "en" : "ar")}
            activeOpacity={0.85}
            style={{ 
              paddingHorizontal: 10, 
              paddingVertical: 6, 
              borderRadius: 12, 
              backgroundColor: theme === "dark" ? "#2B243C" : "#E4D9F7" 
            }}
          >
            <Text style={{ fontSize: 11, fontWeight: "800", color: theme === "dark" ? "#C394E3" : "#B57EDC" }}>
              {lang === "ar" ? "English" : "العربية"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            activeOpacity={0.85}
            style={{ 
              paddingHorizontal: 10, 
              paddingVertical: 6, 
              borderRadius: 12, 
              backgroundColor: theme === "dark" ? "#2B243C" : "#E4D9F7" 
            }}
          >
            <Text style={{ fontSize: 11 }}>{theme === "dark" ? "☀️" : "🌙"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={s.header}>
        <Text style={s.title}>{t("welcomeTitle", lang)}</Text>
        <Text style={s.subtitle}>{t("welcomeSubtitle", lang)}</Text>
      </View>

      {/* Slider */}
      <View style={s.sliderWrap}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          {SLIDES.map((item) => (
            <View key={item.id} style={[s.slidePage, { width: SCREEN_WIDTH - 32 }]}>
              <View style={s.slideInner}>
                <View style={s.slideTextBlock}>
                  <Text style={s.slideTitle}>{t(item.titleKey, lang)}</Text>
                  <Text style={s.slideText}>{t(item.textKey, lang)}</Text>
                </View>

                <View style={s.imageBox}>
                  <Image source={item.image} style={s.image} />
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

      {/* Footer */}
      <View style={s.footer}>
        <View style={{ flexDirection: isRtl ? "row-reverse" : "row", justifyContent: "space-between", marginBottom: 4 }}>
          <Text style={{ fontSize: 13, fontWeight: "800", color: theme === "dark" ? "#AAAAAA" : "#555" }}>
            {t("reqLogin", lang)}
          </Text>
        </View>

        <View style={{ gap: 8 }}>
          <View style={{
            backgroundColor: theme === "dark" ? "#1F1A2B" : "#fff",
            borderRadius: 16,
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: theme === "dark" ? "#3D354E" : "#E4D9F7",
          }}>
            <Text style={{
              fontSize: 12,
              color: theme === "dark" ? "#AAAAAA" : "#777",
              textAlign: isRtl ? "right" : "left",
              writingDirection: isRtl ? "rtl" : "ltr",
            }}>
              {t("noAppWithoutLogin", lang)}
            </Text>
          </View>

          <View style={{ flexDirection: isRtl ? "row-reverse" : "row", gap: 10 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={s.primaryBtn}
                onPress={onLoginPress}
                activeOpacity={0.9}
              >
                <Text style={s.primaryText}>{t("login", lang)}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={s.secondaryBtn}
                onPress={onRegisterPress}
                activeOpacity={0.9}
              >
                <Text style={s.secondaryText}>{t("register", lang)}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
