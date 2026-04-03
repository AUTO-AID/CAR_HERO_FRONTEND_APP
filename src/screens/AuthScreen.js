import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { authStyles as s } from "../styles/authStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AuthScreen({ onContinueToOtp, onBackToWelcome }) {
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [carType, setCarType] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = () => {
    if (!phone.trim()) {
      Alert.alert("تنبيه", "الرجاء إدخال رقم الموبايل.");
      return;
    }

    if (mode === "register" && !accepted) {
      Alert.alert("تنبيه", "يجب الموافقة على الشروط والأحكام.");
      return;
    }

    // 👇👇👇 هنا نستدعي API
    //
    // مثال:
    // fetch(`https://api.example.com/auth/${mode}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     fullName,
    //     phone,
    //     password,
    //     carType,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // backend يرسل OTP إلى رقم الهاتف
    //     // ثم ننتقل لشاشة إدخال الرمز:
    //     onContinueToOtp?.({ phone, mode, carType });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Alert.alert("خطأ", "حدث خطأ أثناء الاتصال بالخادم.");
    //   });

    // للتجربة فقط بدون API:
    onContinueToOtp?.({ phone, mode, carType });
  };

  return (
    <KeyboardAvoidingView
      style={s.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>
          {mode === "login" ? "تسجيل الدخول" : "إنشاء حساب جديد"}
        </Text>
        <Text style={s.headerSubtitle}>
          سجّل رقم موبايلك وكلمة المرور ثم سنرسل لك رمز تحقق عبر SMS.
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        style={s.content}
        contentContainerStyle={{ paddingBottom: 24 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Segment: login / register */}
        <View style={s.segmentRow}>
          <TouchableOpacity
            style={[
              s.segmentBtn,
              mode === "login" && s.segmentBtnActive,
            ]}
            onPress={() => setMode("login")}
          >
            <Text
              style={[
                s.segmentText,
                mode === "login" && s.segmentTextActive,
              ]}
            >
              تسجيل الدخول
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              s.segmentBtn,
              mode === "register" && s.segmentBtnActive,
            ]}
            onPress={() => setMode("register")}
          >
            <Text
              style={[
                s.segmentText,
                mode === "register" && s.segmentTextActive,
              ]}
            >
              إنشاء حساب
            </Text>
          </TouchableOpacity>
        </View>

        <View style={s.card}>
          {mode === "register" && (
            <>
              <Text style={s.label}>الاسم الكامل</Text>
              <TextInput
                style={s.input}
                placeholder="اكتب اسمك الكامل"
                placeholderTextColor="#999"
                value={fullName}
                onChangeText={setFullName}
              />

              <Text style={s.label}>نوع السيارة</Text>
              <TextInput
                style={s.input}
                placeholder="مثال: تويوتا كامري 2020"
                placeholderTextColor="#999"
                value={carType}
                onChangeText={setCarType}
              />
            </>
          )}

          <Text style={s.label}>رقم الموبايل</Text>
          <TextInput
            style={s.input}
            placeholder="مثال: 09XXXXXXXX"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={s.label}>كلمة المرور</Text>
          <TextInput
            style={s.input}
            placeholder="********"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {mode === "login" && (
            <View style={s.linkRow}>
              <TouchableOpacity onPress={() => Alert.alert("تذكير", "سنضيف شاشة استعادة كلمة السر لاحقاً.")}>
                <Text style={s.linkText}>هل نسيت كلمة السر؟</Text>
              </TouchableOpacity>
            </View>
          )}

          {mode === "register" && (
            <TouchableOpacity
              style={s.termsRow}
              onPress={() => setAccepted((prev) => !prev)}
              activeOpacity={0.8}
            >
              <View style={s.checkbox}>
                {accepted && <View style={s.checkboxInner} />}
              </View>
              <Text style={s.termsText}>
                أوافق على الشروط والأحكام وسياسة الخصوصية.
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={s.primaryBtn}
            onPress={handleSubmit}
            activeOpacity={0.9}
          >
            <Text style={s.primaryBtnText}>
              {mode === "login" ? "متابعة" : "إنشاء حساب والمتابعة"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 10, alignSelf: "flex-start" }}
            onPress={onBackToWelcome}
          >
            <Text style={[s.linkText, { fontSize: 11 }]}>
              ⬅ الرجوع للشاشة الترحيبية
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={s.note}>
          لا يوجد تسجيل عبر الإيميل حالياً، تسجيل الدخول يتم حصراً عبر رقم
          الموبايل وكلمة المرور مع رمز تحقق SMS.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
