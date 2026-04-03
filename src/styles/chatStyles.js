import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const chatStyles = StyleSheet.create({
  // شاشة قائمة المحادثات
  listScreen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  listHeader: {
    backgroundColor: COLORS.primary,
    paddingBottom: 18,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  listHeaderTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
    textAlign: "right",
    writingDirection: "rtl",
  },

  listHeaderSubtitle: {
    marginTop: 4,
    color: "#F0E7FF",
    fontSize: 12,
    textAlign: "right",
    writingDirection: "rtl",
  },

  listContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  emptyText: {
    fontSize: 13,
    color: COLORS.muted,
    textAlign: "center",
    marginTop: 30,
    writingDirection: "rtl",
  },

  convoCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
    flexDirection: "row-reverse",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },

  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.circle,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  avatarText: {
    fontSize: 20,
  },

  convoTextWrap: {
    flex: 1,
  },

  convoTitleRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },

  convoName: {
    fontSize: 14,
    fontWeight: "900",
    color: COLORS.text,
    textAlign: "right",
    writingDirection: "rtl",
  },

  convoTime: {
    fontSize: 11,
    color: "#999",
  },

  convoLastMessage: {
    marginTop: 2,
    fontSize: 12,
    color: COLORS.muted,
    textAlign: "right",
    writingDirection: "rtl",
  },

  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },

  // شاشة المحادثة
  threadScreen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  threadHeader: {
    backgroundColor: COLORS.primary,
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  threadHeaderRow: {
    flexDirection: "row-reverse",
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
    textAlign: "right",
    writingDirection: "rtl",
  },

  threadSub: {
    color: "#EDE4FF",
    fontSize: 11,
    textAlign: "right",
    writingDirection: "rtl",
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
    color: "#111",
    textAlign: "right",
    writingDirection: "rtl",
  },

  messageMeta: {
    fontSize: 9,
    color: "#888",
    marginTop: 2,
    textAlign: "left",
  },

  myMessageRow: {
    justifyContent: "flex-end",
  },

  myMessageBubble: {
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 4,
  },

  myMessageText: {
    color: "#fff",
  },

  otherMessageRow: {
    justifyContent: "flex-start",
  },

  otherMessageBubble: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 4,
  },

  inputBar: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#E5DEF8",
    backgroundColor: "#FFFFFF",
  },

  inputField: {
    flex: 1,
    maxHeight: 120,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E4D9F7",
    backgroundColor: "#F7F3FF",
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 13,
    textAlign: "right",
    writingDirection: "rtl",
  },

  sendBtn: {
    marginLeft: 8,
    borderRadius: 18,
    backgroundColor: COLORS.primary,
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
