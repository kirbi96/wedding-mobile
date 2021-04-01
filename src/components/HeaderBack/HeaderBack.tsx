import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import IconBack from "../../assets/icons/IconBack";
import {useNavigation} from "@react-navigation/native";

interface IProps {
    title?: string
}

const HeaderBack = ({title}:IProps) =>{
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                <IconBack/>
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        maxHeight: 40,
    },
    icon: {
        padding: 10,
        paddingLeft: 0,
    },
    title: {
        fontSize: 18,
        marginLeft: "auto",
        marginRight: "auto",
    }
})

export default HeaderBack
