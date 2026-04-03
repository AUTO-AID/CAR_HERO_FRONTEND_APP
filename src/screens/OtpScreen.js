import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { authStyles as s } from "../styles/authStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function OtpScreen({ phone, onVerified, onBack }) {
  const insets = useSafeAreaInsets();
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(45); // ثواني العد التنازلي (اختياري وبسيط)

  const handleChangeDigit = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const next = [...code];
    next[index] = value.replace(/[^0-9]/g, "");
    setCode(next);
  };

  const handleVerify = () => {
    const joined = code.join("");
    if (joined.length < 4) {
      Alert.alert("تنبيه", "الرجاء إدخال رمز مكوّن من 4 أرقام.");
      return;
    }

    // 👇👇👇 هنا نستدعي API
    //
    // مثال:
    // fetch("https://api.example.com/auth/verify-otp", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ phone, code: joined }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // إذا كان الرمز صحيح:
    //     onVerified?.(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Alert.alert("خطأ", "رمز التحقق غير صحيح أو منتهي.");
    //   });

    // للتجربة فقط:
    onVerified?.({ phone, token: "dummy-token" });
  };

  const handleResend = () => {
    // 👇👇👇 هنا نستدعي API لإعادة إرسال الرمز
    //
    // مثال:
    // fetch("https://api.example.com/auth/resend-otp", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ phone }),
    // });
    Alert.alert("تم", "سيتم إرسال رمز جديد إلى رقمك (تجريبي).");
    setTimer(45);
  };

  return (
    <KeyboardAvoidingView
      style={s.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>رمز التحقق</Text>
        <Text style={s.headerSubtitle}>
          أدخل الرمز المرسل إلى رقمك: {phone}
        </Text>
      </View>

      <View style={s.content}>
        <View style={s.otpCard}>
          <Text style={s.otpHint}>
            الرجاء إدخال رمز مكون من 4 أرقام لتأكيد رقم الموبايل.
          </Text>

          <View style={s.otpCodeRow}>
            {code.map((digit, idx) => (
              <TextInput
                key={idx}
                style={s.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(v) => handleChangeDigit(idx, v)}
              />
            ))}
          </View>

          <View style={s.resendRow}>
            <TouchableOpacity onPress={handleResend}>
              <Text style={s.resendBtnText}>إعادة إرسال الرمز</Text>
            </TouchableOpacity>

            <Text style={s.resendText}>
              {timer > 0
                ? `يمكنك طلب رمز جديد بعد ${timer} ثانية`
                : "يمكنك طلب رمز جديد الآن"}
            </Text>
          </View>

          <TouchableOpacity
            style={s.primaryBtn}
            onPress={handleVerify}
            activeOpacity={0.9}
          >
            <Text style={s.primaryBtnText}>تأكيد الرمز والمتابعة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 10, alignSelf: "flex-start" }}
            onPress={onBack}
          >
            <Text style={[s.linkText, { fontSize: 11 }]}>
              ⬅ تعديل رقم الموبايل
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
