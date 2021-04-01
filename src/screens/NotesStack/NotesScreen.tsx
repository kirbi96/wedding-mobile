import React from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Title from "../../components/Title/Title";
import IconRings from "../../assets/icons/notes/IconRings";
import IconNotes from "../../assets/icons/notes/IconNotes";
import IconGuest from "../../assets/icons/notes/IconGuest";
import IconHeart from "../../assets/icons/notes/IconHeart";
import {Colors} from "../../styles/Colors";
import NavigationService from "../../navigation/NavigationService";


const NotesScreen = () =>{
    return(
        <ScrollView style={styles.mainContainer}>
            <View style={{marginTop: 20}}>
                <Title title="Заметки"/>
                <View>
                    <TouchableOpacity onPress={() => NavigationService.navigate("WeddingDateScreen")} style={[styles.notesItem, {marginTop: 0}]}>
                        <IconRings/>
                        <Text style={styles.text}>Дата свадьбы</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationService.navigate("UserNotesScreen")} style={styles.notesItem}>
                        <IconNotes/>
                        <Text style={styles.text}>Заметки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationService.navigate("UserGuestScreen")} style={styles.notesItem}>
                        <IconGuest/>
                        <Text style={styles.text}>Наши гости</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationService.navigate("UserFavoriteScreen")} style={styles.notesItem}>
                        <IconHeart/>
                        <Text style={styles.text}>Избранное</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        paddingHorizontal: 20
    },
    notesItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        // borderRadius: 20,
        // borderWidth: 1,
        // borderColor: "blue"
    },
    text: {
        color: Colors.BLUE_DARK,
        fontSize: 22,
        marginLeft: 10,
    }
})

export default NotesScreen
