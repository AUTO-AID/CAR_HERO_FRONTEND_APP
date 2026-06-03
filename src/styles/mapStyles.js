import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const mapStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.bg },

  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 28,
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
  title: {
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

  mapWrap: {
    flex: 1,
    margin: 16,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  footer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 6,
    gap: 10,
  },

  row: { flexDirection: "row-reverse", gap: 10 },

  btn: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  btnText: { fontWeight: "900", color: "#111" },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: { color: "#fff", fontWeight: "900", fontSize: 15 },

  hint: {
    color: "#777",
    fontSize: 12,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
