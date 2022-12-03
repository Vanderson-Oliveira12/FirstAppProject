import { Text, StyleSheet } from "react-native";

export default function FontStyle({ style, children }) {

    let chosenFontWeight = styles.fontRegular;

    if (style?.fontWeight === "400") {
        chosenFontWeight = styles.fontRegular
    } else if (style?.fontWeight === "500") {
        chosenFontWeight = styles.fontMedium
    } else if (style?.fontWeight === "bold") {
        chosenFontWeight = styles.fontBold
    }

    return (
        <Text style={[style, chosenFontWeight]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    fontRegular: {
        fontFamily: "regular400",
        fontWeight: "normal"
    },
    fontMedium: {
        fontFamily: "medium500",
        fontWeight: "normal"
    },
    fontBold: {
        fontFamily: "bold700",
        fontWeight: "normal"
    }
})

