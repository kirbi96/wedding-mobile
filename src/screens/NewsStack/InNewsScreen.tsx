import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Title from "../../components/Title/Title";
import FastImage from "react-native-fast-image";
import HeaderBack from "../../components/HeaderBack/HeaderBack";

const InNewsScreen = ({route}: any) =>{
    const {newsData}= route.params

    return(
        <ScrollView style={styles.mainContainer}>
            <HeaderBack/>
            <Title title={newsData.name}/>
            <FastImage
                style={styles.cardBanner}
                source={{
                    uri: newsData.banner
                }}
            />
            <View style={{marginTop: 20}}>
                <Text style={styles.des}>
                    {newsData.description}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        paddingHorizontal: 20
    },
    cardBanner: {
        width: "100%",
        height: 150,
        borderRadius: 5,
    },
    des:{
        fontSize: 16,

    }
})

export default InNewsScreen
