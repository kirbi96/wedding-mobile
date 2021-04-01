import React, {useEffect} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
import Title from "../../components/Title/Title";
import ItemCard from "../../components/ItemCard/ItemCard";
import {useStores} from "../../hooks/use-stores";
import {observer} from "mobx-react";
import Loader from "../../components/ui/Loader";

const SuitScreen = observer(() =>{
    const {organizationStore} = useStores()
    const {getSuitOrganizations, organizationList, goToShop, organizationListLoader} = organizationStore

    useEffect(() =>{
        getSuitOrganizations()
    },[])

    if(organizationListLoader){
        return <Loader/>
    }

    return(
        <ScrollView style={styles.mainContainer}>
            <HeaderBack/>
            <Title title="Свадебные костюмы"/>
            {organizationList && organizationList.map( (item: any) => (
                <View key={item._id}>
                    <ItemCard
                        id={item._id}
                        banner={item.banner}
                        name={item.name}
                        rating={item.rating}
                        onVisit={() => goToShop(item._id)}
                    />
                </View>
            ))}
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        paddingHorizontal: 20
    },
})

export default SuitScreen
