import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getWelcomeStyles = (theme, lang) => {
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.bg,
    },

    header: {
      paddingBottom: 16,
      paddingHorizontal: 24,
    },

    brand: {
      color: colors.primary,
      fontSize: 18,
      fontWeight: "900",
      textAlign: isRtl ? "right" : "left",
    },

    title: {
      marginTop: 8,
      color: colors.text,
      fontSize: 22,
      fontWeight: "900",
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    subtitle: {
      marginTop: 4,
      color: colors.muted,
      fontSize: 13,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    sliderWrap: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 12,
    },

    slidePage: {
      alignItems: "center",
    },

    slideInner: {
      width: "100%",
    },

    slideTextBlock: {
      marginBottom: 12,
    },

    slideTitle: {
      fontSize: 18,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    slideText: {
      fontSize: 13,
      color: colors.muted,
      marginTop: 4,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    imageBox: {
      marginTop: 12,
      borderRadius: 24,
      backgroundColor: colors.card,
      overflow: "hidden",
      height: 260,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.border,
    },

    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },

    dotsRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 6,
      marginTop: 12,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.border,
    },
    dotActive: {
      width: 18,
      backgroundColor: colors.primary,
    },

    footer: {
      paddingHorizontal: 16,
      paddingBottom: 22,
      gap: 10,
    },

    primaryBtn: {
      backgroundColor: colors.primary,
      borderRadius: 18,
      paddingVertical: 14,
      alignItems: "center",
      justifyContent: "center",
    },
    primaryText: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 15,
    },

    secondaryBtn: {
      backgroundColor: colors.inputBg,
      borderRadius: 18,
      paddingVertical: 13,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.border,
    },
    secondaryText: {
      color: colors.primary,
      fontWeight: "900",
      fontSize: 15,
    },

    note: {
      fontSize: 11,
      color: colors.muted,
      textAlign: "center",
      marginTop: 4,
      writingDirection: isRtl ? "rtl" : "ltr",
    },
  });
};
