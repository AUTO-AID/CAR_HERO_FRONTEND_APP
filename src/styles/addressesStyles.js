import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const addressesStyles = StyleSheet.create({
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

  list: {
    paddingBottom: 24,
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

  labelRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },

  addrLabel: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
  },

  defaultBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
    backgroundColor: "#10B981",
  },

  defaultText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "800",
  },

  addrLine: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 4,
    textAlign: "right",
    writingDirection: "rtl",
  },

  metaText: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
    textAlign: "right",
    writingDirection: "rtl",
  },

  actionsRow: {
    flexDirection: "row-reverse",
    gap: 8,
    marginTop: 8,
  },

  actionBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E4D9F7",
    backgroundColor: "#fff",
  },

  actionText: {
    fontSize: 11,
    color: COLORS.primary,
    fontWeight: "800",
  },

  primaryActionBtn: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  primaryActionText: {
    color: "#fff",
  },

  addButton: {
    marginTop: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },
});
