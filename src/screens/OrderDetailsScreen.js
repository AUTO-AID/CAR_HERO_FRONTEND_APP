import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert,
} from "react-native";
import { orderDetailsStyles as s } from "../styles/orderDetailsStyles";
import { COLORS } from "../theme/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function getStatusColor(status) {
    if (status === "active") return "#F59E0B";
    if (status === "completed") return "#10B981";
    if (status === "cancelled") return "#EF4444";
    return COLORS.primary;
}

export default function OrderDetailsScreen({ order, onBack, onOpenTechnicianRatings }) {
    const insets = useSafeAreaInsets();
    // لو الطلب مكتمل نسمح بالتقييم
    const canRate = order?.status === "completed";

    const [rating, setRating] = useState(0); // 1..5
    const [comment, setComment] = useState("");

    const handleFinish = () => {
        if (order?.status !== "active") {
            Alert.alert("تنبيه", "لا يمكن إنهاء طلب غير نشط.");
            return;
        }

        // 👇👇👇 هنا نستدعي API لتأكيد إنهاء الخدمة
        //
        // fetch(`https://api.example.com/orders/${order.id}/finish`, {
        //   method: "POST",
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("Order finished:", data);
        //     // ممكن نحدث حالة الطلب في الواجهة أو نرجع لقائمة الطلبات
        //   })
        //   .catch((err) => console.log(err));

        Alert.alert("تم", "تم تأكيد إنهاء الخدمة (تجريبي).");
    };

    const handleSendRating = () => {
        if (!canRate) {
            Alert.alert("تنبيه", "يمكن تقييم الفني بعد اكتمال الطلب فقط.");
            return;
        }

        if (rating === 0) {
            Alert.alert("تنبيه", "الرجاء اختيار تقييم من 1 إلى 5 نجوم.");
            return;
        }

        const payload = {
            orderId: order.id,
            rating,
            comment,
        };

        console.log("RATING PAYLOAD:", payload);

        // 👇👇👇 هنا نستدعي API لحفظ تقييم الفني
        //
        // fetch("https://api.example.com/ratings", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(payload),
        // })
        //   .then((res) => res.json())
        //   .then((data) => console.log("Rating saved:", data))
        //   .catch((err) => console.log(err));

        Alert.alert("شكراً لك", "تم إرسال تقييمك (تجريبي).");
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const filled = i <= rating;
            stars.push(
                <TouchableOpacity key={i} onPress={() => setRating(i)}>
                    <Text style={[s.star, { color: filled ? "#FACC15" : "#E5E7EB" }]}>
                        ★
                    </Text>
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
                    <TouchableOpacity style={s.backBtn} onPress={onBack}>
                        <Text style={s.backText}>رجوع</Text>
                    </TouchableOpacity>

                    <Text style={s.headerTitle}>تفاصيل الطلب</Text>

                    <Text style={{ color: "transparent" }}>___</Text>
                </View>
            </View>

            {/* Content */}
            <ScrollView
                style={s.content}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                {/* معلومات الطلب */}
                <View style={s.card}>
                    <Text style={s.sectionTitle}>{order.serviceType}</Text>

                    <Text style={s.line}>الفني / المركز: {order.providerName}</Text>
                    <TouchableOpacity
                        style={{
                            alignSelf: "flex-start",
                            marginTop: 4,
                            paddingHorizontal: 10,
                            paddingVertical: 4,
                            borderRadius: 999,
                            borderWidth: 1,
                            borderColor: "#E5DEF8",
                            backgroundColor: "#F8F5FF",
                        }}
                        onPress={() =>
                            onOpenTechnicianRatings?.(order.providerName)
                        }
                        activeOpacity={0.9}
                    >
                        <Text
                            style={{
                                fontSize: 11,
                                color: COLORS.primary,
                                fontWeight: "800",
                            }}
                        >
                            عرض تقييمات الفني
                        </Text>
                    </TouchableOpacity>

                    <Text style={s.line}>السيارة: {order.car}</Text>
                    <Text style={s.line}>التاريخ والوقت: {order.date}</Text>
                    <Text style={s.line}>رقم الطلب: {order.id}</Text>

                    <View
                        style={[
                            s.statusBadge,
                            { backgroundColor: getStatusColor(order.status) },
                        ]}
                    >
                        <Text style={s.statusText}>{order.statusLabel}</Text>
                    </View>
                </View>

                {/* السعر والمدة */}
                <View style={s.card}>
                    <Text style={s.sectionTitle}>السعر والمدة</Text>

                    <View style={s.row}>
                        <View>
                            <Text style={s.priceText}>
                                {order.price && order.price !== "—" ? order.price : "سيتم التحديد"}
                            </Text>
                            <Text style={s.subPriceText}>
                                السعر النهائي يتم تأكيده من الفني قبل البدء.
                            </Text>
                        </View>

                        <View>
                            <Text style={s.subPriceText}>
                                المدة التقريبية: {order.eta || "غير محددة"}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* أزرار التنفيذ */}
                <View style={s.card}>
                    <Text style={s.sectionTitle}>إدارة الخدمة</Text>
                    <Text style={s.line}>
                        عند انتهاء الفني من العمل، يمكنك تأكيد إنهاء الخدمة من هنا.
                    </Text>

                    <TouchableOpacity
                        style={[
                            s.primaryBtn,
                            order.status !== "active" && s.disabledBtn,
                        ]}
                        onPress={handleFinish}
                        activeOpacity={0.9}
                    >
                        <Text style={s.primaryText}>تأكيد إنهاء الخدمة</Text>
                    </TouchableOpacity>
                </View>

                {/* التقييم */}
                <View style={s.card}>
                    <Text style={s.sectionTitle}>تقييم الفني</Text>

                    <View style={s.ratingRow}>{renderStars()}</View>

                    <Text style={s.ratingHint}>
                        {canRate
                            ? "اختر عدد النجوم ثم اكتب تعليقاً بسيطاً عن التجربة."
                            : "سيتم تفعيل التقييم بعد اكتمال الطلب."}
                    </Text>

                    <View style={{ height: 10 }} />

                    <TextInput
                        style={s.input}
                        placeholder="اكتب ملاحظاتك عن الخدمة (اختياري)"
                        placeholderTextColor="#999"
                        multiline
                        value={comment}
                        onChangeText={setComment}
                    />

                    <TouchableOpacity
                        style={[s.primaryBtn, !canRate && s.disabledBtn]}
                        onPress={handleSendRating}
                        activeOpacity={0.9}
                    >
                        <Text style={s.primaryText}>إرسال التقييم</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
