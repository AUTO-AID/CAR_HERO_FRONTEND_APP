import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const locationStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  header: {
    backgroundColor: COLORS.primary,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "right",
    writingDirection: "rtl",
  },

  headerSubtitle: {
    marginTop: 6,
    color: "#F0E7FF",
    fontSize: 13,
    textAlign: "right",
    writingDirection: "rtl",
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.circle,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    alignSelf: "center",
  },

  iconEmoji: {
    fontSize: 32,
  },

  title: {
    fontSize: 16,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 6,
  },

  text: {
    fontSize: 13,
    color: COLORS.muted,
    textAlign: "right",
    writingDirection: "rtl",
  },

  bulletRow: {
    flexDirection: "row-reverse",
    gap: 6,
    marginTop: 6,
  },

  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginTop: 6,
  },

  bulletText: {
    fontSize: 12,
    color: COLORS.muted,
    textAlign: "right",
    flex: 1,
    writingDirection: "rtl",
  },

  footer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 10,
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },

  secondaryBtn: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E4D9F7",
  },
  secondaryText: {
    color: COLORS.primary,
    fontWeight: "900",
    fontSize: 14,
  },

  note: {
    fontSize: 11,
    color: COLORS.muted,
    textAlign: "center",
    writingDirection: "rtl",
  },
});
