import { StyleSheet } from "react-native";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

export const getChatStyles = (theme, lang) => {
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return StyleSheet.create({
    // شاشة قائمة المحادثات
    listScreen: {
      flex: 1,
      backgroundColor: colors.bg,
    },

    listHeader: {
      backgroundColor: colors.primary,
      paddingBottom: 18,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },

    listHeaderTitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "900",
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    listHeaderSubtitle: {
      marginTop: 4,
      color: "#F0E7FF",
      fontSize: 12,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    listContent: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 12,
    },

    emptyText: {
      fontSize: 13,
      color: colors.muted,
      textAlign: "center",
      marginTop: 30,
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    convoCard: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 12,
      marginBottom: 8,
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.04,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 1,
      borderWidth: 1,
      borderColor: colors.border,
    },

    avatarCircle: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: colors.circle,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: isRtl ? 10 : 0,
      marginRight: isRtl ? 0 : 10,
    },

    avatarText: {
      fontSize: 20,
    },

    convoTextWrap: {
      flex: 1,
    },

    convoTitleRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    convoName: {
      fontSize: 14,
      fontWeight: "900",
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    convoTime: {
      fontSize: 11,
      color: colors.muted,
    },

    convoLastMessage: {
      marginTop: 2,
      fontSize: 12,
      color: colors.muted,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    unreadDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.primary,
    },

    // شاشة المحادثة
    threadScreen: {
      flex: 1,
      backgroundColor: colors.bg,
    },

    threadHeader: {
      backgroundColor: colors.primary,
      paddingBottom: 14,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },

    threadHeaderRow: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    threadBackBtn: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 12,
      backgroundColor: "rgba(17,17,17,0.18)",
    },

    threadBackText: {
      color: "#fff",
      fontWeight: "800",
    },

    threadTitleWrap: {
      flex: 1,
      marginHorizontal: 8,
    },

    threadTitle: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "900",
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    threadSub: {
      color: "#EDE4FF",
      fontSize: 11,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    threadAvatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: "rgba(0,0,0,0.18)",
      alignItems: "center",
      justifyContent: "center",
    },

    threadAvatarText: {
      fontSize: 18,
      color: "#fff",
    },

    messagesContainer: {
      flex: 1,
      paddingHorizontal: 12,
      paddingTop: 10,
      paddingBottom: 6,
    },

    messageRow: {
      flexDirection: "row",
      marginBottom: 4,
    },

    messageBubble: {
      maxWidth: "80%",
      borderRadius: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
    },

    messageText: {
      fontSize: 13,
      color: colors.text,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    messageMeta: {
      fontSize: 9,
      color: colors.muted,
      marginTop: 2,
      textAlign: isRtl ? "left" : "right",
    },

    myMessageRow: {
      justifyContent: "flex-end",
    },

    myMessageBubble: {
      backgroundColor: colors.primary,
      borderBottomRightRadius: 4,
    },

    myMessageText: {
      color: "#fff",
    },

    otherMessageRow: {
      justifyContent: "flex-start",
    },

    otherMessageBubble: {
      backgroundColor: colors.card,
      borderBottomLeftRadius: 4,
      borderWidth: 1,
      borderColor: colors.border,
    },

    inputBar: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "flex-end",
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderTopWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
    },

    inputField: {
      flex: 1,
      maxHeight: 120,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.inputBg,
      color: colors.text,
      paddingHorizontal: 10,
      paddingVertical: 8,
      fontSize: 13,
      textAlign: isRtl ? "right" : "left",
      writingDirection: isRtl ? "rtl" : "ltr",
    },

    sendBtn: {
      marginLeft: isRtl ? 0 : 8,
      marginRight: isRtl ? 8 : 0,
      borderRadius: 18,
      backgroundColor: colors.primary,
      paddingHorizontal: 14,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    sendText: {
      color: "#fff",
      fontWeight: "900",
      fontSize: 13,
    },
  });
};
