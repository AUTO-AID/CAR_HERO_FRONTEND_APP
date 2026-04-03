// src/screens/InteractiveMapScreen.js
import React, { useMemo, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { WebView } from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { interactiveMapStyles as s } from "../styles/interactiveMapStyles";

export default function InteractiveMapScreen({
  userLocation,
  onBack,
  onConfirm,
  fromStep, // "home" | "profile" | ...
}) {
  const webRef = useRef(null);
  const insets = useSafeAreaInsets();

  // ✅ استخدم userLocation بدل initialLocation
  const startLat = userLocation?.latitude ?? 33.5138; // دمشق افتراضياً
  const startLng = userLocation?.longitude ?? 36.2765;

  const [picked, setPicked] = useState({ latitude: startLat, longitude: startLng });

  const html = useMemo(() => {
    return `
<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <style>
    html, body, #map { height:100%; margin:0; padding:0; }
    .hint {
      position:absolute; top:12px; left:12px; right:12px;
      background: rgba(255,255,255,0.92);
      padding:10px 12px; border-radius: 12px;
      font-family: Arial; font-size: 14px;
      box-shadow: 0 6px 18px rgba(0,0,0,0.12);
      text-align: right;
      direction: rtl;
      z-index: 9999;
    }
  </style>
</head>
<body>
  <div class="hint">اضغط على الخريطة لتحديد موقع</div>
  <div id="map"></div>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script>
    const start = { lat: ${startLat}, lng: ${startLng} };

    const map = L.map('map').setView([start.lat, start.lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map);

    let marker = L.marker([start.lat, start.lng]).addTo(map);

    function send(lat, lng){
      window.ReactNativeWebView.postMessage(JSON.stringify({ lat, lng }));
    }

    map.on('click', function(e){
      const { lat, lng } = e.latlng;
      marker.setLatLng([lat, lng]);
      send(lat, lng);
    });

    // أول إرسال
    send(start.lat, start.lng);
  </script>
</body>
</html>
`;
  }, [startLat, startLng]);

  const handleConfirm = () => {
    if (typeof onConfirm !== "function") {
      Alert.alert("خطأ", "onConfirm غير موجودة (تأكد من App.js)");
      return;
    }
    onConfirm(picked, fromStep);
  };

  return (
    <View style={s.screen}>
      {/* Header */}
      <View style={[s.header, { paddingTop: Math.max(insets.top, 10) }]}>
        <TouchableOpacity style={s.backBtn} onPress={() => onBack?.(fromStep)} activeOpacity={0.9}>
          <Text style={s.backText}>رجوع</Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Text style={s.headerTitle}>الخريطة التفاعلية</Text>
          <Text style={s.headerSubtitle}>اختر موقعك أو اختر فني من الخريطة</Text>
        </View>
      </View>

      {/* Map */}
      <View style={s.mapWrap}>
        <WebView
          ref={webRef}
          source={{ html }}
          onMessage={(evt) => {
            try {
              const msg = JSON.parse(evt.nativeEvent.data);
              if (typeof msg.lat === "number" && typeof msg.lng === "number") {
                setPicked({ latitude: msg.lat, longitude: msg.lng });
              }
            } catch (e) { }
          }}
        />
      </View>

      {/* Action */}
      <View style={[s.bottomBar, { paddingBottom: Math.max(insets.bottom, 10) }]}>
        <TouchableOpacity style={s.primaryBtn} onPress={handleConfirm} activeOpacity={0.9}>
          <Text style={s.primaryText}>تأكيد الموقع</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
