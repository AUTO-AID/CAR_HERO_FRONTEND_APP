import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getWashStyles = (theme, lang) => {
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
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },

    headerRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    backBtn: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 12,
      backgroundColor: "rgba(17,17,17,0.18)",
    },

    backText: {
      color: "#fff",
      fontWeight: "800",
    },

    headerTitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "900",
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    headerSubtitle: {
      marginTop: 4,
      color: "#F0E7FF",
      fontSize: 12,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 14,
    },

    card: {
      backgroundColor: colors.card,
      borderRadius: 18,
      padding: 16,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 2,
      borderWidth: 1,
      borderColor: colors.border,
    },

    label: {
      fontSize: 13,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginBottom: 8,
    },

    pillRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      flexWrap: "wrap",
      gap: 8,
    },

    pill: {
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.inputBg,
    },

    pillActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },

    pillText: {
      fontSize: 12,
      color: colors.text,
      fontWeight: "800",
    },

    pillTextActive: {
      color: "#fff",
    },

    row: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 10,
    },

    half: {
      flex: 1,
    },

    pickerBtn: {
      backgroundColor: theme === "dark" ? "#2B243C" : "#F5F1FB",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 8,
    },

    pickerText: {
      fontSize: 13,
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
    },

    hint: {
      fontSize: 11,
      color: colors.muted,
      marginTop: 6,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    toggleRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 6,
    },

    toggleLabel: {
      fontSize: 13,
      fontWeight: "900",
      color: colors.text,
    },

    primaryBtn: {
      backgroundColor: colors.primary,
      borderRadius: 18,
      paddingVertical: 14,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 24,
    },

    primaryText: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 15,
    },
  });
};
