import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const premiumStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  header: {
    backgroundColor: COLORS.primary,
    paddingBottom: 18,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerRow: {
    flexDirection: "row-reverse",
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
    textAlign: "right",
    writingDirection: "rtl",
  },

  headerSubtitle: {
    marginTop: 4,
    color: "#F0E7FF",
    fontSize: 12,
    textAlign: "right",
    writingDirection: "rtl",
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  planRow: {
    flexDirection: "row-reverse",
    gap: 10,
    marginBottom: 14,
  },

  planCard: {
    flex: 1,
    borderRadius: 18,
    padding: 14,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E4D9F7",
  },

  planCardActive: {
    borderColor: COLORS.primary,
    backgroundColor: "#F8F3FF",
  },

  planName: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
  },

  planPrice: {
    fontSize: 16,
    fontWeight: "900",
    color: COLORS.primary,
    marginTop: 4,
    textAlign: "right",
  },

  planNote: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 4,
    textAlign: "right",
    writingDirection: "rtl",
  },

  badge: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: "#F59E0B",
  },

  badgeText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "800",
  },

  tableTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.text,
    marginBottom: 6,
    textAlign: "right",
    writingDirection: "rtl",
  },

  tableCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  tableHeaderRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  colLabel: {
    fontSize: 12,
    fontWeight: "900",
    color: COLORS.muted,
  },

  rowItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#F1ECFF",
  },

  rowItemLast: {
    borderBottomWidth: 0,
  },

  featureText: {
    flex: 1.5,
    fontSize: 12,
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
    marginRight: 4,
  },

  colValue: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  check: {
    fontSize: 16,
    color: "#10B981",
  },

  cross: {
    fontSize: 16,
    color: "#EF4444",
  },

  lightText: {
    fontSize: 11,
    color: COLORS.muted,
    textAlign: "right",
    marginTop: 4,
    writingDirection: "rtl",
  },

  primaryBtn: {
    marginTop: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  primaryText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },
});
