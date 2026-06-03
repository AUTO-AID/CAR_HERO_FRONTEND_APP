import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getHomeStyles = (theme, lang) => {
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.bg,
    },

    header: {
      backgroundColor: colors.primary,
      paddingBottom: 26,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 28,
      borderBottomRightRadius: 28,
    },

    headerTopRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
    },

    brand: {
      color: "#fff",
      fontWeight: "800",
      fontSize: 16,
    },

    headerTitleRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      gap: 8,
    },

    headerTitle: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 22,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    headerSubtitle: {
      color: "#F0E7FF",
      fontSize: 14,
      marginTop: 6,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16,
    },

    card: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      padding: 14,
      marginBottom: 12,
      borderRadius: 16,
      backgroundColor: colors.card,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
      borderWidth: 1,
      borderColor: colors.border,
    },
    iconWrap: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colors.circle,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: isRtl ? 12 : 0,
      marginRight: isRtl ? 0 : 12,
    },
    icon: { fontSize: 26 },
    textWrap: { flex: 1 },
    title: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },
    desc: {
      fontSize: 12,
      color: colors.muted,
      marginTop: 4,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },
  });
};
