import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getInteractiveMapStyles = (theme, lang) => {
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return StyleSheet.create({
    screen: { 
      flex: 1, 
      backgroundColor: colors.bg 
    },

    header: {
      backgroundColor: colors.primary,
      paddingBottom: 18,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
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

    backText: { color: "#fff", fontWeight: "800" },

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

    mapWrap: {
      flex: 1,
      overflow: "hidden",
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      marginTop: 12,
    },

    bottomBar: {
      padding: 14,
      backgroundColor: "transparent",
    },

    primaryBtn: {
      backgroundColor: colors.primary,
      borderRadius: 18,
      paddingVertical: 14,
      alignItems: "center",
      justifyContent: "center",
    },

    primaryText: { color: "#fff", fontWeight: "900", fontSize: 15 },
  });
};
