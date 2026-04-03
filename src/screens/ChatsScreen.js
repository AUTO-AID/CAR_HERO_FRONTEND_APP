import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { chatStyles as s } from "../styles/chatStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// بيانات محادثات تجريبية
const MOCK_CONVERSATIONS = [
  {
    id: "c1",
    technicianName: "أحمد – بنشر متنقل",
    lastMessage: "أنا وصلت قريب منك خلال 5 دقائق إن شاء الله.",
    lastTime: "03:20 م",
    unread: true,
  },
  {
    id: "c2",
    technicianName: "مركز السعادة للصيانة",
    lastMessage: "تم تأكيد موعد الصيانة ليوم الخميس.",
    lastTime: "أمس",
    unread: false,
  },
  {
    id: "c3",
    technicianName: "فهد – كهرباء سيارات",
    lastMessage: "إذا رجعت المشكلة خبرني لنراجع الأسلاك مرة ثانية.",
    lastTime: "2025-12-10",
    unread: false,
  },
];

export default function ChatsScreen({ onOpenChat }) {
  const insets = useSafeAreaInsets();
  // 👇👇👇 هنا نستدعي API لجلب قائمة المحادثات
  //
  // useEffect(() => {
  //   fetch("https://api.example.com/chats")
  //     .then(res => res.json())
  //     .then(data => setConversations(data))
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <View style={s.listScreen}>
      {/* Header */}
      <View style={[s.listHeader, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.listHeaderTitle}>المحادثات</Text>
        <Text style={s.listHeaderSubtitle}>
          تواصل مع الفنيين لمتابعة تفاصيل طلباتك.
        </Text>
      </View>

      {/* Content */}
      <View style={s.listContent}>
        {MOCK_CONVERSATIONS.length === 0 && (
          <Text style={s.emptyText}>
            لا توجد محادثات حالياً. ستظهر هنا عندما تتواصل مع فني.
          </Text>
        )}

        <ScrollView showsVerticalScrollIndicator={false}>
          {MOCK_CONVERSATIONS.map((c) => {
            const initials = c.technicianName.charAt(0);

            return (
              <TouchableOpacity
                key={c.id}
                style={s.convoCard}
                activeOpacity={0.9}
                onPress={() => onOpenChat?.(c)}
              >
                <View style={s.avatarCircle}>
                  <Text style={s.avatarText}>👨‍🔧</Text>
                </View>

                <View style={s.convoTextWrap}>
                  <View style={s.convoTitleRow}>
                    <Text style={s.convoName}>{c.technicianName}</Text>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      {c.unread && <View style={s.unreadDot} />}
                      <Text style={s.convoTime}>{c.lastTime}</Text>
                    </View>
                  </View>

                  <Text
                    style={s.convoLastMessage}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {c.lastMessage}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
