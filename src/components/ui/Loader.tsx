import React from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {Colors} from "../../styles/Colors";

interface ILoader {
    full?: boolean;
}

const Loader = ({full = false}: ILoader) => {
    return (
        <View style={style.container}>
            {full && (
                <Image source={require("../../assets/images/kiss.gif")}/>
            )}
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
