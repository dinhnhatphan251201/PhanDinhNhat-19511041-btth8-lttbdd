import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bai1 from "./src/components/Bai1";
import Bai2 from "./src/components/Bai2";
import Bai3 from "./src/components/Bai3";

export default function App() {
    return (
        <View style={styles.container}>
            <Bai3 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginHorizontal: 10,
        marginVertical: 5,
        marginTop: 30,
    },
});
