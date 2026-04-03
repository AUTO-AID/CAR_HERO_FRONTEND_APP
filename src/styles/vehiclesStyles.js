import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const vehiclesStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },

    header: {
        backgroundColor: COLORS.primary,
        paddingBottom: 18,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },

    headerRow: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "900",
        textAlign: "right",
        writingDirection: "rtl",
    },

    headerSubtitle: {
        marginTop: 4,
        color: "#F0E7FF",
        fontSize: 12,
        textAlign: "right",
        writingDirection: "rtl",
    },

    backBtn: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        backgroundColor: "rgba(17,17,17,0.18)",
    },

    backText: {
        color: "#fff",
        fontWeight: "800",
    },

    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 12,
    },

    list: {
        paddingBottom: 24, // شوية مسافة تحت
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 14,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },

    topRow: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
    },

    carTitle: {
        fontSize: 15,
        fontWeight: "900",
        color: COLORS.text,
        textAlign: "right",
        writingDirection: "rtl",
    },

    defaultBadge: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 999,
        backgroundColor: "#10B981",
    },

    defaultText: {
        fontSize: 11,
        color: "#fff",
        fontWeight: "800",
    },

    midRow: {
        marginTop: 4,
    },

    infoLine: {
        fontSize: 12,
        color: COLORS.muted,
        textAlign: "right",
        writingDirection: "rtl",
    },

    bottomRow: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
    },

    smallText: {
        fontSize: 11,
        color: "#999",
    },

    actionsRow: {
        flexDirection: "row-reverse",
        gap: 8,
    },

    actionBtn: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#E5DEF8",
        backgroundColor: "#fff",
    },

    actionText: {
        fontSize: 11,
        color: COLORS.primary,
        fontWeight: "800",
    },

    primaryActionBtn: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },

    primaryActionText: {
        color: "#fff",
    },

    emptyText: {
        fontSize: 13,
        color: COLORS.muted,
        textAlign: "center",
        marginTop: 30,
        writingDirection: "rtl",
    },

    addButton: {
        marginTop: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 18,
        paddingVertical: 13,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24, // 👈 مهم: رفع الزر عن زر الرجوع تبع النظام
    },

    addButtonText: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 15,
    },

    // نموذج الإضافة / التعديل
    formCard: {
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 16,
        marginTop: 10,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },

    formTitle: {
        fontSize: 15,
        fontWeight: "900",
        color: COLORS.text,
        textAlign: "right",
        writingDirection: "rtl",
        marginBottom: 8,
    },

    label: {
        fontSize: 12,
        fontWeight: "800",
        color: COLORS.text,
        marginBottom: 4,
        textAlign: "right",
        writingDirection: "rtl",
    },

    input: {
        backgroundColor: "#F6F3FB",
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#E7DFF6",
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 13,
        color: COLORS.text,
        textAlign: "right",
        writingDirection: "rtl",
        marginBottom: 8,
    },

    row: {
        flexDirection: "row-reverse",
        gap: 10,
    },

    half: {
        flex: 1,
    },

    formButtonsRow: {
        flexDirection: "row-reverse",
        gap: 10,
        marginTop: 8,
    },

    cancelBtn: {
        flex: 1,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#E4D9F7",
        backgroundColor: "#fff",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    cancelText: {
        fontSize: 13,
        color: COLORS.muted,
        fontWeight: "800",
    },

    saveBtn: {
        flex: 1,
        borderRadius: 14,
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    saveText: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "900",
    },
});
