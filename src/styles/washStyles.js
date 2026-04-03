import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const washStyles = StyleSheet.create({
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

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  label: {
    fontSize: 13,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 8,
  },

  pillRow: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    gap: 8,
  },

  pill: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E4D9F7",
    backgroundColor: "#F7F3FF",
  },

  pillActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  pillText: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: "800",
  },

  pillTextActive: {
    color: "#fff",
  },

  row: {
    flexDirection: "row-reverse",
    gap: 10,
  },

  half: {
    flex: 1,
  },

  pickerBtn: {
    backgroundColor: "#F5F1FB",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E3D8F7",
    marginBottom: 8,
  },

  pickerText: {
    fontSize: 13,
    color: COLORS.text,
    textAlign: "right",
  },

  hint: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 6,
    textAlign: "right",
    writingDirection: "rtl",
  },

  toggleRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },

  toggleLabel: {
    fontSize: 13,
    fontWeight: "900",
    color: COLORS.text,
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 24,
  },

  primaryText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },
});
