import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getBookingStyles = (theme, lang) => {
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

    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16,
    },

    card: {
      backgroundColor: colors.card,
      borderRadius: 18,
      padding: 16,
      marginBottom: 14,
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

    pickerBtn: {
      backgroundColor: theme === "dark" ? "#2B243C" : "#F5F1FB",
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 10,
    },

    pickerText: {
      fontSize: 13,
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
    },

    row: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 10,
    },

    half: {
      flex: 1,
    },

    note: {
      fontSize: 11,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      marginTop: 8,
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    toggleRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 6,
    },

    toggleLabel: {
      fontSize: 13,
      fontWeight: "900",
      color: colors.text,
    },

    primaryBtn: {
      backgroundColor: colors.primary,
      paddingVertical: 14,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 24,
    },

    primaryText: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 15,
    },
  });
};
