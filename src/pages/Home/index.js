import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from "react-native";

import FontStyle from "../../components/fonts";

import Hero from "../../../assets/hero.png";

const width = Dimensions.get('screen').width;

export default function Home() {
    return (
        <View style={styles.container}>
            <Image style={styles.heroImage} source={Hero} />
            <View style={styles.containerTexts}>
                <FontStyle style={styles.title}>
                    Vamos encontrar o "A" conosco
                </FontStyle>
                <FontStyle style={styles.text}>
                    Por favor, faça login para ver as recomendações personalizadas
                </FontStyle>
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonSign}>
                    <FontStyle style={styles.buttonSignText}>
                        Sign Up
                    </FontStyle>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonSkip}>
                    <FontStyle style={styles.buttonSkipText}>
                        Skip
                    </FontStyle>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: "100%",
        justifyContent: "space-around",
    },
    heroImage: {
        width: 324 / 324 * width,
    },
    containerTexts: {
        width: "95%",
    },
    title: {
        fontSize: 20,
        color: "#364356",
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 16
    },
    text: {
        color: "#636D77",
        textAlign: "center",
        fontWeight: "400",
        fontSize: 16
    },
    containerButtons: {
        width: "95%",
        alignItems: "center"
    },
    buttonSign: {
        backgroundColor: "#5667FD",
        padding: 24,
        width: "95%",
        borderRadius: 12,
        marginBottom: 10
    },
    buttonSignText: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold"
    },
    buttonSkip: {
        width: "95%",
        padding: 24,
    },
    buttonSkipText: {
        textAlign: "center",
        color: "#5667FD",
        fontWeight: "400"
    }
})