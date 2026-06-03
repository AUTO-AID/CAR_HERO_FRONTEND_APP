import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getAddressesStyles = (theme, lang) => {
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

    list: {
      paddingBottom: 24,
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

    labelRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    addrLabel: {
      fontSize: 14,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    defaultBadge: {
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 999,
      backgroundColor: "#10B981",
    },

    defaultText: {
      fontSize: 11,
      color: "#fff",
      fontWeight: "800",
    },

    addrLine: {
      fontSize: 12,
      color: colors.muted,
      marginTop: 4,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    metaText: {
      fontSize: 11,
      color: colors.muted,
      marginTop: 2,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    actionsRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 8,
      marginTop: 8,
    },

    actionBtn: {
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.inputBg,
    },

    actionText: {
      fontSize: 11,
      color: colors.primary,
      fontWeight: "800",
    },

    primaryActionBtn: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },

    primaryActionText: {
      color: "#fff",
    },

    addButton: {
      marginTop: 10,
      backgroundColor: colors.primary,
      borderRadius: 18,
      paddingVertical: 13,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 24,
    },

    addButtonText: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 15,
    },
  });
};
