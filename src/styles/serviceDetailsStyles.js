import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getServiceDetailsStyles = (theme, lang) => {
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
      borderBottomLeftRadius: 28,
      borderBottomRightRadius: 28,
    },

    headerRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    headerTitle: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 18,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    backBtn: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 12,
      backgroundColor: "rgba(17,17,17,0.18)",
    },
    backText: { color: "#fff", fontWeight: "800" },

    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 14,
    },

    card: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 14,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOpacity: 0.06,
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
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      marginBottom: 10,
    },

    input: {
      backgroundColor: theme === "dark" ? "#2B243C" : "#F6F3FB",
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 14,
      paddingHorizontal: 12,
      paddingVertical: 10,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
      color: colors.text,
    },

    row: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 10,
    },
    half: { flex: 1 },

    pillRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      gap: 10,
    },
    pill: {
      flex: 1,
      borderRadius: 14,
      paddingVertical: 12,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
    },
    pillActive: {
      backgroundColor: colors.circle,
      borderColor: colors.primary,
    },
    pillInactive: {
      backgroundColor: colors.inputBg,
      borderColor: colors.border,
    },
    pillText: { fontWeight: "900" },

    hint: {
      color: colors.muted,
      fontSize: 12,
      marginTop: 8,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    primaryBtn: {
      backgroundColor: colors.primary,
      borderRadius: 16,
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
  });
};
