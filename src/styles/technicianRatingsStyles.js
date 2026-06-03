import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getTechnicianRatingsStyles = (theme, lang) => {
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

    summaryCard: {
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

    summaryTitle: {
      fontSize: 15,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginBottom: 6,
    },

    summaryRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 6,
    },

    ratingNumber: {
      fontSize: 28,
      fontWeight: "900",
      color: colors.text,
    },

    starsRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 4,
    },

    star: {
      fontSize: 20,
    },

    summaryText: {
      fontSize: 12,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginTop: 6,
    },

    list: {
      paddingBottom: 24,
    },

    reviewCard: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 12,
      marginBottom: 10,
      shadowColor: "#000",
      shadowOpacity: 0.03,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 1,
      borderWidth: 1,
      borderColor: colors.border,
    },

    reviewHeader: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    reviewerName: {
      fontSize: 13,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
    },

    reviewDate: {
      fontSize: 11,
      color: colors.muted,
    },

    reviewStarsRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 2,
      marginTop: 4,
    },

    reviewComment: {
      fontSize: 12,
      color: colors.muted,
      marginTop: 6,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },
  });
};
