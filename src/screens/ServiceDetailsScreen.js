import React, { useMemo, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { serviceDetailsStyles as s } from "../styles/serviceDetailsStyles";

function ServiceExtraFields({ serviceId, values, setValues }) {
    switch (serviceId) {
        case "tire":
            return (
                <TextInput
                    style={s.input}
                    placeholder="عدد الإطارات المتضررة"
                    keyboardType="numeric"
                    value={values.tires}
                    onChangeText={(v) => setValues({ ...values, tires: v })}
                />
            );

        case "fuel":
            return (
                <TextInput
                    style={s.input}
                    placeholder="نوع الوقود (بنزين / ديزل)"
                    value={values.fuelType}
                    onChangeText={(v) => setValues({ ...values, fuelType: v })}
                />
            );

        case "tow":
            return (
                <TextInput
                    style={s.input}
                    placeholder="هل السيارة تتحرك؟ نعم / لا"
                    value={values.canMove}
                    onChangeText={(v) => setValues({ ...values, canMove: v })}
                />
            );

        case "emergency":
            return (
                <Text style={{ color: "red", textAlign: "right" }}>
                    سيتم التواصل معك فوراً 🚨
                </Text>
            );

        default:
            return null;
    }
}

export default function ServiceDetailsScreen({
    service = { id: "tire", title: "استبدال دولاب" },
    onBack,
    onSubmit, // Used for picking location (save draft)
    onConfirmRequest, // Final submit
    initialValues,
    pickedLocation,
}) {
    const insets = useSafeAreaInsets();

    // State initialization
    // If initialValues exists, use them. OR use defaults.
    // Note: useEffect below ensures updates if props change.
    const [carModel, setCarModel] = useState("");
    const [plate, setPlate] = useState("");
    const [notes, setNotes] = useState("");
    const [when, setWhen] = useState("now");
    const [extra, setExtra] = useState({});

    // Load initial values if present (e.g. returning from map)
    useEffect(() => {
        if (initialValues) {
            if (initialValues.carModel) setCarModel(initialValues.carModel);
            if (initialValues.plate) setPlate(initialValues.plate);
            if (initialValues.notes) setNotes(initialValues.notes);
            if (initialValues.when) setWhen(initialValues.when);
            if (initialValues.extra) setExtra(initialValues.extra);
        }
    }, [initialValues]);

    const canSubmit = useMemo(() => {
        // We require carModel. Location is optional here because we might be going to pick it.
        return carModel.trim().length > 0;
    }, [carModel]);

    const handlePickLocation = () => {
        if (!canSubmit) {
            Alert.alert("تنبيه", "الرجاء إدخال موديل السيارة أولاً.");
            return;
        }

        const payload = {
            serviceType: service.id,
            carModel,
            plate,
            notes,
            when,
            extra,
        };

        // This triggers App.js to set draft and open map
        onSubmit?.(payload);
    };

    const handleFinalSubmit = () => {
        if (!pickedLocation) {
            Alert.alert("تنبيه", "الرجاء تحديد الموقع من الخريطة.");
            return;
        }

        const payload = {
            serviceType: service.id,
            carModel,
            plate,
            notes,
            when,
            extra,
            location: pickedLocation
        };

        onConfirmRequest?.(payload);
    };

    return (
        <KeyboardAvoidingView
            style={[s.screen, { paddingTop: Math.max(insets.top, 10) }]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        >
            {/* Header */}
            <View style={s.header}>
                <View style={s.headerRow}>
                    <TouchableOpacity style={s.backBtn} onPress={onBack}>
                        <Text style={s.backText}>رجوع</Text>
                    </TouchableOpacity>

                    <Text style={s.headerTitle}>
                        تفاصيل طلب: {service.title}
                    </Text>

                    <Text style={{ color: "transparent" }}>___</Text>
                </View>
            </View>

            {/* Content */}
            <ScrollView
                style={s.content}
                contentContainerStyle={{ paddingBottom: 24 + insets.bottom }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {/* Car info */}
                <View style={s.card}>
                    <Text style={s.sectionTitle}>معلومات السيارة</Text>

                    <TextInput
                        style={s.input}
                        placeholder="موديل السيارة (مثال: Toyota Corolla 2018)"
                        placeholderTextColor="#999"
                        value={carModel}
                        onChangeText={setCarModel}
                    />

                    <View style={{ height: 10 }} />

                    <TextInput
                        style={s.input}
                        placeholder="رقم اللوحة (اختياري)"
                        placeholderTextColor="#999"
                        value={plate}
                        onChangeText={setPlate}
                    />
                </View>

                {/* Extra details by service */}
                <View style={s.card}>
                    <Text style={s.sectionTitle}>تفاصيل إضافية</Text>

                    <ServiceExtraFields
                        serviceId={service.id}
                        values={extra}
                        setValues={setExtra}
                    />
                </View>

                {/* Location Display */}
                <View style={s.card}>
                    <Text style={s.sectionTitle}>الموقع</Text>
                    {pickedLocation ? (
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ textAlign: 'right', color: '#333' }}>
                                تم تحديد الموقع: {pickedLocation.latitude.toFixed(4)}, {pickedLocation.longitude.toFixed(4)}
                            </Text>
                            <TouchableOpacity onPress={handlePickLocation} style={{ marginTop: 8 }}>
                                <Text style={{ textAlign: 'right', color: '#6200EE', fontWeight: 'bold' }}>تغيير الموقع</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={[s.outlineBtn, { marginTop: 8, borderColor: '#6200EE', borderWidth: 1, padding: 12, borderRadius: 8, alignItems: 'center' }]}
                            onPress={handlePickLocation}
                        >
                            <Text style={{ color: '#6200EE', fontWeight: 'bold' }}>📍 تحديد الموقع على الخريطة</Text>
                        </TouchableOpacity>
                    )}
                </View>


                {/* When */}
                <View style={s.card}>
                    <Text style={s.sectionTitle}>وقت الخدمة</Text>

                    <View style={s.pillRow}>
                        <TouchableOpacity
                            style={[
                                s.pill,
                                when === "now" ? s.pillActive : s.pillInactive,
                            ]}
                            onPress={() => setWhen("now")}
                        >
                            <Text
                                style={[
                                    s.pillText,
                                    { color: when === "now" ? "#111" : "#666" },
                                ]}
                            >
                                الآن
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                s.pill,
                                when === "later" ? s.pillActive : s.pillInactive,
                            ]}
                            onPress={() => setWhen("later")}
                        >
                            <Text
                                style={[
                                    s.pillText,
                                    { color: when === "later" ? "#111" : "#666" },
                                ]}
                            >
                                حجز لاحقاً
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={s.hint}>
                        (لاحقاً سنضيف اختيار تاريخ/وقت عند "حجز لاحقاً")
                    </Text>
                </View>

                {/* Notes */}
                <View style={s.card}>
                    <Text style={s.sectionTitle}>وصف المشكلة</Text>

                    <TextInput
                        style={[s.input, { minHeight: 90, textAlignVertical: "top" }]}
                        placeholder="اشرح المشكلة باختصار (اختياري)"
                        placeholderTextColor="#999"
                        value={notes}
                        onChangeText={setNotes}
                        multiline
                    />

                    <Text style={s.hint}>
                        (لاحقاً سنضيف رفع صور/فيديو قبل قدوم الفني)
                    </Text>
                </View>

                {pickedLocation ? (
                    <TouchableOpacity
                        style={[s.primaryBtn, { opacity: canSubmit ? 1 : 0.6 }]}
                        onPress={handleFinalSubmit}
                        activeOpacity={0.9}
                    >
                        <Text style={s.primaryBtnText}>تأكيد الطلب</Text>
                    </TouchableOpacity>
                ) : (
                    <Text style={{ textAlign: 'center', color: '#666', marginTop: 10 }}>
                        يرجى تحديد الموقع أولاً للمتابعة
                    </Text>
                )}


                <View style={{ height: 18 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
