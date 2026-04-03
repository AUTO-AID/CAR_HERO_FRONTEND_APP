// src/screens/ChatThreadScreen.js
import React, { useEffect, useRef, useState } from "react";
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
import { chatStyles as s } from "../styles/chatStyles";

const MOCK_MESSAGES = [
  { id: "m1", from: "tech", text: "مرحباً، أنا الفني المسؤول عن طلبك.", time: "03:05 م" },
  { id: "m2", from: "user", text: "أهلاً، السيارة متوقفة على الطريق بجانب المحطة.", time: "03:06 م" },
  { id: "m3", from: "tech", text: "تمام، رح أوصل لعندك خلال ربع ساعة تقريباً.", time: "03:07 م" },
];

export default function ChatThreadScreen({ conversation, onBack }) {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [input, setInput] = useState("");
  const insets = useSafeAreaInsets();
  const scrollRef = useRef(null);

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
      time: "الآن",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    console.log("SEND MESSAGE PAYLOAD:", {
      conversationId: conversation.id,
      message: newMessage,
    });

    // هنا نستدعي API
    // مثال:
    // fetch(`https://api.example.com/conversations/${conversation.id}/messages`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ text: input.trim() }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("Message Sent", data))
    //   .catch((err) => console.log(err));
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
            <Text style={s.threadBackText}>رجوع</Text>
          </TouchableOpacity>

          <View style={s.threadTitleWrap}>
            <Text style={s.threadTitle}>{conversation.technicianName}</Text>
            <Text style={s.threadSub}>متصل تقريباً • خلال الخدمة</Text>
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
          placeholder="اكتب رسالتك هنا..."
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
          multiline
          keyboardShouldPersistTaps="handled"
        />

        <TouchableOpacity style={s.sendBtn} onPress={handleSend} activeOpacity={0.9}>
          <Text style={s.sendText}>إرسال</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
