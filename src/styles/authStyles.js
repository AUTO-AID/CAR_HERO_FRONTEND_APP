import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getAuthStyles = (theme, lang) => {
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.bg,
    },

    header: {
      backgroundColor: colors.primary,
      paddingBottom: 22,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 28,
      borderBottomRightRadius: 28,
    },

    headerTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "900",
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    headerSubtitle: {
      marginTop: 4,
      color: "#F0E7FF",
      fontSize: 13,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16,
    },

    segmentRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 10,
      marginBottom: 14,
    },

    segmentBtn: {
      flex: 1,
      paddingVertical: 10,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.inputBg,
    },

    segmentBtnActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },

    segmentText: {
      fontSize: 14,
      fontWeight: "800",
      color: colors.primary,
    },

    segmentTextActive: {
      color: "#fff",
    },

    card: {
      backgroundColor: colors.card,
      borderRadius: 18,
      padding: 16,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 2,
    },

    label: {
      fontSize: 13,
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
      paddingVertical: 10,
      paddingHorizontal: 12,
      fontSize: 13,
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginBottom: 10,
    },

    linkRow: {
      alignItems: isRtl ? "flex-end" : "flex-start",
    },

    linkText: {
      fontSize: 12,
      color: colors.primary,
      fontWeight: "700",
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    termsRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      gap: 6,
      marginTop: 4,
    },

    checkbox: {
      width: 18,
      height: 18,
      borderRadius: 5,
      borderWidth: 1.5,
      borderColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
    },

    checkboxInner: {
      width: 10,
      height: 10,
      borderRadius: 3,
      backgroundColor: colors.primary,
    },

    termsText: {
      fontSize: 12,
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
      marginTop: 6,
    },

    primaryBtnText: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 15,
    },

    note: {
      fontSize: 11,
      color: colors.muted,
      textAlign: "center",
      marginTop: 10,
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    // OTP styles
    otpCard: {
      backgroundColor: colors.card,
      borderRadius: 18,
      padding: 16,
      marginBottom: 12,
      marginTop: 16,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 2,
    },

    otpHint: {
      fontSize: 13,
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginBottom: 8,
    },

    otpCodeRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
      marginVertical: 8,
    },

    otpInput: {
      width: 48,
      height: 54,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: theme === "dark" ? "#2B243C" : "#F6F3FB",
      textAlign: "center",
      fontSize: 18,
      fontWeight: "800",
      color: colors.text,
    },

    resendRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
    },

    resendText: {
      fontSize: 12,
      color: colors.muted,
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    resendBtnText: {
      fontSize: 12,
      color: colors.primary,
      fontWeight: "800",
    },
  });
};
