import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const orderDetailsStyles = StyleSheet.create({
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

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
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

  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.text,
    marginBottom: 8,
    textAlign: "right",
    writingDirection: "rtl",
  },

  line: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
    textAlign: "right",
    writingDirection: "rtl",
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginTop: 6,
  },

  statusText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "800",
  },

  row: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },

  priceText: {
    fontSize: 16,
    fontWeight: "900",
    color: COLORS.text,
  },

  subPriceText: {
    fontSize: 11,
    color: COLORS.muted,
    textAlign: "right",
    writingDirection: "rtl",
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  primaryText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },

  disabledBtn: {
    opacity: 0.6,
  },

  ratingRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },

  star: {
    fontSize: 24,
  },

  ratingHint: {
    fontSize: 11,
    color: COLORS.muted,
    textAlign: "right",
    marginTop: 6,
    writingDirection: "rtl",
  },

  input: {
    backgroundColor: "#F6F3FB",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E7DFF6",
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 13,
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
    minHeight: 70,
    textAlignVertical: "top",
  },
});
