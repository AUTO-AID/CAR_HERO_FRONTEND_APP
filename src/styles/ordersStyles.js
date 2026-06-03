import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getOrdersStyles = (theme, lang) => {
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
      paddingTop: 12,
    },

    tabsRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 8,
      marginBottom: 10,
    },

    tabBtn: {
      flex: 1,
      paddingVertical: 8,
      borderRadius: 16,
      backgroundColor: colors.inputBg,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
    },

    tabBtnActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },

    tabText: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.primary,
    },

    tabTextActive: {
      color: "#fff",
    },

    list: {
      paddingBottom: 20,
    },

    emptyText: {
      fontSize: 13,
      color: colors.muted,
      textAlign: "center",
      marginTop: 40,
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 14,
      marginBottom: 10,
      shadowColor: "#000",
      shadowOpacity: 0.04,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 2,
      borderWidth: 1,
      borderColor: colors.border,
    },

    rowTop: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    serviceTitle: {
      fontSize: 14,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    statusPill: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 999,
    },

    statusText: {
      fontSize: 11,
      fontWeight: "800",
      color: "#fff",
    },

    rowMid: {
      marginTop: 6,
    },

    labelLine: {
      fontSize: 12,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    rowBottom: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
    },

    dateText: {
      fontSize: 11,
      color: colors.muted,
    },

    priceText: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.text,
    },
  });
};
