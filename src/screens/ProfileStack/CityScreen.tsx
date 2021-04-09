import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Colors} from "../../styles/Colors";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
import IconBottomNotes from "../../assets/icons/IconBottomNotes";
import {observer} from "mobx-react";
import {useStores} from "../../hooks/use-stores";
import Loader from "../../components/ui/Loader";

export interface ICity {
    _id: string;
    coords: ICoords;
    district: string;
    name: string;
    population: number;
    subject: string;
}

export interface ICoords {
    _id: string;
    lat: string;
    lon: string;
}


export const CityScreen = observer(() => {
    const {userStore} = useStores();
    const {getCity, city, citySearch, changeCity, cityLoader} = userStore
    const [query, setQuery] = useState('')

    const registerHandler = (text: string) =>{
        setQuery(text)
        citySearch(text)
    }

    useEffect(() => {
        getCity()
    }, [])

    return (
        <View style={styles.mainContainer}>
            <HeaderBack/>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Введите город"}
                    style={styles.input}
                    onChangeText={text => registerHandler(text)}
                    value={query}
                />
                <TouchableOpacity style={styles.btn}>
                    <IconBottomNotes color={Colors.WHITE}/>
                </TouchableOpacity>
            </View>

            {cityLoader ? <Loader/> : (
                <ScrollView style={{marginTop: 15}}>
                    {city.map((c: ICity, index: number) => (
                        <TouchableOpacity onPress={() => changeCity(c.name)} key={index} style={styles.cityItem}>
                            <Text style={styles.cityItemName}>{c.name}</Text>
                        </TouchableOpacity>
                    ))}

                </ScrollView>
            )}
        </View>
    )
})

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    inputContainer: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
    },
    input: {
        width: "85%",
        height: 50,
        fontSize: 16,
        borderColor: Colors.BLUE_DARK,
        borderWidth: 1,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        paddingLeft: 15
    },
    dateText: {
        fontSize: 16,
        paddingVertical: 14
    },
    btn: {
        width: "15%",
        backgroundColor: Colors.BLUE_DARK,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cityItem: {
        borderBottomWidth: 1,
        paddingVertical: 16,
        borderBottomColor: Colors.BLACK
    },
    cityItemName: {
        color: Colors.BLACK,
        fontSize: 16,
        fontWeight: "600"
    }
})
