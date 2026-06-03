import React, { useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { getChatStyles } from "../styles/chatStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "../services/i18n";

export default function ChatsScreen({ lang = "ar", theme = "light", onOpenChat }) {
  const insets = useSafeAreaInsets();
  const s = useMemo(() => getChatStyles(theme, lang), [theme, lang]);

  const conversations = useMemo(() => {
    if (lang === "en") {
      return [
        {
          id: "c1",
          technicianName: "Ahmad – Mobile Tire",
          lastMessage: "I'll be there in 5 minutes, inshallah.",
          lastTime: "03:20 PM",
          unread: true,
        },
        {
          id: "c2",
          technicianName: "Al-Saada Service Center",
          lastMessage: "Maintenance appointment confirmed for Thursday.",
          lastTime: "Yesterday",
          unread: false,
        },
        {
          id: "c3",
          technicianName: "Fahd – Car Electrician",
          lastMessage: "If the issue happens again, let me know to check the wiring.",
          lastTime: "2025-12-10",
          unread: false,
        },
      ];
    }
    return [
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
  }, [lang]);

  return (
    <View style={s.listScreen}>
      {/* Header */}
      <View style={[s.listHeader, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.listHeaderTitle}>{t("chatsHeaderTitle", lang)}</Text>
        <Text style={s.listHeaderSubtitle}>
          {t("chatsHeaderSubtitle", lang)}
        </Text>
      </View>

      {/* Content */}
      <View style={s.listContent}>
        {conversations.length === 0 && (
          <Text style={s.emptyText}>
            {t("noChatsText", lang)}
          </Text>
        )}

        <ScrollView showsVerticalScrollIndicator={false}>
          {conversations.map((c) => {
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
