import React, { useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAddressesStyles } from "../styles/addressesStyles";
import { t } from "../services/i18n";

export default function AddressesScreen({
  lang = "ar",
  theme = "light",
  onBack,
  onPickNewAddress,
  pickedLocation,
  addresses = [],
  onAddAddress,
  onDeleteAddress,
}) {
  const insets = useSafeAreaInsets();
  const s = getAddressesStyles(theme, lang);
  const isRtl = lang === "ar";

  useEffect(() => {
    if (pickedLocation) {
      // pickedLocation could have structure pickedLocation.latitude or pickedLocation.lat
      const latVal = pickedLocation.latitude ?? pickedLocation.lat ?? 0;
      const lngVal = pickedLocation.longitude ?? pickedLocation.lng ?? 0;

      Alert.alert(
        isRtl ? "موقع جديد" : "New Location",
        isRtl
          ? `تم تحديد الموقع: ${latVal.toFixed(4)}, ${lngVal.toFixed(4)}\nهل تريد حفظ هذا العنوان؟`
          : `Location picked: ${latVal.toFixed(4)}, ${lngVal.toFixed(4)}\nDo you want to save this address?`,
        [
          { text: isRtl ? "إلغاء" : "Cancel", style: "cancel" },
          {
            text: isRtl ? "حفظ" : "Save",
            onPress: () => {
              const newAddr = {
                id: Date.now().toString(),
                label: isRtl ? "عنوان جديد" : "New Address",
                line: isRtl
                  ? `موقع محدد على الخريطة (${latVal.toFixed(2)}, ${lngVal.toFixed(2)})`
                  : `Selected map location (${latVal.toFixed(2)}, ${lngVal.toFixed(2)})`,
                note: isRtl ? "تمت إضافته عبر الخريطة" : "Added via Map",
                isDefault: false,
              };
              onAddAddress?.(newAddr);
            },
          },
        ]
      );
    }
  }, [pickedLocation]);

  const handleSetDefault = (id) => {
    Alert.alert(
      t("alertNotification", lang),
      isRtl
        ? "تغيير الافتراضي يحتاج تحديث الحالة في App.js (تم اختصاره حالياً)."
        : "Changing default needs state update in App.js (currently placeholder)."
    );
  };

  const handleDelete = (id) => {
    Alert.alert(
      isRtl ? "تأكيد" : "Confirm",
      isRtl ? "هل أنت متأكد من حذف هذا العنوان؟" : "Are you sure you want to delete this address?",
      [
        { text: isRtl ? "إلغاء" : "Cancel", style: "cancel" },
        {
          text: isRtl ? "حذف" : "Delete",
          style: "destructive",
          onPress: () => {
            onDeleteAddress?.(id);
          },
        },
      ]
    );
  };

  const handleAdd = () => {
    if (onPickNewAddress) {
      onPickNewAddress();
    } else {
      Alert.alert(
        isRtl ? "إضافة عنوان" : "Add Address",
        isRtl
          ? "لاحقاً يمكن فتح خريطة وتحديد الموقع بدقة لإضافة عنوان جديد."
          : "Later, you can open a map and precisely choose a location to add a new address."
      );
    }
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 20) }]}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onBack} activeOpacity={0.85}>
            <Text style={s.backText}>{isRtl ? "رجوع" : "Back"}</Text>
          </TouchableOpacity>

          <Text style={s.headerTitle}>{t("myAddresses", lang)}</Text>
          <View style={{ width: 48 }} />
        </View>

        <Text style={s.headerSubtitle}>
          {isRtl
            ? "إدارة العناوين المستخدمة في طلب الخدمات."
            : "Manage addresses used to request services."}
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
                    <Text style={s.defaultText}>{isRtl ? "افتراضي" : "Default"}</Text>
                  </View>
                )}
              </View>

              <Text style={s.addrLine}>{addr.line}</Text>
              {addr.note ? <Text style={s.metaText}>{addr.note}</Text> : null}

              <View style={s.actionsRow}>
                <TouchableOpacity
                  style={s.actionBtn}
                  onPress={() => Alert.alert(isRtl ? "تعديل" : "Edit", isRtl ? "لاحقاً نموذج تعديل العنوان." : "Later, edit address modal.")}
                  activeOpacity={0.8}
                >
                  <Text style={s.actionText}>{isRtl ? "تعديل" : "Edit"}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={s.actionBtn}
                  onPress={() => handleDelete(addr.id)}
                  activeOpacity={0.8}
                >
                  <Text style={s.actionText}>{isRtl ? "حذف" : "Delete"}</Text>
                </TouchableOpacity>

                {!addr.isDefault && (
                  <TouchableOpacity
                    style={[s.actionBtn, s.primaryActionBtn]}
                    onPress={() => handleSetDefault(addr.id)}
                    activeOpacity={0.8}
                  >
                    <Text style={[s.actionText, s.primaryActionText]}>
                      {isRtl ? "تعيين كافتراضي" : "Set Default"}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={s.addButton} onPress={handleAdd} activeOpacity={0.9}>
          <Text style={s.addButtonText}>
            {isRtl ? "إضافة عنوان جديد" : "Add New Address"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
