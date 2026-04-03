import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const serviceDetailsStyles = StyleSheet.create({
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
  backText: { color: "#fff", fontWeight: "800" },

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

  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#F6F3FB",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    textAlign: "right",
    writingDirection: "rtl",
    color: COLORS.text,
  },

  row: {
    flexDirection: "row-reverse",
    gap: 10,
  },
  half: { flex: 1 },

  pillRow: {
    flexDirection: "row-reverse",
    gap: 10,
  },
  pill: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  pillActive: {
    backgroundColor: "#B57EDC22",
    borderColor: COLORS.primary,
  },
  pillInactive: {
    backgroundColor: "#fff",
    borderColor: "#E8E8E8",
  },
  pillText: { fontWeight: "900" },

  hint: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 8,
    textAlign: "right",
    writingDirection: "rtl",
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },
});
