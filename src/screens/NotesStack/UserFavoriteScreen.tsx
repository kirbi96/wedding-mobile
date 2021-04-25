import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
import Title from "../../components/Title/Title";
import ItemCard from "../../components/ItemCard/ItemCard";

const favoriteData = [
    {
        id: 1,
        banner: "https://paulinedress.ru/image/cache/data/category/vs-dior-slide-2x1-1500x750.jpg",
        name: "Мой магазин 1",
        rating: 4.3
    },
    {
        id: 2,
        banner: "https://henderson.ru.airee.cloud/uimages/catalog/product/JT1-0160-NP/JT1-0160-NP-GREY-8-1.jpg",
        name: "Мой магазин 2",
        rating: 5
    },
    {
        id: 3,
        banner: "https://www.blenda.by/storage/app/media/blog/10ideas/-swET-wn-M4.jpg",
        name: "Мой магазин 3",
        rating: 5
    },
]


const UserFavoriteScreen = () =>{
    const goToShop = ( id: string|number) =>{
        alert("В разработке")
    }

    return(
        <ScrollView style={styles.mainContainer}>
            <HeaderBack/>
            <Title title="Избранное (В разработке)"/>
            {favoriteData && favoriteData.map( item => (
                <View key={item.id + item.name}>
                    <ItemCard
                        id={item.id}
                        banner={item.banner}
                        name={item.name}
                        rating={item.rating}
                        onVisit={() => goToShop(item.id)}
                    />
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20
    },
})

export default UserFavoriteScreen
