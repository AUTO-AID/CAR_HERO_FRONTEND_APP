import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { mapStyles as s } from "../styles/mapStyles";
import {
  requestLocationPermission,
  getCurrentLocation,
} from "../services/locationService";

export default function MapScreen({ onBack, onConfirm, initialLocation }) {
  const [location, setLocation] = useState(initialLocation || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!initialLocation) {
      handleUseMyLocation();
    }
  }, []);

  const handleUseMyLocation = async () => {
    setLoading(true);
    try {
      const ok = await requestLocationPermission();
      if (!ok) {
        Alert.alert("تنبيه", "الرجاء السماح للتطبيق بالوصول إلى الموقع.");
        setLoading(false);
        return;
      }
      const loc = await getCurrentLocation();
      setLocation(loc);
    } catch (e) {
      console.log(e);
      Alert.alert("خطأ", "حدث خطأ أثناء جلب الموقع.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = () => {
    if (!location) {
      Alert.alert("تنبيه", "لم يتم تحديد موقع بعد.");
      return;
    }

    // هنا نستدعي API (اختياري) لحفظ الإحداثيات
    // مثال:
    // fetch("https://api.example.com/requests/set-location", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(location),
    // });

    onConfirm?.(location);
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={s.header}>
        <View style={s.headerRow}>
          <TouchableOpacity style={s.backBtn} onPress={onBack}>
            <Text style={s.backText}>رجوع</Text>
          </TouchableOpacity>

          <Text style={s.title}>تحديد موقعك</Text>

          <Text style={{ color: "transparent" }}>___</Text>
        </View>
        <Text style={s.hint}>سيتم استخدام موقعك الحالي أو يمكنك التحديث يدوياً</Text>
      </View>

      {/* "خريطة" بديلة عبارة عن كرت يعرض الإحداثيات */}
      <View style={s.mapWrap}>
        <View
          style={{
            flex: 1,
            padding: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading && <ActivityIndicator size="large" color="#B57EDC" />}

          {!loading && location && (
            <>
              <Text style={{ fontWeight: "900", fontSize: 16, marginBottom: 8 }}>
                موقعك الحالي
              </Text>
              <Text style={{ fontSize: 13 }}>
                خط العرض: {location.latitude.toFixed(6)}
              </Text>
              <Text style={{ fontSize: 13, marginTop: 4 }}>
                خط الطول: {location.longitude.toFixed(6)}
              </Text>
              <Text style={[s.hint, { marginTop: 10, textAlign: "center" }]}>
                سيتم استخدام هذه الإحداثيات لإرسال أقرب فني إليك.
              </Text>
            </>
          )}

          {!loading && !location && (
            <Text style={{ fontSize: 13, color: "#777" }}>
              لم يتم تحديد الموقع بعد. اضغط "موقعي الحالي".
            </Text>
          )}
        </View>
      </View>

      {/* Footer */}
      <View style={s.footer}>
        <View style={s.row}>
          <TouchableOpacity style={s.btn} onPress={handleUseMyLocation}>
            <Text style={s.btnText}>موقعي الحالي</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.btn}
            onPress={() => setLocation(null)}
          >
            <Text style={s.btnText}>مسح التحديد</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={s.primaryBtn} onPress={handleConfirm}>
          <Text style={s.primaryText}>تأكيد الموقع</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
