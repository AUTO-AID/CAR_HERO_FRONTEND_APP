import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const welcomeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  header: {
    paddingBottom: 16,
    paddingHorizontal: 24,
  },

  brand: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: "900",
    textAlign: "right",
  },

  title: {
    marginTop: 8,
    color: COLORS.text,
    fontSize: 22,
    fontWeight: "900",
    textAlign: "right",
    writingDirection: "rtl",
  },

  subtitle: {
    marginTop: 4,
    color: COLORS.muted,
    fontSize: 13,
    textAlign: "right",
    writingDirection: "rtl",
  },

  sliderWrap: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  slidePage: {
    width: "100%",
    alignItems: "center",
  },

  slideInner: {
    width: "100%",
  },

  slideTextBlock: {
    marginBottom: 12,
  },

  slideTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
  },

  slideText: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 4,
    textAlign: "right",
    writingDirection: "rtl",
  },

  imageBox: {
    marginTop: 12,
    borderRadius: 24,
    backgroundColor: "#111",
    overflow: "hidden",
    height: 260,
    alignItems: "center",
    justifyContent: "center",
  },

  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.35,
  },

  imageEmoji: {
    fontSize: 72,
  },

  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0D4F6",
  },
  dotActive: {
    width: 18,
    backgroundColor: COLORS.primary,
  },

  footer: {
    paddingHorizontal: 16,
    paddingBottom: 22,
    gap: 10,
  },

  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },

  secondaryBtn: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E4D9F7",
  },
  secondaryText: {
    color: COLORS.primary,
    fontWeight: "900",
    fontSize: 15,
  },

  note: {
    fontSize: 11,
    color: COLORS.muted,
    textAlign: "center",
    marginTop: 4,
    writingDirection: "rtl",
  },
});
