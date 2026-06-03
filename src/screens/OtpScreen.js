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
import { getAuthStyles } from "../styles/authStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "../services/i18n";

export default function OtpScreen({ lang = "ar", theme = "light", phone, onVerified, onBack }) {
  const insets = useSafeAreaInsets();
  const s = getAuthStyles(theme, lang);
  const isRtl = lang === "ar";
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(45);

  const handleChangeDigit = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const next = [...code];
    next[index] = value.replace(/[^0-9]/g, "");
    setCode(next);
  };

  const handleVerify = () => {
    const joined = code.join("");
    if (joined.length < 4) {
      Alert.alert(t("alertNotification", lang), lang === "ar" ? "الرجاء إدخال رمز مكوّن من 4 أرقام." : "Please enter a 4-digit verification code.");
      return;
    }
    onVerified?.({ phone, token: "dummy-token" });
  };

  const handleResend = () => {
    Alert.alert(t("alertNotification", lang), lang === "ar" ? "سيتم إرسال رمز جديد إلى رقمك (تجريبي)." : "A new code will be sent to your phone (Demo).");
    setTimer(45);
  };

  return (
    <KeyboardAvoidingView
      style={s.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <Text style={s.headerTitle}>{t("otpTitle", lang)}</Text>
        <Text style={s.headerSubtitle}>
          {t("otpSubtitle", lang)}: {phone}
        </Text>
      </View>

      <View style={s.content}>
        <View style={s.otpCard}>
          <Text style={s.otpHint}>
            {lang === "ar"
              ? "الرجاء إدخال رمز مكون من 4 أرقام لتأكيد رقم الموبايل."
              : "Please enter the 4-digit code to confirm your mobile number."}
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
            <TouchableOpacity onPress={handleResend} activeOpacity={0.8}>
              <Text style={s.resendBtnText}>{t("resend", lang)}</Text>
            </TouchableOpacity>

            <Text style={s.resendText}>
              {timer > 0
                ? t("resendIn", lang).replace("{seconds}", timer)
                : lang === "ar" ? "يمكنك طلب رمز جديد الآن" : "You can request a new code now"}
            </Text>
          </View>

          <TouchableOpacity
            style={s.primaryBtn}
            onPress={handleVerify}
            activeOpacity={0.9}
          >
            <Text style={s.primaryBtnText}>
              {lang === "ar" ? "تأكيد الرمز والمتابعة" : "Confirm Code & Continue"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 14, alignSelf: isRtl ? "flex-start" : "flex-end" }}
            onPress={onBack}
            activeOpacity={0.8}
          >
            <Text style={s.linkText}>
              {lang === "ar" ? "⬅ تعديل رقم الموبايل" : "⬅ Modify mobile number"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
