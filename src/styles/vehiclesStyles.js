import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getVehiclesStyles = (theme, lang) => {
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
      paddingTop: 12,
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

    topRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    carTitle: {
      fontSize: 15,
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

    midRow: {
      marginTop: 4,
    },

    infoLine: {
      fontSize: 12,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    bottomRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 8,
    },

    smallText: {
      fontSize: 11,
      color: colors.muted,
    },

    actionsRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 8,
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

    emptyText: {
      fontSize: 13,
      color: colors.muted,
      textAlign: "center",
      marginTop: 30,
      writingDirection: isRtl ? "rtl" : "ltr",
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

    // Form card
    formCard: {
      backgroundColor: colors.card,
      borderRadius: 18,
      padding: 16,
      marginTop: 10,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 2,
      borderWidth: 1,
      borderColor: colors.border,
    },

    formTitle: {
      fontSize: 15,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginBottom: 8,
    },

    label: {
      fontSize: 12,
      fontWeight: "800",
      color: colors.text,
      marginBottom: 4,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    input: {
      backgroundColor: theme === "dark" ? "#2B243C" : "#F6F3FB",
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.border,
      paddingVertical: 8,
      paddingHorizontal: 10,
      fontSize: 13,
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginBottom: 8,
    },

    row: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 10,
    },

    half: {
      flex: 1,
    },

    formButtonsRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 10,
      marginTop: 8,
    },

    cancelBtn: {
      flex: 1,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.inputBg,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    cancelText: {
      fontSize: 13,
      color: colors.muted,
      fontWeight: "800",
    },

    saveBtn: {
      flex: 1,
      borderRadius: 14,
      backgroundColor: colors.primary,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    saveText: {
      fontSize: 13,
      color: "#fff",
      fontWeight: "900",
    },
  });
};
