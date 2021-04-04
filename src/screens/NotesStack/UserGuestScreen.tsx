import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
import Title from "../../components/Title/Title";
import IconRemove from "../../assets/icons/notes/IconRemove";
import {Colors} from "../../styles/Colors";
import IconAddGuest from "../../assets/icons/notes/IconAddGuest";
import {useStores} from "../../hooks/use-stores";
import {observer} from "mobx-react";

interface IGuest {
    _id: string,
    guestName: string;
    personCount: string;
}

const UserGuestScreen = observer(() =>{
    const {userStore} = useStores()
    const {addGuest, deleteGuest, userInfo} = userStore

    const  [guest, setGuest] = useState("")
    const  [person, setPerson] = useState("2")

    const registerHandler = (text: string) => {
        setGuest(text)
    }

    const registerHandlerPerson = (text: string) => {
        setPerson(text)
    }

    return(
        <ScrollView style={styles.mainContainer}>
            <HeaderBack/>
            <Title title="Наши гости"/>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Введите гостя"
                        onChangeText={text => registerHandler(text)}
                        value={guest}
                    />
                    <TextInput
                        style={styles.inputPerson}
                        keyboardType={"numeric"}
                        onChangeText={(text) => registerHandlerPerson(text)}
                        value={String(person)}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            addGuest(guest, person)
                            setGuest("")
                            setPerson("2")
                        }}
                        style={styles.btn}>
                        <IconAddGuest/>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 20}}>
                    {userInfo.guest && userInfo.guest.map((item: IGuest) =>(
                        <View key={item._id} style={styles.noteItem}>
                            <View style={{width: "90%"}}>
                                <Text style={styles.noteItemPersonText}>Персон {item.personCount}</Text>
                                <Text style={styles.noteItemText}>{item.guestName}</Text>
                            </View>
                            <TouchableOpacity onPress={() => deleteGuest(item._id)} style={[styles.btnDelete]}>
                                <IconRemove/>
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>

            </View>
        </ScrollView>
    )
})


const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row"
    },
    input: {
        width: "70%",
        height: 50,
        fontSize: 20,
        borderColor: Colors.BLUE_DARK,
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        paddingLeft: 15
    },
    inputPerson: {
        width: "15%",
        height: 50,
        fontSize: 20,
        fontWeight: "bold",
        borderColor: Colors.BLUE_DARK,
        borderWidth: 1,
        paddingLeft: 15
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
    btnText: {
        fontSize: 26,
        color: Colors.WHITE,
        fontWeight: "bold"
    },
    noteItem: {
        padding: 10,
        borderRadius: 10,
        borderColor: Colors.LIGHT_GRAY,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 15
    },
    noteItemPersonText:{
        color: Colors.GRAY,
        fontSize: 14
    },
    noteItemText:{
        color: Colors.BLUE_DARK,
        fontSize: 18
    },
    btnDelete:{
        width: 40,
        height: 40,
        backgroundColor: Colors.RED,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default UserGuestScreen
