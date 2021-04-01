import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import FastImage from "react-native-fast-image";
import {Colors} from "../../styles/Colors";
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
    id: number | string
    name: string
    banner: string
    rating: number
    onVisit: (id: number | string) => void
}

const ItemCard = ({id, name, banner, rating, onVisit}: IProps) => {
    return (
        <TouchableOpacity onPress={() => onVisit(id)} style={styles.cardContainer}>
            <FastImage
                style={styles.cardBanner}
                source={{
                    uri: banner
                }}
            >
                <LinearGradient  colors={["transparent", Colors.BLACK]} locations={[0.2,1]} style={styles.linearGradient}/>
            </FastImage>
            <Text numberOfLines={2} style={styles.cardName}>{name}</Text>
            <Text style={styles.cardRating}>Рейтинг {rating}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 20,
    },
    cardBanner: {
        height: 100,
        borderRadius: 10,
        width: "100%",
    },
    cardName: {
        position: "absolute",
        bottom: 60,
        marginLeft: 10,
        color: Colors.WHITE,
        fontSize: 20,
        fontWeight: "bold"
    },
    cardRating: {
        fontSize: 14,
        marginLeft: 10,
        color: Colors.BLACK
    },
    linearGradient: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

export default ItemCard
