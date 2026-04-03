import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const pointsStyles = StyleSheet.create({
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

  balanceCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  balanceRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },

  balanceNumber: {
    fontSize: 28,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
  },

  balanceLabel: {
    fontSize: 13,
    color: COLORS.muted,
    textAlign: "right",
    writingDirection: "rtl",
  },

  valueText: {
    fontSize: 13,
    color: COLORS.text,
    fontWeight: "800",
    marginTop: 4,
    textAlign: "right",
    writingDirection: "rtl",
  },

  levelBadge: {
    alignSelf: "flex-start",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#10B981",
  },

  levelText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "800",
  },

  hintText: {
    marginTop: 6,
    fontSize: 11,
    color: COLORS.muted,
    textAlign: "right",
    writingDirection: "rtl",
  },

  actionsRow: {
    flexDirection: "row-reverse",
    gap: 10,
    marginTop: 10,
  },

  secondaryBtn: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E4D9F7",
    backgroundColor: "#fff",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryText: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: "900",
  },

  primaryBtn: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  primaryText: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "900",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.text,
    marginBottom: 8,
    marginTop: 10,
    textAlign: "right",
    writingDirection: "rtl",
  },

  list: {
    paddingBottom: 24,
  },

  txCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },

  txRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },

  txTitle: {
    fontSize: 13,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
  },

  txDate: {
    fontSize: 11,
    color: "#999",
    textAlign: "left",
  },

  txSub: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 4,
    textAlign: "right",
    writingDirection: "rtl",
  },

  txPoints: {
    fontSize: 13,
    fontWeight: "900",
  },
});
