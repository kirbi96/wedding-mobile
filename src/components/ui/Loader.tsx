import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {Colors} from "../../styles/Colors";

const Loader = () => {
    return (
        <View style={style.container}>
            <ActivityIndicator color={Colors.BLUE_DARK} size="large" />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loader;
