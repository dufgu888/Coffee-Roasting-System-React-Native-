import { View, Text, TouchableOpacity } from 'react-native'
import { useState, useLayoutEffect } from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RoastProfile = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const insets = useSafeAreaInsets();
    return (
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Text>RoastProfile</Text>
        </View>
    )
}

export default RoastProfile