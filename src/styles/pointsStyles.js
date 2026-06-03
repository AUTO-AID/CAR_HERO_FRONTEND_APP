import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getPointsStyles = (theme, lang) => {
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
      paddingTop: 14,
    },

    balanceCard: {
      backgroundColor: colors.card,
      borderRadius: 20,
      padding: 16,
      marginBottom: 14,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
      borderWidth: 1,
      borderColor: colors.border,
    },

    balanceRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    balanceNumber: {
      fontSize: 28,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
    },

    balanceLabel: {
      fontSize: 13,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    valueText: {
      fontSize: 13,
      color: colors.text,
      fontWeight: "800",
      marginTop: 4,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    levelBadge: {
      alignSelf: isRtl ? "flex-start" : "flex-end",
      marginTop: 10,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 999,
      backgroundColor: "#10B981",
    },

    levelText: {
      color: "#fff",
      fontSize: 11,
      fontWeight: "800",
    },

    hintText: {
      marginTop: 6,
      fontSize: 11,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    actionsRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 10,
      marginTop: 10,
    },

    secondaryBtn: {
      flex: 1,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.inputBg,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    secondaryText: {
      fontSize: 13,
      color: colors.primary,
      fontWeight: "900",
    },

    primaryBtn: {
      flex: 1,
      borderRadius: 14,
      backgroundColor: colors.primary,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    primaryText: {
      fontSize: 13,
      color: "#fff",
      fontWeight: "900",
    },

    sectionTitle: {
      fontSize: 14,
      fontWeight: "900",
      color: colors.text,
      marginBottom: 8,
      marginTop: 10,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    list: {
      paddingBottom: 24,
    },

    txCard: {
      backgroundColor: colors.card,
      borderRadius: 14,
      padding: 12,
      marginBottom: 8,
      shadowColor: "#000",
      shadowOpacity: 0.03,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 1,
      borderWidth: 1,
      borderColor: colors.border,
    },

    txRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    txTitle: {
      fontSize: 13,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    txDate: {
      fontSize: 11,
      color: colors.muted,
      textAlign: isRtl ? "left" : "right",
    },

    txSub: {
      fontSize: 11,
      color: colors.muted,
      marginTop: 4,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    txPoints: {
      fontSize: 13,
      fontWeight: "900",
    },
  });
};
