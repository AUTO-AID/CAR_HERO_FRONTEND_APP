import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getOrderDetailsStyles = (theme, lang) => {
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
      marginBottom: 10,
      shadowColor: "#000",
      shadowOpacity: 0.04,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 2,
      borderWidth: 1,
      borderColor: colors.border,
    },

    sectionTitle: {
      fontSize: 14,
      fontWeight: "900",
      color: colors.text,
      marginBottom: 8,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    line: {
      fontSize: 12,
      color: colors.muted,
      marginTop: 2,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    statusBadge: {
      alignSelf: isRtl ? "flex-start" : "flex-end",
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 999,
      marginTop: 6,
    },

    statusText: {
      fontSize: 11,
      color: "#fff",
      fontWeight: "800",
    },

    row: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 4,
    },

    priceText: {
      fontSize: 16,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
    },

    subPriceText: {
      fontSize: 11,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    primaryBtn: {
      backgroundColor: colors.primary,
      borderRadius: 18,
      paddingVertical: 14,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 8,
    },

    primaryText: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 15,
    },

    disabledBtn: {
      opacity: 0.6,
    },

    ratingRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      gap: 8,
      marginTop: 4,
    },

    star: {
      fontSize: 24,
    },

    ratingHint: {
      fontSize: 11,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      marginTop: 6,
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
      minHeight: 70,
      textAlignVertical: "top",
    },
  });
};
