import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const homeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  header: {
    backgroundColor: COLORS.primary,
    paddingBottom: 26,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerTopRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  brand: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },

  headerTitleRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
  },

  headerTitle: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 22,
    textAlign: "right",
    writingDirection: "rtl",
  },

  headerSubtitle: {
    color: "#F0E7FF",
    fontSize: 14,
    marginTop: 6,
    textAlign: "right",
    writingDirection: "rtl",
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  // الكروت نفسها
  gridContainer: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.circle,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  icon: { fontSize: 32 },
  textWrap: { alignItems: "center" },
  title: {
    fontSize: 15,
    fontWeight: "800",
    color: COLORS.text,
    textAlign: "center",
  },
  desc: {
    display: "none",
  },
});
