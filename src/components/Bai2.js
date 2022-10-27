import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Button,
    PanResponder,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

const Bai2 = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [x, setX] = useState(0);

    // useEffect(() => {
    //     setX(300);
    // }, []);

    const handleClick = () => {
        setX(x + 50);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleClick}>
                <Animated.View
                    style={[
                        pan.getLayout(),
                        styles.box,
                        { transform: [{ translateX: x }] },
                    ]}
                />
            </TouchableOpacity>
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

export default Bai2;
