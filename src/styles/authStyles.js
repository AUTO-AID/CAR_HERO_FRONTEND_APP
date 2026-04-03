import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const authStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  header: {
    backgroundColor: COLORS.primary,
    paddingBottom: 22,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "right",
    writingDirection: "rtl",
  },

  headerSubtitle: {
    marginTop: 4,
    color: "#F0E7FF",
    fontSize: 13,
    textAlign: "right",
    writingDirection: "rtl",
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  segmentRow: {
    flexDirection: "row-reverse",
    gap: 10,
    marginBottom: 14,
  },

  segmentBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2D5F7",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  segmentBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  segmentText: {
    fontSize: 14,
    fontWeight: "800",
    color: COLORS.primary,
  },

  segmentTextActive: {
    color: "#fff",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  label: {
    fontSize: 13,
    fontWeight: "800",
    color: COLORS.text,
    marginBottom: 4,
    textAlign: "right",
    writingDirection: "rtl",
  },

  input: {
    backgroundColor: "#F6F3FB",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E7DFF6",
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 13,
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 10,
  },

  linkRow: {
    alignItems: "flex-end",
  },

  linkText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: "700",
    textAlign: "right",
    writingDirection: "rtl",
  },

  termsRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
  },

  termsText: {
    fontSize: 12,
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
    marginTop: 6,
  },

  primaryBtnText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },

  note: {
    fontSize: 11,
    color: COLORS.muted,
    textAlign: "center",
    marginTop: 10,
    writingDirection: "rtl",
  },

  // OTP styles
  otpCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    marginTop: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  otpHint: {
    fontSize: 13,
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
    marginBottom: 8,
  },

  otpCodeRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginVertical: 8,
  },

  otpInput: {
    width: 48,
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0D6F5",
    backgroundColor: "#F6F3FB",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    color: COLORS.text,
  },

  resendRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  resendText: {
    fontSize: 12,
    color: COLORS.muted,
    writingDirection: "rtl",
  },

  resendBtnText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: "800",
  },
});
