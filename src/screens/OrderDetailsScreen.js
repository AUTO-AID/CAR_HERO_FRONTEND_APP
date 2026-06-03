import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { getOrderDetailsStyles } from "../styles/orderDetailsStyles";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "../services/i18n";

function getStatusColor(status) {
  if (status === "active") return "#F59E0B";
  if (status === "completed") return "#10B981";
  if (status === "cancelled") return "#EF4444";
  return "#B57EDC";
}

export default function OrderDetailsScreen({
  lang = "ar",
  theme = "light",
  order,
  onBack,
  onOpenTechnicianRatings,
}) {
  const insets = useSafeAreaInsets();
  const s = getOrderDetailsStyles(theme, lang);
  const isRtl = lang === "ar";
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  const canRate = order?.status === "completed";
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleFinish = () => {
    if (order?.status !== "active") {
      Alert.alert(
        t("alertNotification", lang),
        isRtl ? "لا يمكن إنهاء طلب غير نشط." : "Cannot complete an inactive request."
      );
      return;
    }
    Alert.alert(
      isRtl ? "تم" : "Done",
      isRtl ? "تم تأكيد إنهاء الخدمة (تجريبي)." : "Service completion confirmed (Demo)."
    );
  };

  const handleSendRating = () => {
    if (!canRate) {
      Alert.alert(
        t("alertNotification", lang),
        isRtl ? "يمكن تقييم الفني بعد اكتمال الطلب فقط." : "You can only rate the technician after completion."
      );
      return;
    }

    if (rating === 0) {
      Alert.alert(
        t("alertNotification", lang),
        isRtl ? "الرجاء اختيار تقييم من 1 إلى 5 نجوم." : "Please select a rating of 1 to 5 stars."
      );
      return;
    }

    Alert.alert(
      isRtl ? "شكراً لك" : "Thank you",
      isRtl ? "تم إرسال تقييمك (تجريبي)." : "Your review has been sent (Demo)."
    );
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating;
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Text style={[s.star, { color: filled ? "#FACC15" : "#E5E7EB" }]}>★</Text>
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onBack} activeOpacity={0.85}>
            <Text style={s.backText}>{isRtl ? "رجوع" : "Back"}</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>
            {isRtl ? "تفاصيل الطلب" : "Order Details"}
          </Text>

          <Text style={{ color: "transparent" }}>___</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={s.content}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Info card */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>{order.serviceType}</Text>

          <Text style={s.line}>
            {isRtl ? "الفني / المركز: " : "Tech / Center: "}
            {order.providerName}
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: isRtl ? "flex-start" : "flex-end",
              marginTop: 6,
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 999,
              borderWidth: 1,
              borderColor: theme === "dark" ? "#3D354E" : "#E5DEF8",
              backgroundColor: theme === "dark" ? "#2B243C" : "#F8F5FF",
            }}
            onPress={() => onOpenTechnicianRatings?.(order.providerName)}
            activeOpacity={0.9}
          >
            <Text style={{ fontSize: 11, color: colors.primary, fontWeight: "800" }}>
              {isRtl ? "عرض تقييمات الفني" : "View Tech Reviews"}
            </Text>
          </TouchableOpacity>

          <Text style={s.line}>
            {isRtl ? "السيارة: " : "Car: "}
            {order.car}
          </Text>
          <Text style={s.line}>
            {isRtl ? "التاريخ والوقت: " : "Date & Time: "}
            {order.date}
          </Text>
          <Text style={s.line}>
            {isRtl ? "رقم الطلب: " : "Order ID: "}
            {order.id}
          </Text>

          <View style={[s.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
            <Text style={s.statusText}>{order.statusLabel}</Text>
          </View>
        </View>

        {/* Pricing card */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>
            {isRtl ? "السعر والمدة" : "Price & Duration"}
          </Text>

          <View style={s.row}>
            <View>
              <Text style={s.priceText}>
                {order.price && order.price !== "—" ? order.price : isRtl ? "سيتم التحديد" : "To be decided"}
              </Text>
              <Text style={s.subPriceText}>
                {isRtl
                  ? "السعر النهائي يتم تأكيده من الفني قبل البدء."
                  : "Final price is confirmed by technician before starting."}
              </Text>
            </View>

            <View>
              <Text style={s.subPriceText}>
                {isRtl ? "المدة التقريبية: " : "Approx Duration: "}
                {order.eta || (isRtl ? "غير محددة" : "TBD")}
              </Text>
            </View>
          </View>
        </View>

        {/* Action card */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>
            {isRtl ? "إدارة الخدمة" : "Service Management"}
          </Text>
          <Text style={s.line}>
            {isRtl
              ? "عند انتهاء الفني من العمل، يمكنك تأكيد إنهاء الخدمة من هنا."
              : "When the technician finishes work, you can confirm completion here."}
          </Text>

          <TouchableOpacity
            style={[
              s.primaryBtn,
              order.status !== "active" && s.disabledBtn,
            ]}
            onPress={handleFinish}
            activeOpacity={0.9}
            disabled={order.status !== "active"}
          >
            <Text style={s.primaryText}>
              {isRtl ? "تأكيد إنهاء الخدمة" : "Confirm Completion"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Rating card */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>
            {isRtl ? "تقييم الفني" : "Rate Technician"}
          </Text>

          <View style={s.ratingRow}>{renderStars()}</View>

          <Text style={s.ratingHint}>
            {canRate
              ? isRtl
                ? "اختر عدد النجوم ثم اكتب تعليقاً بسيطاً عن التجربة."
                : "Choose stars and write a brief comment about your experience."
              : isRtl
                ? "سيتم تفعيل التقييم بعد اكتمال الطلب."
                : "Rating will be enabled after order completion."}
          </Text>

          <View style={{ height: 10 }} />

          <TextInput
            style={s.input}
            placeholder={isRtl ? "اكتب ملاحظاتك عن الخدمة (اختياري)" : "Write your feedback (Optional)"}
            placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
            multiline
            value={comment}
            onChangeText={setComment}
            editable={canRate}
          />

          <TouchableOpacity
            style={[s.primaryBtn, !canRate && s.disabledBtn]}
            onPress={handleSendRating}
            activeOpacity={0.9}
            disabled={!canRate}
          >
            <Text style={s.primaryText}>
              {isRtl ? "إرسال التقييم" : "Submit Rating"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
