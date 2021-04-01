import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors} from "../../styles/Colors";
import FastImage from "react-native-fast-image";

interface IProps {
    id: string | number
    name: string
    description: string
    banner: string
    onVisit: () => void
}

const NewsCard = ({id, name, description, banner, onVisit}: IProps) => {return(
        <View style={styles.categoryCard}>
            <FastImage
                style={styles.cardBanner}
                source={{
                    uri: banner
                }}
            />
            <Text numberOfLines={2} style={styles.cardName}>{name}</Text>
            <Text numberOfLines={5} style={styles.cardDes}>{description}</Text>
            <TouchableOpacity style={{paddingVertical: 5}} onPress={() => onVisit()}>
                <Text style={{color: Colors.BLUE}}>
                    Смотреть полностью
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryCard: {
        borderRadius: 10,
        // elevation: 5,
        marginBottom: 15
    },
    cardBanner: {
        width: "100%",
        height: 150,
        borderRadius: 5,
    },
    cardName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    cardDes:{
        fontSize: 16,
        color: Colors.GRAY,
    }
})

export default NewsCard
