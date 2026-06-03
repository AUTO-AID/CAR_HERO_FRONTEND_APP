import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getPremiumStyles = (theme, lang) => {
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

    planRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 10,
      marginBottom: 14,
    },

    planCard: {
      flex: 1,
      borderRadius: 18,
      padding: 14,
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
    },

    planCardActive: {
      borderColor: colors.primary,
      backgroundColor: theme === "dark" ? "#2B1E38" : "#F8F3FF",
    },

    planName: {
      fontSize: 14,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    planPrice: {
      fontSize: 16,
      fontWeight: "900",
      color: colors.primary,
      marginTop: 4,
      textAlign: isRtl ? "right" : "left",
    },

    planNote: {
      fontSize: 11,
      color: colors.muted,
      marginTop: 4,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    badge: {
      alignSelf: isRtl ? "flex-start" : "flex-end",
      marginTop: 6,
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 999,
      backgroundColor: "#F59E0B",
    },

    badgeText: {
      fontSize: 10,
      color: "#fff",
      fontWeight: "800",
    },

    tableTitle: {
      fontSize: 14,
      fontWeight: "900",
      color: colors.text,
      marginBottom: 6,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    tableCard: {
      backgroundColor: colors.card,
      borderRadius: 18,
      padding: 14,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOpacity: 0.04,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
      borderWidth: 1,
      borderColor: colors.border,
    },

    tableHeaderRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
    },

    colLabel: {
      fontSize: 12,
      fontWeight: "900",
      color: colors.muted,
    },

    rowItem: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },

    rowItemLast: {
      borderBottomWidth: 0,
    },

    featureText: {
      flex: 1.5,
      fontSize: 12,
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginRight: isRtl ? 4 : 0,
      marginLeft: isRtl ? 0 : 4,
    },

    colValue: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    check: {
      fontSize: 16,
      color: "#10B981",
    },

    cross: {
      fontSize: 16,
      color: "#EF4444",
    },

    lightText: {
      fontSize: 11,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      marginTop: 4,
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    primaryBtn: {
      marginTop: 10,
      backgroundColor: colors.primary,
      borderRadius: 18,
      paddingVertical: 14,
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
