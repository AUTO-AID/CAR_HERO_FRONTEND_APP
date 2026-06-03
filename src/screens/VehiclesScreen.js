import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from "react-native";
import { getVehiclesStyles } from "../styles/vehiclesStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "../services/i18n";

const MOCK_VEHICLES = [
  {
    id: "1",
    make: "Toyota",
    model: "Corolla",
    year: "2018",
    color: "أبيض",
    plateNumber: "س123456",
    vin: "—",
    serviceDueAt: "2025-12-30",
    isDefault: true,
  },
  {
    id: "2",
    make: "Hyundai",
    model: "Elantra",
    year: "2019",
    color: "أسود",
    plateNumber: "س654321",
    vin: "—",
    serviceDueAt: "2026-03-15",
    isDefault: false,
  },
];

export default function VehiclesScreen({ lang = "ar", theme = "light", onBack }) {
  const insets = useSafeAreaInsets();
  const s = getVehiclesStyles(theme, lang);
  const isRtl = lang === "ar";

  const [vehicles, setVehicles] = useState(MOCK_VEHICLES);
  const [showForm, setShowForm] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [vin, setVin] = useState("");
  const [serviceDueAt, setServiceDueAt] = useState("");

  const resetForm = () => {
    setMake("");
    setModel("");
    setYear("");
    setColor("");
    setPlateNumber("");
    setVin("");
    setServiceDueAt("");
    setEditingVehicle(null);
  };

  const openAddForm = () => {
    resetForm();
    setShowForm(true);
  };

  const openEditForm = (v) => {
    setEditingVehicle(v);
    setMake(v.make);
    setModel(v.model);
    setYear(v.year);
    setColor(v.color);
    setPlateNumber(v.plateNumber);
    setVin(v.vin === "—" ? "" : v.vin);
    setServiceDueAt(v.serviceDueAt);
    setShowForm(true);
  };

  const handleSave = () => {
    if (!make.trim() || !model.trim()) {
      Alert.alert(
        t("alertNotification", lang),
        isRtl ? "الرجاء إدخال نوع وموديل السيارة على الأقل." : "Please enter at least the car brand and model."
      );
      return;
    }

    const data = {
      id: editingVehicle?.id || Date.now().toString(),
      make,
      model,
      year,
      color,
      plateNumber,
      vin: vin || "—",
      serviceDueAt: serviceDueAt || "—",
      isDefault: editingVehicle?.isDefault || false,
    };

    let nextList;
    if (editingVehicle) {
      nextList = vehicles.map((v) => (v.id === editingVehicle.id ? data : v));
    } else {
      nextList = [...vehicles, data];
    }

    setVehicles(nextList);
    setShowForm(false);
    resetForm();
  };

  const handleDelete = (id) => {
    Alert.alert(
      isRtl ? "تأكيد" : "Confirm",
      isRtl ? "هل أنت متأكد من حذف هذه السيارة؟" : "Are you sure you want to delete this car?",
      [
        { text: isRtl ? "إلغاء" : "Cancel", style: "cancel" },
        {
          text: isRtl ? "حذف" : "Delete",
          style: "destructive",
          onPress: () => {
            const next = vehicles.filter((v) => v.id !== id);
            setVehicles(next);
          },
        },
      ]
    );
  };

  const handleSetDefault = (id) => {
    const next = vehicles.map((v) => ({
      ...v,
      isDefault: v.id === id,
    }));
    setVehicles(next);
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          {onBack ? (
            <TouchableOpacity style={s.backBtn} onPress={onBack} activeOpacity={0.85}>
              <Text style={s.backText}>{isRtl ? "رجوع" : "Back"}</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 48 }} />
          )}

          <Text style={s.headerTitle}>{t("myVehicles", lang)}</Text>
          <View style={{ width: 48 }} />
        </View>
        <Text style={s.headerSubtitle}>
          {isRtl
            ? "أضف سياراتك واحفظ بياناتها لتسريع طلب الخدمة في كل مرة."
            : "Add your cars and save their details to speed up service requests."}
        </Text>
      </View>

      {/* Content */}
      <View style={s.content}>
        <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator={false}>
          {vehicles.length === 0 && (
            <Text style={s.emptyText}>
              {isRtl ? "لا توجد سيارات مضافة حتى الآن." : "No vehicles added yet."}
            </Text>
          )}

          {vehicles.map((v) => (
            <View key={v.id} style={s.card}>
              <View style={s.topRow}>
                <Text style={s.carTitle}>
                  {v.make} {v.model} {v.year ? `• ${v.year}` : ""}
                </Text>
                {v.isDefault && (
                  <View style={s.defaultBadge}>
                    <Text style={s.defaultText}>{isRtl ? "افتراضية" : "Default"}</Text>
                  </View>
                )}
              </View>

              <View style={s.midRow}>
                <Text style={s.infoLine}>
                  {isRtl ? "اللون: " : "Color: "}
                  {v.color || (isRtl ? "غير محدد" : "Not specified")}
                </Text>
                <Text style={s.infoLine}>
                  {isRtl ? "رقم اللوحة: " : "Plate Number: "}
                  {v.plateNumber || (isRtl ? "غير محدد" : "Not specified")}
                </Text>
                <Text style={s.infoLine}>VIN: {v.vin}</Text>
                <Text style={s.infoLine}>
                  {isRtl ? "موعد الصيانة القادمة: " : "Next Maintenance: "}
                  {v.serviceDueAt}
                </Text>
              </View>

              <View style={s.bottomRow}>
                <Text style={s.smallText}>
                  {isRtl ? "معرّف السيارة: " : "Car ID: "}
                  {v.id}
                </Text>

                <View style={s.actionsRow}>
                  <TouchableOpacity style={s.actionBtn} onPress={() => openEditForm(v)} activeOpacity={0.8}>
                    <Text style={s.actionText}>{isRtl ? "تعديل" : "Edit"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={s.actionBtn} onPress={() => handleDelete(v.id)} activeOpacity={0.8}>
                    <Text style={s.actionText}>{isRtl ? "حذف" : "Delete"}</Text>
                  </TouchableOpacity>

                  {!v.isDefault && (
                    <TouchableOpacity
                      style={[s.actionBtn, s.primaryActionBtn]}
                      onPress={() => handleSetDefault(v.id)}
                      activeOpacity={0.8}
                    >
                      <Text style={[s.actionText, s.primaryActionText]}>
                        {isRtl ? "تعيين كافتراضية" : "Set Default"}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))}

          {/* Add / Edit Form */}
          {showForm && (
            <View style={s.formCard}>
              <Text style={s.formTitle}>
                {editingVehicle
                  ? isRtl
                    ? "تعديل بيانات السيارة"
                    : "Edit Vehicle Details"
                  : isRtl
                    ? "إضافة سيارة جديدة"
                    : "Add New Vehicle"}
              </Text>

              <Text style={s.label}>{isRtl ? "الشركة / العلامة" : "Make / Brand"}</Text>
              <TextInput
                style={s.input}
                placeholder="Example: Toyota"
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={make}
                onChangeText={setMake}
              />

              <Text style={s.label}>{isRtl ? "الموديل" : "Model"}</Text>
              <TextInput
                style={s.input}
                placeholder="Example: Corolla"
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={model}
                onChangeText={setModel}
              />

              <View style={s.row}>
                <View style={s.half}>
                  <Text style={s.label}>{isRtl ? "السنة" : "Year"}</Text>
                  <TextInput
                    style={s.input}
                    placeholder="2018"
                    placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                    value={year}
                    onChangeText={setYear}
                    keyboardType="numeric"
                  />
                </View>
                <View style={s.half}>
                  <Text style={s.label}>{isRtl ? "اللون" : "Color"}</Text>
                  <TextInput
                    style={s.input}
                    placeholder={isRtl ? "أبيض / أسود..." : "White / Black..."}
                    placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                    value={color}
                    onChangeText={setColor}
                  />
                </View>
              </View>

              <Text style={s.label}>{isRtl ? "رقم اللوحة" : "Plate Number"}</Text>
              <TextInput
                style={s.input}
                placeholder="plate"
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={plateNumber}
                onChangeText={setPlateNumber}
              />

              <Text style={s.label}>{isRtl ? "رقم الهيكل (VIN) (اختياري)" : "VIN (Optional)"}</Text>
              <TextInput
                style={s.input}
                placeholder="Optional"
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={vin}
                onChangeText={setVin}
              />

              <Text style={s.label}>{isRtl ? "موعد الصيانة القادمة (اختياري)" : "Next Maintenance (Optional)"}</Text>
              <TextInput
                style={s.input}
                placeholder="yyyy-mm-dd"
                placeholderTextColor={theme === "dark" ? "#6E6580" : "#999"}
                value={serviceDueAt}
                onChangeText={setServiceDueAt}
              />

              <View style={s.formButtonsRow}>
                <TouchableOpacity
                  style={s.cancelBtn}
                  onPress={() => {
                    setShowForm(false);
                    resetForm();
                  }}
                  activeOpacity={0.8}
                >
                  <Text style={s.cancelText}>{isRtl ? "إلغاء" : "Cancel"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={s.saveBtn} onPress={handleSave} activeOpacity={0.85}>
                  <Text style={s.saveText}>
                    {editingVehicle
                      ? isRtl
                        ? "حفظ التعديلات"
                        : "Save Changes"
                      : isRtl
                        ? "حفظ السيارة"
                        : "Save Vehicle"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>

        {!showForm && (
          <TouchableOpacity style={s.addButton} onPress={openAddForm} activeOpacity={0.9}>
            <Text style={s.addButtonText}>
              {isRtl ? "إضافة سيارة جديدة" : "Add New Vehicle"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
