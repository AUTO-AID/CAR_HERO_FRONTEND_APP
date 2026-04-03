import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { technicianRatingsStyles as s } from "../styles/technicianRatingsStyles";

// بيانات تجريبية
const MOCK_REVIEWS = [
  {
    id: "r1",
    userName: "محمد ع.",
    rating: 5,
    comment: "فني محترم جداً، وصل بسرعة وأنجز العمل بإتقان.",
    date: "اليوم - 02:15 م",
  },
  {
    id: "r2",
    userName: "أحمد س.",
    rating: 4,
    comment: "الخدمة جيدة لكن حصل تأخير بسيط بسبب الزحمة.",
    date: "أمس - 09:40 م",
  },
  {
    id: "r3",
    userName: "ليث ك.",
    rating: 5,
    comment: "حل المشكلة من دون تغيير قطع غير لازمة. أنصح به.",
    date: "2025-12-10",
  },
];

export default function TechnicianRatingsScreen({ technicianName, onBack }) {
  const avgRating = 4.7;
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

  // 👇👇👇 هنا نستدعي API لجلب تقييمات الفني
  //
  // useEffect(() => {
  //   fetch(`https://api.example.com/technicians/${technicianId}/reviews`)
  //     .then(res => res.json())
  //     .then(data => setReviews(data))
  //     .catch(err => console.log(err));
  // }, [technicianId]);

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={s.header}>
        <View style={s.headerRow}>
          {onBack ? (
            <TouchableOpacity style={s.backBtn} onPress={onBack}>
              <Text style={s.backText}>رجوع</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 48 }} />
          )}

          <Text style={s.headerTitle}>تقييمات الفني</Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          عرض آخر التقييمات والتجارب مع: {technicianName}
        </Text>
      </View>

      <View style={s.content}>
        {/* ملخص التقييم */}
        <View style={s.summaryCard}>
          <Text style={s.summaryTitle}>{technicianName}</Text>

          <View style={s.summaryRow}>
            <View>
              <Text style={s.ratingNumber}>{avgRating.toFixed(1)}</Text>
              <View style={s.starsRow}>{renderStars(Math.round(avgRating))}</View>
            </View>

            <Text style={s.summaryText}>
              عدد التقييمات: {totalReviews}
            </Text>
          </View>

          <Text style={s.summaryText}>
            هذه التقييمات تساعد المستخدمين على اختيار أفضل مزوّد خدمة.
          </Text>
        </View>

        {/* قائمة التقييمات */}
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
