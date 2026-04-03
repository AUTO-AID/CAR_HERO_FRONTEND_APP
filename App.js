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
    // location خليه محفوظ لأنه مهم للتطبيق
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

  // -------- Screens --------

  return (
    <SafeAreaProvider>
      {/* شاشة الترحيب */}
      {step === "welcome" && (
        <WelcomeScreen
          onLoginPress={() => setStep("auth")}
          onRegisterPress={() => setStep("auth")}
        />
      )}

      {/* شاشة التسجيل/الدخول */}
      {step === "auth" && (
        <AuthScreen
          onBackToWelcome={() => setStep("welcome")}
          onContinueToOtp={({ phone, mode }) => {
            setAuthPhone(phone);
            if (mode === "login") {
              setStep("locationPermission");
            } else {
              setStep("otp");
            }
          }}
        />
      )}

      {/* شاشة OTP */}
      {step === "otp" && (
        <OtpScreen
          phone={authPhone}
          onBack={() => setStep("auth")}
          onVerified={() => setStep("locationPermission")}
        />
      )}

      {/* شاشة صلاحيات الموقع */}
      {step === "locationPermission" && (
        <LocationPermissionScreen
          onDone={() => setStep("home")}
          onPickFromMap={() => {
            setMapFrom("locationPermission");
            goTo("interactiveMap");
          }}
        />
      )}

      {/* شاشة الخريطة التفاعلية (بديل مجاني: Leaflet داخل WebView) */}
      {step === "interactiveMap" && (
        <InteractiveMapScreen
          userLocation={location}
          fromStep={mapFrom}
          onBack={(from) => {
            // يرجع للي فتحها
            if (from) setStep(from);
            else goBack();
          }}
          onConfirm={(pickedLoc, from) => {
            setLocation(pickedLoc);

            // ✅ رجوع حسب المصدر
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
          service={service}
          onBack={() => setStep("home")}
          initialValues={draft} // Re-inject draft data
          pickedLocation={location} // Pass selected location
          onSubmit={(payload) => {
            setDraft(payload);

            // افتح الخريطة لتأكيد الموقع بدل حقل الموقع
            setMapFrom("details");
            goTo("interactiveMap");
          }}
          onConfirmRequest={(payload) => {
            // Final submission logic
            setDraft(null); // Clear draft
            setRequest({ ...payload, location }); // Start tracking
            goTo("tracking");
          }}
        />
      )}

      {/* شاشة تتبع الفني */}
      {step === "tracking" && (
        <TechnicianTrackingScreen request={request} onDone={resetToHome} />
      )}

      {/* شاشة تفاصيل طلب من قائمة الطلبات */}
      {step === "orderDetails" && selectedOrder && (
        <OrderDetailsScreen
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
          onBack={() => setStep("profile")}
        />
      )}

      {step === "booking" && <BookingScreen onBack={() => setStep("profile")} />}

      {step === "addresses" && (
        <AddressesScreen
          addresses={userAddresses}
          onBack={() => setStep("profile")}
          onPickNewAddress={() => {
            setMapFrom("addresses");
            goTo("interactiveMap");
          }}
          pickedLocation={mapFrom === "addresses" ? location : null}
          onAddAddress={(newAddr) => {
            // هنا نستدعي API
            // مثال:
            // fetch("https://api.example.com/user/addresses", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(newAddr),
            // })
            //   .then((res) => res.json())
            //   .then((data) => {
            //     console.log("Address Added:", data);
            //     setUserAddresses(prev => [...prev, data]);
            //   })
            //   .catch((err) => console.log(err));

            setUserAddresses(prev => [...prev, newAddr]);
            // Optional: Clear location after adding
            setLocation(null);
          }}
          onDeleteAddress={(id) => {
            // هنا نستدعي API
            // مثال:
            // fetch(`https://api.example.com/user/addresses/${id}`, {
            //   method: "DELETE",
            // })
            //   .then(() => {
            //     console.log("Address Deleted");
            //     setUserAddresses(prev => prev.filter(a => a.id !== id));
            //   })
            //   .catch((err) => console.log(err));

            setUserAddresses(prev => prev.filter(a => a.id !== id));
          }}
        />
      )}

      {step === "washPlan" && <WashPlanScreen onBack={() => setStep("profile")} />}

      {step === "premium" && <PremiumScreen onBack={() => setStep("profile")} />}

      {step === "paymentMethods" && <PaymentMethodsScreen onBack={() => setStep("profile")} />}

      {/* العروض */}
      {step === "offers" && <OffersScreen onBack={() => setStep("home")} />}


      {/* شاشة محادثة فردية */}
      {step === "chatThread" && selectedChat && (
        <ChatThreadScreen
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
              location={location}
              onOpenMapExplore={() => {
                setMapFrom("home");
                goTo("interactiveMap");
              }}
              onSelectService={(s) => {
                setService(s);
                setDraft(null); // Reset draft for new service
                setStep("details");
              }}
              onOpenOffers={() => goTo("offers")}
            />
          )}

          {step === "orders" && (
            <OrdersScreen
              onOpenDetails={(order) => {
                setSelectedOrder(order);
                setStep("orderDetails");
              }}
            />
          )}

          {step === "points" && <PointsScreen />}

          {step === "chats" && (
            <ChatsScreen
              onOpenChat={(conversation) => {
                setSelectedChat(conversation);
                setStep("chatThread");
              }}
            />
          )}

          {step === "profile" && (
            <ProfileScreen
              onOpenVehicles={() => setStep("vehicles")}
              onOpenBooking={() => setStep("booking")}
              onOpenAddresses={() => setStep("addresses")}
              onOpenWashPlan={() => setStep("washPlan")}
              onOpenPremium={() => setStep("premium")}
              onOpenPayments={() => setStep("paymentMethods")}
            />
          )}

          <BottomTabBar
            current={currentTab}
            onChange={(nextTab) => setStep(nextTab)}
          />
        </View>
      )}

      {/* فallback في حال صار step غير معروف */}
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
            onLoginPress={() => setStep("auth")}
            onRegisterPress={() => setStep("auth")}
          />
        )}
    </SafeAreaProvider>
  );
}
