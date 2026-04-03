import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const ordersStyles = StyleSheet.create({
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
    paddingTop: 12,
  },

  tabsRow: {
    flexDirection: "row-reverse",
    gap: 8,
    marginBottom: 10,
  },

  tabBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E6DEFA",
    alignItems: "center",
    justifyContent: "center",
  },

  tabBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  tabText: {
    fontSize: 13,
    fontWeight: "800",
    color: COLORS.primary,
  },

  tabTextActive: {
    color: "#fff",
  },

  list: {
    paddingBottom: 20,
  },

  emptyText: {
    fontSize: 13,
    color: COLORS.muted,
    textAlign: "center",
    marginTop: 40,
    writingDirection: "rtl",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  rowTop: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },

  serviceTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
  },

  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#fff",
  },

  rowMid: {
    marginTop: 6,
  },

  labelLine: {
    fontSize: 12,
    color: COLORS.muted,
    textAlign: "right",
    writingDirection: "rtl",
  },

  rowBottom: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  dateText: {
    fontSize: 11,
    color: "#999",
  },

  priceText: {
    fontSize: 13,
    fontWeight: "800",
    color: COLORS.text,
  },
});
