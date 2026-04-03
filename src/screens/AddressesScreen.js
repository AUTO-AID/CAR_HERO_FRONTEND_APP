import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { addressesStyles as s } from "../styles/addressesStyles";

export default function AddressesScreen({
  onBack,
  onPickNewAddress,
  pickedLocation,
  addresses,       // Props from App.js
  onAddAddress,    // Props from App.js
  onDeleteAddress, // Props from App.js
}) {
  const insets = useSafeAreaInsets();

  // Logic to handle pickedLocation
  useEffect(() => {
    if (pickedLocation) {
      Alert.alert(
        "موقع جديد",
        `تم تحديد الموقع: ${pickedLocation.lat.toFixed(4)}, ${pickedLocation.lng.toFixed(4)}\nهل تريد حفظ هذا العنوان؟`,
        [
          { text: "إلغاء", style: "cancel" },
          {
            text: "حفظ",
            onPress: () => {
              // إضافة عنوان جديد افتراضي
              // في تطبيق حقيقي يمكن فتح مودال لإدخال التفاصيل
              const newAddr = {
                id: Date.now().toString(),
                label: "عنوان جديد",
                line: `موقع محدد على الخريطة (${pickedLocation.lat.toFixed(2)}, ${pickedLocation.lng.toFixed(2)})`,
                note: "تمت إضافته عبر الخريطة",
                isDefault: false,
              };
              onAddAddress?.(newAddr);
            }
          }
        ]
      );
    }
  }, [pickedLocation]);

  const handleSetDefault = (id) => {
    // This logic would also need to be lifted or handled via onUpdateAddress if we want full persistence of "isDefault"
    // For now we just keep local visual update or would need App.js to handle it.
    // Let's assume for this task adding/deleting is the main focus.
    // هنا نستدعي API
    // مثال:
    // fetch(`https://api.example.com/user/addresses/${id}/default`, {
    //   method: "POST",
    // })
    //   .then(() => {
    //      console.log("Set Default Success");
    //      // تحديث الحالة محلياً أو إعادة جلب القائمة
    //   })
    //   .catch((err) => console.log(err));

    Alert.alert("تنبيه", "تغيير الافتراضي يحتاج تحديث الحالة في App.js (تم اختصاره حالياً).");
  };

  const handleDelete = (id) => {
    Alert.alert("تأكيد", "هل أنت متأكد من حذف هذا العنوان؟", [
      { text: "إلغاء", style: "cancel" },
      {
        text: "حذف",
        style: "destructive",
        onPress: () => {
          onDeleteAddress?.(id);
        },
      },
    ]);
  };

  const handleAdd = () => {
    if (onPickNewAddress) {
      onPickNewAddress();
    } else {
      Alert.alert(
        "إضافة عنوان",
        "لاحقاً يمكن فتح خريطة وتحديد الموقع بدقة لإضافة عنوان جديد."
      );
    }
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onBack}>
            <Text style={s.backText}>رجوع</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>عناويني</Text>

          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          إدارة العناوين المستخدمة في طلب الخدمات.
        </Text>
      </View>

      {/* Content */}
      <View style={s.content}>
        <ScrollView contentContainerStyle={s.list} showsVerticalScrollIndicator={false}>
          {addresses.map((addr) => (
            <View key={addr.id} style={s.card}>
              <View style={s.labelRow}>
                <Text style={s.addrLabel}>{addr.label}</Text>
                {addr.isDefault && (
                  <View style={s.defaultBadge}>
                    <Text style={s.defaultText}>افتراضي</Text>
                  </View>
                )}
              </View>

              <Text style={s.addrLine}>{addr.line}</Text>
              {addr.note ? <Text style={s.metaText}>{addr.note}</Text> : null}

              <View style={s.actionsRow}>
                <TouchableOpacity
                  style={s.actionBtn}
                  onPress={() => Alert.alert("تعديل", "لاحقاً نموذج تعديل العنوان.")}
                >
                  <Text style={s.actionText}>تعديل</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={s.actionBtn}
                  onPress={() => handleDelete(addr.id)}
                >
                  <Text style={s.actionText}>حذف</Text>
                </TouchableOpacity>

                {!addr.isDefault && (
                  <TouchableOpacity
                    style={[s.actionBtn, s.primaryActionBtn]}
                    onPress={() => handleSetDefault(addr.id)}
                  >
                    <Text
                      style={[s.actionText, s.primaryActionText]}
                    >
                      تعيين كافتراضي
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={s.addButton}
          onPress={handleAdd}
          activeOpacity={0.9}
        >
          <Text style={s.addButtonText}>إضافة عنوان جديد</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
