import React, {useEffect} from "react";
import {Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
import FastImage from "react-native-fast-image";
import {Colors} from "../../styles/Colors";
// @ts-ignore
import GridImageView from 'react-native-grid-image-viewer';
import IconVK from "../../assets/icons/social/IconVK";
import IconInstagram from "../../assets/icons/social/IconInstagram";
import IconTelegram from "../../assets/icons/social/IconTelegram";
import IconMySite from "../../assets/icons/social/IconMySite";
import IconStar from "../../assets/icons/social/IconStar";
import IconPhone from "../../assets/icons/social/IconPhone";
import {observer} from "mobx-react";
import {useStores} from "../../hooks/use-stores";
import Loader from "../../components/ui/Loader";

const OrganizationScreen = observer(({route}: any) =>{
    const {organizationStore} = useStores()
    const {getOrganization, organization, organizationLoader} = organizationStore
    const {id} = route.params

    useEffect(() => {
       getOrganization(id)
    },[])


    if(organizationLoader){
        return <Loader/>
    }

    console.log(222, organization.social)

    return(
        <ScrollView>
            <View style={styles.mainContainer}>
                <HeaderBack/>
                <View style={{marginTop: 10}}>
                    <View style={styles.headerContainer}>
                        <FastImage
                            style={styles.banner}
                            source={{
                                uri: organization?.banner
                            }}
                        />
                        <View style={{marginLeft: 20}}>
                            <Text style={styles.name}>{organization?.name}</Text>
                            <Text style={styles.rating}>Рейтинг {organization?.rating}</Text>
                            <View style={{display: "flex", flexDirection: "row"}}>
                                <TouchableOpacity
                                    onPress={() => Linking.openURL(`tel:${organization?.phone}`)}
                                    style={styles.phone}
                                >
                                    <IconPhone/>
                                    <Text style={styles.phoneText}>Позвонить</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.favorites}>
                                    <IconStar/>
                                    <Text style={styles.phoneText}>В избранное</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    <View>
                        <View style={{display: "flex", flexDirection: "row", marginTop: 15}}>
                            <View style={styles.category}><Text style={styles.categoryText}>Категория</Text></View>
                            <View style={styles.category}><Text style={styles.categoryTextPrice}>Прайс</Text></View>
                        </View>
                        {organization?.service?.map( (item: any, index: number) =>(
                            <View key={index} style={{display: "flex", flexDirection: "row", marginTop: 5}}>
                                <View style={styles.category}><Text style={styles.categoryTableText}>{item.category}</Text></View>
                                <View style={styles.category}><Text style={styles.categoryTableTextPrice}>{item.price} ₽</Text></View>
                            </View>
                        ))}
                    </View>

                    <Text style={[styles.categoryText, {marginTop: 15}]}>О нас</Text>
                    <Text style={styles.description}>{organization?.description}</Text>

                    <Text style={[styles.categoryText, {marginTop: 15}]}>Мы в соцсетях</Text>
                    <View style={{display: "flex", flexDirection: "row", marginTop: 5, marginLeft: -15}}>
                        {organization?.social?.map( (item: any, index: number) => (
                            <View key={index}>
                                {item.tag === "site" && item.url !== "" &&
                                <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={{marginTop: -5, marginLeft: 15}}>
                                    <IconMySite/>
                                </TouchableOpacity>
                                }
                                {item.tag === "vk" && item.url !== "" &&
                                <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={{marginLeft: 15}}>
                                    <IconVK/>
                                </TouchableOpacity>
                                }
                                {item.tag === "inst" && item.url !== "" &&
                                <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={{marginLeft: 15}}>
                                    <IconInstagram/>
                                </TouchableOpacity>
                                }
                                {item.tag === "telegram" && item.url !== "" &&
                                <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={{marginLeft: 15}}>
                                    <IconTelegram/>
                                </TouchableOpacity>
                                }
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            <Text style={[styles.categoryText, {paddingBottom: 10, paddingHorizontal: 15, marginTop: 15}]}>Галлерея</Text>
            <GridImageView data={organization?.images} />
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        paddingHorizontal: 15,
    },
    banner: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    headerContainer:{
        display: "flex",
        flexDirection: "row"
    },
    name: {
        fontSize: 22,
        maxWidth: "90%",
        fontWeight: "bold",
        color: Colors.BLACK
    },
    rating: {
        marginTop: 10,
        color: Colors.BLACK
    },
    category: {
        width: "50%",
        backgroundColor: "#fff"
    },
    categoryText: {
        fontSize: 15,
        fontWeight: "bold",
        color: Colors.BLUE_DARK
    },
    categoryTextPrice:{
        marginLeft: "auto",
        marginRight: 20,
        fontSize: 15,
        fontWeight: "bold",
        color: Colors.BLUE_DARK
    },
    categoryTableText: {
        fontSize: 14,
        // fontWeight: "bold",
        color: Colors.BLACK
    },
    categoryTableTextPrice: {
        marginLeft: "auto",
        marginRight: 20,
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.BLACK
    },
    description:{
        color: Colors.GRAY
    },
    phone:{
        marginTop: 10,
        backgroundColor: Colors.GREEN,
        paddingHorizontal: 10,
        paddingVertical: 5,
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    favorites: {
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: Colors.BLUE,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 15,
    },
    phoneText: {
        color: Colors.WHITE,
        fontWeight: "bold",
        marginLeft: 7
    }
})

export default OrganizationScreen
