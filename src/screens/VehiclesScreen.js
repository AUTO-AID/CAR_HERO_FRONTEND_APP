import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from "react-native";
import { vehiclesStyles as s } from "../styles/vehiclesStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// بيانات تجريبية فقط
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

export default function VehiclesScreen() {
  const insets = useSafeAreaInsets();
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
      Alert.alert("تنبيه", "الرجاء إدخال نوع وموديل السيارة على الأقل.");
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

    // 👇👇👇 هنا نستدعي API لحفظ السيارة (إضافة أو تعديل)
    //
    // مثال:
    // fetch("https://api.example.com/user/vehicles", {
    //   method: editingVehicle ? "PUT" : "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    setVehicles(nextList);
    setShowForm(false);
    resetForm();
  };

  const handleDelete = (id) => {
    Alert.alert("تأكيد", "هل أنت متأكد من حذف هذه السيارة؟", [
      { text: "إلغاء", style: "cancel" },
      {
        text: "حذف",
        style: "destructive",
        onPress: () => {
          const next = vehicles.filter((v) => v.id !== id);

          // 👇👇👇 هنا نستدعي API لحذف السيارة
          //
          // fetch(`https://api.example.com/user/vehicles/${id}`, { method: "DELETE" });

          setVehicles(next);
        },
      },
    ]);
  };

  const handleSetDefault = (id) => {
    const next = vehicles.map((v) => ({
      ...v,
      isDefault: v.id === id,
    }));

    // 👇👇👇 هنا نستدعي API لتعيين السيارة الافتراضية
    //
    // fetch("https://api.example.com/user/vehicles/default", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ vehicleId: id }),
    // });

    setVehicles(next);
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          {onBack ? (
            <TouchableOpacity style={s.backBtn} onPress={onBack}>
              <Text style={s.backText}>رجوع</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 48 }} />
          )}

          <Text style={s.headerTitle}>سياراتي</Text>

          {/* عنصر وهمي لميزان الـ Row */}
          <View style={{ width: 48 }} />
        </View>
        <Text style={s.headerSubtitle}>
          أضف سياراتك واحفظ بياناتها لتسريع طلب الخدمة في كل مرة.
        </Text>
      </View>

      {/* Content */}
      <View style={s.content}>
        <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator={false}>
          {vehicles.length === 0 && (
            <Text style={s.emptyText}>لا توجد سيارات مضافة حتى الآن.</Text>
          )}

          {vehicles.map((v) => (
            <View key={v.id} style={s.card}>
              <View style={s.topRow}>
                <Text style={s.carTitle}>
                  {v.make} {v.model} {v.year ? `• ${v.year}` : ""}
                </Text>
                {v.isDefault && (
                  <View style={s.defaultBadge}>
                    <Text style={s.defaultText}>افتراضية</Text>
                  </View>
                )}
              </View>

              <View style={s.midRow}>
                <Text style={s.infoLine}>اللون: {v.color || "غير محدد"}</Text>
                <Text style={s.infoLine}>رقم اللوحة: {v.plateNumber || "غير محدد"}</Text>
                <Text style={s.infoLine}>VIN: {v.vin}</Text>
                <Text style={s.infoLine}>
                  موعد الصيانة القادمة: {v.serviceDueAt}
                </Text>
              </View>

              <View style={s.bottomRow}>
                <Text style={s.smallText}>معرّف السيارة: {v.id}</Text>

                <View style={s.actionsRow}>
                  <TouchableOpacity
                    style={s.actionBtn}
                    onPress={() => openEditForm(v)}
                  >
                    <Text style={s.actionText}>تعديل</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={s.actionBtn}
                    onPress={() => handleDelete(v.id)}
                  >
                    <Text style={s.actionText}>حذف</Text>
                  </TouchableOpacity>

                  {!v.isDefault && (
                    <TouchableOpacity
                      style={[s.actionBtn, s.primaryActionBtn]}
                      onPress={() => handleSetDefault(v.id)}
                    >
                      <Text style={[s.actionText, s.primaryActionText]}>
                        تعيين كافتراضية
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))}

          {/* نموذج الإضافة / التعديل */}
          {showForm && (
            <View style={s.formCard}>
              <Text style={s.formTitle}>
                {editingVehicle ? "تعديل بيانات السيارة" : "إضافة سيارة جديدة"}
              </Text>

              <Text style={s.label}>الشركة / العلامة</Text>
              <TextInput
                style={s.input}
                placeholder="مثال: Toyota"
                placeholderTextColor="#999"
                value={make}
                onChangeText={setMake}
              />

              <Text style={s.label}>الموديل</Text>
              <TextInput
                style={s.input}
                placeholder="مثال: Corolla"
                placeholderTextColor="#999"
                value={model}
                onChangeText={setModel}
              />

              <View style={s.row}>
                <View style={s.half}>
                  <Text style={s.label}>السنة</Text>
                  <TextInput
                    style={s.input}
                    placeholder="2018"
                    placeholderTextColor="#999"
                    value={year}
                    onChangeText={setYear}
                    keyboardType="numeric"
                  />
                </View>
                <View style={s.half}>
                  <Text style={s.label}>اللون</Text>
                  <TextInput
                    style={s.input}
                    placeholder="أبيض / أسود..."
                    placeholderTextColor="#999"
                    value={color}
                    onChangeText={setColor}
                  />
                </View>
              </View>

              <Text style={s.label}>رقم اللوحة</Text>
              <TextInput
                style={s.input}
                placeholder="س123456"
                placeholderTextColor="#999"
                value={plateNumber}
                onChangeText={setPlateNumber}
              />

              <Text style={s.label}>رقم الهيكل (VIN) (اختياري)</Text>
              <TextInput
                style={s.input}
                placeholder="اختياري"
                placeholderTextColor="#999"
                value={vin}
                onChangeText={setVin}
              />

              <Text style={s.label}>موعد الصيانة القادمة (اختياري)</Text>
              <TextInput
                style={s.input}
                placeholder="yyyy-mm-dd"
                placeholderTextColor="#999"
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
                >
                  <Text style={s.cancelText}>إلغاء</Text>
                </TouchableOpacity>

                <TouchableOpacity style={s.saveBtn} onPress={handleSave}>
                  <Text style={s.saveText}>
                    {editingVehicle ? "حفظ التعديلات" : "حفظ السيارة"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>

        {!showForm && (
          <TouchableOpacity
            style={s.addButton}
            onPress={openAddForm}
            activeOpacity={0.9}
          >
            <Text style={s.addButtonText}>إضافة سيارة جديدة</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
