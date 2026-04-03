import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const trackingStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  header: {
    backgroundColor: COLORS.primary,
    paddingBottom: 18,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 18,
    textAlign: "right",
    writingDirection: "rtl",
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
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  row: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.circle,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  iconText: {
    fontSize: 26,
  },

  title: {
    fontSize: 15,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
  },
  sub: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 4,
    textAlign: "right",
    writingDirection: "rtl",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.text,
    marginBottom: 8,
    textAlign: "right",
    writingDirection: "rtl",
  },

  stepsRow: {
    flexDirection: "column",
    gap: 8,
  },
  stepItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
  },
  stepBullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
  },
  stepBulletActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  stepBulletInactive: {
    backgroundColor: "#fff",
    borderColor: "#DDD",
  },
  stepTextActive: {
    fontSize: 13,
    fontWeight: "800",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
  },
  stepTextInactive: {
    fontSize: 13,
    color: COLORS.muted,
    textAlign: "right",
    writingDirection: "rtl",
  },

  etaText: {
    marginTop: 6,
    fontSize: 12,
    color: COLORS.muted,
    textAlign: "right",
    writingDirection: "rtl",
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },
});
