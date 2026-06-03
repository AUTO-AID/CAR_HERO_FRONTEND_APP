import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { getTechnicianRatingsStyles } from "../styles/technicianRatingsStyles";

export default function TechnicianRatingsScreen({
  lang = "ar",
  theme = "light",
  technicianName,
  onBack,
}) {
  const s = getTechnicianRatingsStyles(theme, lang);
  const isRtl = lang === "ar";
  const avgRating = 4.7;

  const MOCK_REVIEWS = [
    {
      id: "r1",
      userName: isRtl ? "محمد ع." : "Mohamed A.",
      rating: 5,
      comment: isRtl
        ? "فني محترم جداً، وصل بسرعة وأنجز العمل بإتقان."
        : "Very professional technician, arrived quickly and did perfect work.",
      date: isRtl ? "اليوم - 02:15 م" : "Today - 02:15 PM",
    },
    {
      id: "r2",
      userName: isRtl ? "أحمد س." : "Ahmed S.",
      rating: 4,
      comment: isRtl
        ? "الخدمة جيدة لكن حصل تأخير بسيط بسبب الزحمة."
        : "Good service, but there was a minor delay due to traffic.",
      date: isRtl ? "أمس - 09:40 م" : "Yesterday - 09:40 PM",
    },
    {
      id: "r3",
      userName: isRtl ? "ليث ك." : "Layth K.",
      rating: 5,
      comment: isRtl
        ? "حل المشكلة من دون تغيير قطع غير لازمة. أنصح به."
        : "Solved the issue without replacing unnecessary parts. Recommended.",
      date: "2025-12-10",
    },
  ];

  const totalReviews = MOCK_REVIEWS.length;

  const renderStars = (count, size = "big") => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= count;
      result.push(
        <Text
          key={i}
          style={[
            s.star,
            {
              color: filled ? "#FACC15" : "#E5E7EB",
              fontSize: size === "big" ? 20 : 14,
            },
          ]}
        >
          ★
        </Text>
      );
    }
    return result;
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={s.header}>
        <View style={s.headerRow}>
          {onBack ? (
            <TouchableOpacity style={s.backBtn} onPress={onBack} activeOpacity={0.85}>
              <Text style={s.backText}>{isRtl ? "رجوع" : "Back"}</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 48 }} />
          )}

          <Text style={s.headerTitle}>
            {isRtl ? "تقييمات الفني" : "Technician Reviews"}
          </Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          {isRtl
            ? `عرض آخر التقييمات والتجارب مع: ${technicianName}`
            : `Showing latest reviews and experiences with: ${technicianName}`}
        </Text>
      </View>

      <View style={s.content}>
        {/* Summary card */}
        <View style={s.summaryCard}>
          <Text style={s.summaryTitle}>{technicianName}</Text>

          <View style={s.summaryRow}>
            <View style={{ alignItems: "center" }}>
              <Text style={s.ratingNumber}>{avgRating.toFixed(1)}</Text>
              <View style={s.starsRow}>{renderStars(Math.round(avgRating))}</View>
            </View>

            <Text style={s.summaryText}>
              {isRtl ? `عدد التقييمات: ${totalReviews}` : `Total Reviews: ${totalReviews}`}
            </Text>
          </View>

          <Text style={s.summaryText}>
            {isRtl
              ? "هذه التقييمات تساعد المستخدمين على اختيار أفضل مزوّد خدمة."
              : "These reviews help other users select the best service provider."}
          </Text>
        </View>

        {/* Reviews List */}
        <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator={false}>
          {MOCK_REVIEWS.map((rev) => (
            <View key={rev.id} style={s.reviewCard}>
              <View style={s.reviewHeader}>
                <Text style={s.reviewerName}>{rev.userName}</Text>
                <Text style={s.reviewDate}>{rev.date}</Text>
              </View>

              <View style={s.reviewStarsRow}>
                {renderStars(rev.rating, "small")}
              </View>

              <Text style={s.reviewComment}>{rev.comment}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
