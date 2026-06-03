// src/screens/ChatThreadScreen.js
import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getChatStyles } from "../styles/chatStyles";
import { t } from "../services/i18n";

export default function ChatThreadScreen({ conversation, onBack, lang = "ar", theme = "light" }) {
  const insets = useSafeAreaInsets();
  const s = useMemo(() => getChatStyles(theme, lang), [theme, lang]);

  const defaultMessages = useMemo(() => {
    if (lang === "en") {
      return [
        { id: "m1", from: "tech", text: "Hello, I am the technician assigned to your request.", time: "03:05 PM" },
        { id: "m2", from: "user", text: "Hello, the car is stopped on the road next to the station.", time: "03:06 PM" },
        { id: "m3", from: "tech", text: "Okay, I'll be there in about 15 minutes.", time: "03:07 PM" },
      ];
    }
    return [
      { id: "m1", from: "tech", text: "مرحباً، أنا الفني المسؤول عن طلبك.", time: "03:05 م" },
      { id: "m2", from: "user", text: "أهلاً، السيارة متوقفة على الطريق بجانب المحطة.", time: "03:06 م" },
      { id: "m3", from: "tech", text: "تمام، رح أوصل لعندك خلال ربع ساعة تقريباً.", time: "03:07 م" },
    ];
  }, [lang]);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    setMessages(defaultMessages);
  }, [defaultMessages]);

  const scrollToEnd = () => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollToEnd?.({ animated: true });
    });
  };

  useEffect(() => {
    scrollToEnd();
  }, [messages.length]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      from: "user",
      text: input.trim(),
      time: t("chatTodayTime", lang),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    console.log("SEND MESSAGE PAYLOAD:", {
      conversationId: conversation.id,
      message: newMessage,
    });
  };

  return (
    <KeyboardAvoidingView
      style={s.threadScreen}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 20}
    >
      {/* Header */}
      <View style={[s.threadHeader, { paddingTop: Math.max(insets.top, 12) }]}>
        <View style={s.threadHeaderRow}>
          <TouchableOpacity style={s.threadBackBtn} onPress={onBack} activeOpacity={0.9}>
            <Text style={s.threadBackText}>{t("threadBackBtn", lang)}</Text>
          </TouchableOpacity>

          <View style={s.threadTitleWrap}>
            <Text style={s.threadTitle}>{conversation.technicianName}</Text>
            <Text style={s.threadSub}>{t("threadOnlineText", lang)}</Text>
          </View>

          <View style={s.threadAvatar}>
            <Text style={s.threadAvatarText}>👨‍🔧</Text>
          </View>
        </View>
      </View>

      {/* Messages */}
      <View style={s.messagesContainer}>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          onContentSizeChange={scrollToEnd}
          contentContainerStyle={{ paddingBottom: 8 }}
        >
          {messages.map((msg) => {
            const isUser = msg.from === "user";
            return (
              <View
                key={msg.id}
                style={[s.messageRow, isUser ? s.myMessageRow : s.otherMessageRow]}
              >
                <View style={[s.messageBubble, isUser ? s.myMessageBubble : s.otherMessageBubble]}>
                  <Text style={[s.messageText, isUser && s.myMessageText]}>{msg.text}</Text>
                  <Text style={s.messageMeta}>{msg.time}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {/* Input bar */}
      <View style={[s.inputBar, { paddingBottom: Math.max(insets.bottom, 10) }]}>
        <TextInput
          style={s.inputField}
          placeholder={t("chatInputPlaceholder", lang)}
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
          multiline
          keyboardShouldPersistTaps="handled"
        />

        <TouchableOpacity style={s.sendBtn} onPress={handleSend} activeOpacity={0.9}>
          <Text style={s.sendText}>{t("chatSendBtn", lang)}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
