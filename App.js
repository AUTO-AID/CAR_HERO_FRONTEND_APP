// App.js
import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import AuthScreen from "./src/screens/AuthScreen";
import OtpScreen from "./src/screens/OtpScreen";
import LocationPermissionScreen from "./src/screens/LocationPermissionScreen";

import HomeScreen from "./src/screens/HomeScreen";
import ServiceDetailsScreen from "./src/screens/ServiceDetailsScreen";

import TechnicianTrackingScreen from "./src/screens/TechnicianTrackingScreen";

import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDetailsScreen from "./src/screens/OrderDetailsScreen";

import PointsScreen from "./src/screens/PointsScreen";

import ChatsScreen from "./src/screens/ChatsScreen";
import ChatThreadScreen from "./src/screens/ChatThreadScreen";

import ProfileScreen from "./src/screens/ProfileScreen";
import VehiclesScreen from "./src/screens/VehiclesScreen";
import BookingScreen from "./src/screens/BookingScreen";
import AddressesScreen from "./src/screens/AddressesScreen";
import WashPlanScreen from "./src/screens/WashPlanScreen";
import PremiumScreen from "./src/screens/PremiumScreen";
import PaymentMethodsScreen from "./src/screens/PaymentMethodsScreen";

import OffersScreen from "./src/screens/OffersScreen";

import InteractiveMapScreen from "./src/screens/InteractiveMapScreen";

import BottomTabBar from "./src/components/BottomTabBar";

export default function App() {
  const [step, setStep] = useState("welcome");
  const [navStack, setNavStack] = useState([]);

  // --- Localization & Theme & User States ---
  const [lang, setLang] = useState("ar"); // "ar" | "en"
  const [theme, setTheme] = useState("light"); // "light" | "dark"
  const [currentUser, setCurrentUser] = useState({
    fullName: "أحمد المحمد",
    phone: "0912345678",
    carModel: "Toyota Corolla 2018",
    plate: "123456 | دمشق"
  });
  const [tempRegisterData, setTempRegisterData] = useState(null);

  const [authPhone, setAuthPhone] = useState("");

  const [service, setService] = useState(null);
  const [draft, setDraft] = useState(null);

  const [location, setLocation] = useState(null);

  const [request, setRequest] = useState(null);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const [selectedChat, setSelectedChat] = useState(null);

  // لمعرفة من أين فُتحت الخريطة
  const [mapFrom, setMapFrom] = useState("home"); // home | details | profile | locationPermission | addresses

  // بيانات العناوين (مرفوعة هنا للحفاظ عليها عند التنقل)
  const [userAddresses, setUserAddresses] = useState([
    {
      id: "a1",
      label: "المنزل",
      line: "دمشق – مشروع دمر – جانب الحديقة",
      note: "مبنى 4، طابق 3",
      isDefault: true,
    },
    {
      id: "a2",
      label: "العمل",
      line: "دمشق – ساحة المرجة – قرب المجمع",
      note: "مكتب الطابق الثاني",
      isDefault: false,
    },
  ]);

  // -------- Navigation helpers (بدون مكتبة تنقل) --------
  const goTo = (nextStep) => {
    setNavStack((prev) => [...prev, step]);
    setStep(nextStep);
  };

  const goBack = () => {
    setNavStack((prev) => {
      if (!prev.length) return prev;
      const last = prev[prev.length - 1];
      setStep(last);
      return prev.slice(0, -1);
    });
  };

  const resetToHome = () => {
    setNavStack([]);
    setStep("home");
    setService(null);
    setDraft(null);
    setRequest(null);
  };

  // -------- Tabs config --------
  const isTabStep = useMemo(
    () => ["home", "orders", "points", "chats", "profile"].includes(step),
    [step]
  );

  const currentTab = useMemo(() => {
    if (!isTabStep) return "home";
    return step;
  }, [isTabStep, step]);

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: theme === "dark" ? "#120E1A" : "#F7F4FB" }}>
        {/* شاشة الترحيب */}
        {step === "welcome" && (
          <WelcomeScreen
            lang={lang}
            setLang={setLang}
            theme={theme}
            setTheme={setTheme}
            onLoginPress={() => setStep("auth")}
            onRegisterPress={() => setStep("auth")}
          />
        )}

        {/* شاشة التسجيل/الدخول */}
        {step === "auth" && (
          <AuthScreen
            lang={lang}
            theme={theme}
            onBackToWelcome={() => setStep("welcome")}
            onContinueToOtp={({ phone, mode, fullName, carModel, plate }) => {
              setAuthPhone(phone);
              if (mode === "register") {
                setTempRegisterData({ fullName, phone, carModel, plate });
                setStep("otp");
              } else {
                // Login simulation: fetch or load matching default user
                setCurrentUser({
                  fullName: "أحمد المحمد",
                  phone: phone || "0912345678",
                  carModel: "Toyota Corolla 2018",
                  plate: "123456 | دمشق"
                });
                setStep("locationPermission");
              }
            }}
          />
        )}

        {/* شاشة OTP */}
        {step === "otp" && (
          <OtpScreen
            lang={lang}
            theme={theme}
            phone={authPhone}
            onBack={() => setStep("auth")}
            onVerified={() => {
              if (tempRegisterData) {
                setCurrentUser(tempRegisterData);
                setTempRegisterData(null);
              }
              setStep("locationPermission");
            }}
          />
        )}

        {/* شاشة صلاحيات الموقع */}
        {step === "locationPermission" && (
          <LocationPermissionScreen
            lang={lang}
            theme={theme}
            onDone={() => setStep("home")}
            onPickFromMap={() => {
              setMapFrom("locationPermission");
              goTo("interactiveMap");
            }}
          />
        )}

        {/* شاشة الخريطة التفاعلية */}
        {step === "interactiveMap" && (
          <InteractiveMapScreen
            lang={lang}
            theme={theme}
            userLocation={location}
            fromStep={mapFrom}
            onBack={(from) => {
              if (from) setStep(from);
              else goBack();
            }}
            onConfirm={(pickedLoc, from) => {
              setLocation(pickedLoc);
              if (from === "locationPermission") {
                setStep("home");
                return;
              }
              if (from) {
                setStep(from);
                return;
              }
              goBack();
            }}
          />
        )}

        {/* شاشة تفاصيل الطلب */}
        {step === "details" && (
          <ServiceDetailsScreen
            lang={lang}
            theme={theme}
            currentUser={currentUser}
            service={service}
            onBack={() => setStep("home")}
            initialValues={draft}
            pickedLocation={location}
            onSubmit={(payload) => {
              setDraft(payload);
              setMapFrom("details");
              goTo("interactiveMap");
            }}
            onConfirmRequest={(payload) => {
              setDraft(null);
              setRequest({ ...payload, location });
              goTo("tracking");
            }}
          />
        )}

        {/* شاشة تتبع الفني */}
        {step === "tracking" && (
          <TechnicianTrackingScreen
            lang={lang}
            theme={theme}
            request={request}
            onDone={resetToHome}
          />
        )}

        {/* شاشة تفاصيل طلب من قائمة الطلبات */}
        {step === "orderDetails" && selectedOrder && (
          <OrderDetailsScreen
            lang={lang}
            theme={theme}
            order={selectedOrder}
            onBack={() => {
              setSelectedOrder(null);
              setStep("orders");
            }}
          />
        )}

        {/* شاشات البروفايل الفرعية */}
        {step === "vehicles" && (
          <VehiclesScreen
            lang={lang}
            theme={theme}
            onBack={() => setStep("profile")}
          />
        )}

        {step === "booking" && (
          <BookingScreen
            lang={lang}
            theme={theme}
            onBack={() => setStep("profile")}
          />
        )}

        {step === "addresses" && (
          <AddressesScreen
            lang={lang}
            theme={theme}
            addresses={userAddresses}
            onBack={() => setStep("profile")}
            onPickNewAddress={() => {
              setMapFrom("addresses");
              goTo("interactiveMap");
            }}
            pickedLocation={mapFrom === "addresses" ? location : null}
            onAddAddress={(newAddr) => {
              setUserAddresses((prev) => [...prev, newAddr]);
              setLocation(null);
            }}
            onDeleteAddress={(id) => {
              setUserAddresses((prev) => prev.filter((a) => a.id !== id));
            }}
          />
        )}

        {step === "washPlan" && (
          <WashPlanScreen
            lang={lang}
            theme={theme}
            onBack={() => setStep("profile")}
          />
        )}

        {step === "premium" && (
          <PremiumScreen
            lang={lang}
            theme={theme}
            onBack={() => setStep("profile")}
          />
        )}

        {step === "paymentMethods" && (
          <PaymentMethodsScreen
            lang={lang}
            theme={theme}
            onBack={() => setStep("profile")}
          />
        )}

        {/* العروض */}
        {step === "offers" && (
          <OffersScreen
            lang={lang}
            theme={theme}
            onBack={() => setStep("home")}
          />
        )}

        {/* شاشة محادثة فردية */}
        {step === "chatThread" && selectedChat && (
          <ChatThreadScreen
            lang={lang}
            theme={theme}
            conversation={selectedChat}
            onBack={() => {
              setSelectedChat(null);
              setStep("chats");
            }}
          />
        )}

        {/* شاشات التابات */}
        {isTabStep && (
          <View style={{ flex: 1 }}>
            {step === "home" && (
              <HomeScreen
                lang={lang}
                theme={theme}
                currentUser={currentUser}
                location={location}
                onOpenMapExplore={() => {
                  setMapFrom("home");
                  goTo("interactiveMap");
                }}
                onSelectService={(s) => {
                  setService(s);
                  setDraft(null);
                  setStep("details");
                }}
                onOpenOffers={() => goTo("offers")}
              />
            )}

            {step === "orders" && (
              <OrdersScreen
                lang={lang}
                theme={theme}
                onOpenDetails={(order) => {
                  setSelectedOrder(order);
                  setStep("orderDetails");
                }}
              />
            )}

            {step === "points" && (
              <PointsScreen
                lang={lang}
                theme={theme}
              />
            )}

            {step === "chats" && (
              <ChatsScreen
                lang={lang}
                theme={theme}
                onOpenChat={(conversation) => {
                  setSelectedChat(conversation);
                  setStep("chatThread");
                }}
              />
            )}

            {step === "profile" && (
              <ProfileScreen
                lang={lang}
                setLang={setLang}
                theme={theme}
                setTheme={setTheme}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                onOpenVehicles={() => setStep("vehicles")}
                onOpenBooking={() => setStep("booking")}
                onOpenAddresses={() => setStep("addresses")}
                onOpenWashPlan={() => setStep("washPlan")}
                onOpenPremium={() => setStep("premium")}
                onOpenPayments={() => setStep("paymentMethods")}
              />
            )}

            <BottomTabBar
              lang={lang}
              theme={theme}
              current={currentTab}
              onChange={(nextTab) => setStep(nextTab)}
            />
          </View>
        )}

        {/* Fallback */}
        {![
          "welcome",
          "auth",
          "otp",
          "locationPermission",
          "interactiveMap",
          "details",
          "tracking",
          "orderDetails",
          "vehicles",
          "booking",
          "addresses",
          "washPlan",
          "premium",
          "paymentMethods",
          "offers",
          "chatThread",
          "home",
          "orders",
          "points",
          "chats",
          "profile",
        ].includes(step) && (
          <WelcomeScreen
            lang={lang}
            setLang={setLang}
            theme={theme}
            setTheme={setTheme}
            onLoginPress={() => setStep("auth")}
            onRegisterPress={() => setStep("auth")}
          />
        )}
      </View>
    </SafeAreaProvider>
  );
}
