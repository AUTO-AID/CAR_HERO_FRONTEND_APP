import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const bookingStyles = StyleSheet.create({
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

  headerSubtitle: {
    marginTop: 4,
    color: "#F0E7FF",
    fontSize: 12,
    textAlign: "right",
    writingDirection: "rtl",
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

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  card: {
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

  label: {
    fontSize: 13,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 8,
  },

  pickerBtn: {
    backgroundColor: "#F5F1FB",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E3D8F7",
    marginBottom: 10,
  },

  pickerText: {
    fontSize: 13,
    color: COLORS.text,
    textAlign: "right",
  },

  row: {
    flexDirection: "row-reverse",
    gap: 10,
  },

  half: {
    flex: 1,
  },

  note: {
    fontSize: 11,
    color: COLORS.muted,
    textAlign: "right",
    marginTop: 8,
    writingDirection: "rtl",
  },

  toggleRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },

  toggleLabel: {
    fontSize: 13,
    fontWeight: "900",
    color: COLORS.text,
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24, // مسافة تحت
  },

  primaryText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },
});
