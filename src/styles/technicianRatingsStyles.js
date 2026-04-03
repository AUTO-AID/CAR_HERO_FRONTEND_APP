import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const technicianRatingsStyles = StyleSheet.create({
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

  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  summaryTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 6,
  },

  summaryRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },

  ratingNumber: {
    fontSize: 28,
    fontWeight: "900",
    color: COLORS.text,
  },

  starsRow: {
    flexDirection: "row-reverse",
    gap: 4,
  },

  star: {
    fontSize: 20,
  },

  summaryText: {
    fontSize: 12,
    color: COLORS.muted,
    textAlign: "right",
    writingDirection: "rtl",
    marginTop: 6,
  },

  list: {
    paddingBottom: 24,
  },

  reviewCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },

  reviewHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },

  reviewerName: {
    fontSize: 13,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
  },

  reviewDate: {
    fontSize: 11,
    color: "#999",
  },

  reviewStarsRow: {
    flexDirection: "row-reverse",
    gap: 2,
    marginTop: 4,
  },

  reviewComment: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 6,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
