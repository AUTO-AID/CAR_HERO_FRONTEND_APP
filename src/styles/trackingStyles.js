import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getTrackingStyles = (theme, lang) => {
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.bg,
    },

    header: {
      backgroundColor: colors.primary,
      paddingBottom: 18,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 28,
      borderBottomRightRadius: 28,
    },
    headerRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerTitle: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 18,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },
    backBtn: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 12,
      backgroundColor: "rgba(17,17,17,0.18)",
    },
    backText: {
      color: "#fff",
      fontWeight: "800",
    },

    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 14,
    },

    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 14,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 2,
      borderWidth: 1,
      borderColor: colors.border,
    },

    row: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
    },
    iconCircle: {
      width: 46,
      height: 46,
      borderRadius: 23,
      backgroundColor: colors.circle,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: isRtl ? 10 : 0,
      marginRight: isRtl ? 0 : 10,
    },
    iconText: {
      fontSize: 26,
    },

    title: {
      fontSize: 15,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },
    sub: {
      fontSize: 12,
      color: colors.muted,
      marginTop: 4,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    sectionTitle: {
      fontSize: 14,
      fontWeight: "900",
      color: colors.text,
      marginBottom: 8,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    stepsRow: {
      flexDirection: "column",
      gap: 8,
    },
    stepItem: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      gap: 8,
    },
    stepBullet: {
      width: 10,
      height: 10,
      borderRadius: 5,
      borderWidth: 2,
    },
    stepBulletActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    stepBulletInactive: {
      backgroundColor: colors.inputBg,
      borderColor: colors.border,
    },
    stepTextActive: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },
    stepTextInactive: {
      fontSize: 13,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    etaText: {
      marginTop: 6,
      fontSize: 12,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    primaryBtn: {
      backgroundColor: colors.primary,
      borderRadius: 16,
      paddingVertical: 14,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 4,
    },
    primaryBtnText: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 15,
    },
  });
};
