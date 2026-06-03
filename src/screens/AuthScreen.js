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
import { getAuthStyles } from "../styles/authStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "../services/i18n";

export default function AuthScreen({ lang, theme, onContinueToOtp, onBackToWelcome }) {
  const insets = useSafeAreaInsets();
  const s = getAuthStyles(theme, lang);
  const isRtl = lang === "ar";

  const [mode, setMode] = useState("login"); // "login" | "register"
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [carModel, setCarModel] = useState("");
  const [plate, setPlate] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = () => {
    if (!phone.trim()) {
      Alert.alert(t("alertNotification", lang), t("alertEnterPhone", lang));
      return;
    }

    if (mode === "register") {
      if (!carModel.trim()) {
        Alert.alert(t("alertNotification", lang), t("alertEnterCarModel", lang));
        return;
      }
      if (!accepted) {
        Alert.alert(t("alertNotification", lang), t("alertAcceptTerms", lang));
        return;
      }
    }

    onContinueToOtp?.({ phone, mode, fullName, carModel, plate });
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
          {mode === "login" ? t("loginTitle", lang) : t("registerTitle", lang)}
        </Text>
        <Text style={s.headerSubtitle}>
          {t("authDesc", lang)}
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        style={s.content}
        contentContainerStyle={{ paddingBottom: 24 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Segment: login / register */}
        <View style={s.segmentRow}>
          <TouchableOpacity
            style={[
              s.segmentBtn,
              mode === "login" && s.segmentBtnActive,
            ]}
            onPress={() => setMode("login")}
            activeOpacity={0.85}
          >
            <Text
              style={[
                s.segmentText,
                mode === "login" && s.segmentTextActive,
              ]}
            >
              {t("login", lang)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              s.segmentBtn,
              mode === "register" && s.segmentBtnActive,
            ]}
            onPress={() => setMode("register")}
            activeOpacity={0.85}
          >
            <Text
              style={[
                s.segmentText,
                mode === "register" && s.segmentTextActive,
              ]}
            >
              {t("register", lang)}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={s.card}>
          {mode === "register" && (
            <>
              <Text style={s.label}>{t("fullName", lang)}</Text>
              <TextInput
                style={s.input}
                placeholder={t("fullNamePlaceholder", lang)}
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={fullName}
                onChangeText={setFullName}
              />
            </>
          )}

          <Text style={s.label}>{t("phone", lang)}</Text>
          <TextInput
            style={s.input}
            placeholder={t("phonePlaceholder", lang)}
            placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={s.label}>{t("password", lang)}</Text>
          <TextInput
            style={s.input}
            placeholder={t("passwordPlaceholder", lang)}
            placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {mode === "register" && (
            <>
              <Text style={s.label}>{t("carModel", lang)}</Text>
              <TextInput
                style={s.input}
                placeholder={t("carModelPlaceholder", lang)}
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={carModel}
                onChangeText={setCarModel}
              />

              <Text style={s.label}>{t("plateNumber", lang)}</Text>
              <TextInput
                style={s.input}
                placeholder={t("platePlaceholder", lang)}
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={plate}
                onChangeText={setPlate}
              />
            </>
          )}

          {mode === "login" && (
            <View style={s.linkRow}>
              <TouchableOpacity onPress={() => Alert.alert(t("alertReminder", lang), t("forgetPasswordAlert", lang))}>
                <Text style={s.linkText}>{t("forgetPassword", lang)}</Text>
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
                {t("agreeTerms", lang)}
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={s.primaryBtn}
            onPress={handleSubmit}
            activeOpacity={0.9}
          >
            <Text style={s.primaryBtnText}>
              {mode === "login" ? t("continue", lang) : t("registerAndContinue", lang)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 14, alignSelf: isRtl ? "flex-start" : "flex-end" }}
            onPress={onBackToWelcome}
            activeOpacity={0.85}
          >
            <Text style={s.linkText}>
              {t("backToWelcome", lang)}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={s.note}>
          {t("smsNote", lang)}
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
