import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getLocationStyles = (theme, lang) => {
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.bg,
    },

    header: {
      backgroundColor: colors.primary,
      paddingBottom: 24,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 28,
      borderBottomRightRadius: 28,
    },

    headerTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "900",
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    headerSubtitle: {
      marginTop: 6,
      color: "#F0E7FF",
      fontSize: 13,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 18,
    },

    card: {
      backgroundColor: colors.card,
      borderRadius: 18,
      padding: 16,
      marginBottom: 14,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 2,
      borderWidth: 1,
      borderColor: colors.border,
    },

    iconCircle: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: colors.circle,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
      alignSelf: "center",
    },

    iconEmoji: {
      fontSize: 32,
    },

    title: {
      fontSize: 16,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginBottom: 6,
    },

    text: {
      fontSize: 13,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginBottom: 10,
    },

    bulletRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 6,
      marginTop: 6,
    },

    bulletDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.primary,
      marginTop: 6,
    },

    bulletText: {
      fontSize: 12,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      flex: 1,
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    footer: {
      paddingHorizontal: 16,
      paddingBottom: 20,
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
      fontSize: 14,
    },

    note: {
      fontSize: 11,
      color: colors.muted,
      textAlign: "center",
      writingDirection: isRtl ? "rtl" : "ltr",
    },
  });
};
