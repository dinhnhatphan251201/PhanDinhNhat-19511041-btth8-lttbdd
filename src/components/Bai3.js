import React, { useRef, useState } from "react";
import { Animated, Button, PanResponder, StyleSheet, View } from "react-native";

const Bai3 = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [x, setX] = useState(0);

    const handleStart = () => {
        setInterval(() => {
            console.log(x);
            setX(x + 20);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    pan.getLayout(),
                    styles.box,
                    { transform: [{ translateX: x }] },
                ]}
            />
            <View>
                <Button title="start" onPress={handleStart} />
                <Button title="pause" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    box: {
        backgroundColor: "#61dafb",
        width: 80,
        height: 80,
        borderRadius: 4,
    },
});

export default Bai3;
