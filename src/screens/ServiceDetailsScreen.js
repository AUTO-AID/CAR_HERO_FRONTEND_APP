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
import { getServiceDetailsStyles } from "../styles/serviceDetailsStyles";
import { t } from "../services/i18n";
import { LIGHT_COLORS, DARK_COLORS } from "../theme/colors";

function ServiceExtraFields({ serviceId, values, setValues, lang, theme }) {
  const s = getServiceDetailsStyles(theme, lang);
  const colors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  switch (serviceId) {
    case "tire":
      return (
        <TextInput
          style={s.input}
          placeholder={t("tireCount", lang)}
          placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
          keyboardType="numeric"
          value={values.tires}
          onChangeText={(v) => setValues({ ...values, tires: v })}
        />
      );

    case "fuel":
      return (
        <TextInput
          style={s.input}
          placeholder={t("fuelTypePrompt", lang)}
          placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
          value={values.fuelType}
          onChangeText={(v) => setValues({ ...values, fuelType: v })}
        />
      );

    case "tow":
      return (
        <TextInput
          style={s.input}
          placeholder={t("towPrompt", lang)}
          placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
          value={values.canMove}
          onChangeText={(v) => setValues({ ...values, canMove: v })}
        />
      );

    case "emergency":
      return (
        <Text style={{ color: "#E53E3E", textAlign: lang === "ar" ? "right" : "left", fontWeight: "bold" }}>
          {t("emergencyPrompt", lang)}
        </Text>
      );

    default:
      return null;
  }
}

export default function ServiceDetailsScreen({
  lang = "ar",
  theme = "light",
  currentUser,
  service = { id: "tire", title: "استبدال دولاب" },
  onBack,
  onSubmit, // Re-routing for map explore (saves draft)
  onConfirmRequest, // Final submit
  initialValues,
  pickedLocation,
}) {
  const insets = useSafeAreaInsets();
  const s = getServiceDetailsStyles(theme, lang);
  const isRtl = lang === "ar";

  // Pre-fill from currentUser (or draft values if coming back from map)
  const [carModel, setCarModel] = useState("");
  const [plate, setPlate] = useState("");
  const [notes, setNotes] = useState("");
  const [when, setWhen] = useState("now");
  const [extra, setExtra] = useState({});
  const [isEditingVehicle, setIsEditingVehicle] = useState(false);

  // Load profile vehicle details or draft details
  useEffect(() => {
    if (initialValues) {
      if (initialValues.carModel) setCarModel(initialValues.carModel);
      if (initialValues.plate) setPlate(initialValues.plate);
      if (initialValues.notes) setNotes(initialValues.notes);
      if (initialValues.when) setWhen(initialValues.when);
      if (initialValues.extra) setExtra(initialValues.extra);
      if (initialValues.isEditingVehicle) setIsEditingVehicle(initialValues.isEditingVehicle);
    } else if (currentUser) {
      setCarModel(currentUser.carModel || "");
      setPlate(currentUser.plate || "");
    }
  }, [initialValues, currentUser]);

  const canSubmit = useMemo(() => {
    return carModel.trim().length > 0;
  }, [carModel]);

  const handlePickLocation = () => {
    if (!canSubmit) {
      Alert.alert(t("alertNotification", lang), t("enterCarModelWarning", lang));
      return;
    }

    const payload = {
      serviceType: service.id,
      carModel,
      plate,
      notes,
      when,
      extra,
      isEditingVehicle,
    };

    onSubmit?.(payload);
  };

  const handleFinalSubmit = () => {
    if (!pickedLocation) {
      Alert.alert(t("alertNotification", lang), t("selectLocationWarning", lang));
      return;
    }

    const payload = {
      serviceType: service.id,
      carModel,
      plate,
      notes,
      when,
      extra,
      location: pickedLocation,
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
          <TouchableOpacity style={s.backBtn} onPress={onBack} activeOpacity={0.85}>
            <Text style={s.backText}>{lang === "ar" ? "رجوع" : "Back"}</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>
            {t("serviceDetailsOf", lang)} {t(service.id, lang)}
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
        {/* Car info - Fetched from account details */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>{t("registeredCarTitle", lang)}</Text>

          {!isEditingVehicle ? (
            <View style={{ gap: 4 }}>
              <View style={{ flexDirection: isRtl ? "row-reverse" : "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 13, color: theme === "dark" ? "#AAA" : "#666" }}>
                  {t("carModel", lang)}:
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: theme === "dark" ? "#FFF" : "#111" }}>
                  {carModel || "---"}
                </Text>
              </View>

              <View style={{ flexDirection: isRtl ? "row-reverse" : "row", justifyContent: "space-between", marginTop: 4 }}>
                <Text style={{ fontSize: 13, color: theme === "dark" ? "#AAA" : "#666" }}>
                  {t("plateNumber", lang)}:
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: theme === "dark" ? "#FFF" : "#111" }}>
                  {plate || "---"}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => setIsEditingVehicle(true)}
                activeOpacity={0.8}
                style={{ 
                  marginTop: 10, 
                  alignSelf: isRtl ? "flex-start" : "flex-end",
                  borderBottomWidth: 1,
                  borderColor: theme === "dark" ? "#C394E3" : "#B57EDC"
                }}
              >
                <Text style={{ fontSize: 12, color: theme === "dark" ? "#C394E3" : "#B57EDC", fontWeight: "800" }}>
                  {t("editCarForOrder", lang)}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ gap: 10 }}>
              <TextInput
                style={s.input}
                placeholder={t("carModelPlaceholder", lang)}
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={carModel}
                onChangeText={setCarModel}
              />
              <TextInput
                style={s.input}
                placeholder={t("platePlaceholder", lang)}
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={plate}
                onChangeText={setPlate}
              />
              <TouchableOpacity
                onPress={() => setIsEditingVehicle(false)}
                activeOpacity={0.8}
                style={{ alignSelf: isRtl ? "flex-start" : "flex-end" }}
              >
                <Text style={{ fontSize: 12, color: theme === "dark" ? "#C394E3" : "#B57EDC", fontWeight: "800" }}>
                  {lang === "ar" ? "حفظ" : "Save"}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Unique Fields: Extra details by service type */}
        {service.id !== "emergency" && service.id !== "mechanic" && (
          <View style={s.card}>
            <Text style={s.sectionTitle}>{t("extraFieldsTitle", lang)}</Text>
            <ServiceExtraFields
              serviceId={service.id}
              values={extra}
              setValues={setExtra}
              lang={lang}
              theme={theme}
            />
          </View>
        )}

        {service.id === "emergency" && (
          <View style={s.card}>
            <ServiceExtraFields
              serviceId={service.id}
              values={extra}
              setValues={setExtra}
              lang={lang}
              theme={theme}
            />
          </View>
        )}

        {/* Location Display */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>{t("locationSection", lang)}</Text>
          {pickedLocation ? (
            <View style={{ marginTop: 4, gap: 8 }}>
              <Text style={{ textAlign: isRtl ? "right" : "left", color: theme === "dark" ? "#FFF" : "#333" }}>
                {t("locationConfirmed", lang)}: {pickedLocation.latitude.toFixed(4)}, {pickedLocation.longitude.toFixed(4)}
              </Text>
              <TouchableOpacity onPress={handlePickLocation} activeOpacity={0.8}>
                <Text style={{ textAlign: isRtl ? "right" : "left", color: theme === "dark" ? "#C394E3" : "#6200EE", fontWeight: "bold" }}>
                  {t("changeLocation", lang)}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={[
                s.outlineBtn,
                {
                  marginTop: 6,
                  borderColor: theme === "dark" ? "#C394E3" : "#6200EE",
                  borderWidth: 1,
                  padding: 12,
                  borderRadius: 14,
                  alignItems: "center",
                  backgroundColor: theme === "dark" ? "#2B243C" : "#FFFFFF"
                },
              ]}
              onPress={handlePickLocation}
              activeOpacity={0.85}
            >
              <Text style={{ color: theme === "dark" ? "#C394E3" : "#6200EE", fontWeight: "bold" }}>
                {t("pickLocationBtn", lang)}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* When */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>{t("serviceTimeSection", lang)}</Text>

          <View style={s.pillRow}>
            <TouchableOpacity
              style={[
                s.pill,
                when === "now" ? s.pillActive : s.pillInactive,
              ]}
              onPress={() => setWhen("now")}
              activeOpacity={0.85}
            >
              <Text
                style={[
                  s.pillText,
                  { color: when === "now" ? (theme === "dark" ? "#FFF" : "#111") : (theme === "dark" ? "#888" : "#666") },
                ]}
              >
                {t("now", lang)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                s.pill,
                when === "later" ? s.pillActive : s.pillInactive,
              ]}
              onPress={() => setWhen("later")}
              activeOpacity={0.85}
            >
              <Text
                style={[
                  s.pillText,
                  { color: when === "later" ? (theme === "dark" ? "#FFF" : "#111") : (theme === "dark" ? "#888" : "#666") },
                ]}
              >
                {t("later", lang)}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={s.hint}>
            {t("laterHint", lang)}
          </Text>
        </View>

        {/* Notes */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>{t("problemDescSection", lang)}</Text>

          <TextInput
            style={[s.input, { minHeight: 90, textAlignVertical: "top" }]}
            placeholder={t("problemDescPlaceholder", lang)}
            placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
            value={notes}
            onChangeText={setNotes}
            multiline
          />

          <Text style={s.hint}>
            {t("problemDescHint", lang)}
          </Text>
        </View>

        {pickedLocation ? (
          <TouchableOpacity
            style={[s.primaryBtn, { opacity: canSubmit ? 1 : 0.6 }]}
            onPress={handleFinalSubmit}
            activeOpacity={0.9}
            disabled={!canSubmit}
          >
            <Text style={s.primaryBtnText}>{t("confirmRequest", lang)}</Text>
          </TouchableOpacity>
        ) : (
          <Text style={{ textAlign: "center", color: theme === "dark" ? "#AAA" : "#666", marginTop: 10 }}>
            {t("selectLocationWarning", lang)}
          </Text>
        )}

        <View style={{ height: 18 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
