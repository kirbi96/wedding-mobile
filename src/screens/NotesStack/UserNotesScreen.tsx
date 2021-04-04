import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
import Title from "../../components/Title/Title";
import {Colors} from "../../styles/Colors";
import IconRemove from "../../assets/icons/notes/IconRemove";
import {observer} from "mobx-react";
import {useStores} from "../../hooks/use-stores";

interface INotes {
    _id: string;
    noteText: string;
}

const UserNotesScreen = observer(() => {
    const {userStore} = useStores()
    const {addNote, deleteNote, userInfo} = userStore

    const [note, setNote] = useState("")

    const registerHandler = (text: string) => {
        setNote(text)
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <HeaderBack/>
            <Title title="Заметки"/>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => registerHandler(text)}
                        value={note}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            addNote(note)
                            setNote('')
                        }}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 20}}>
                    {userInfo.userNotes && userInfo.userNotes.map((item: INotes) => (
                        <View key={item._id} style={styles.noteItem}>
                            <Text style={styles.noteItemText}>{item.noteText}</Text>
                            <TouchableOpacity
                                onPress={() => deleteNote(item._id)}
                                style={[styles.btnDelete]}
                            >
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
        width: "85%",
        height: 50,
        fontSize: 16,
        borderColor: Colors.BLUE_DARK,
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
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
    noteItemText: {
        width: "90%",
        color: Colors.BLUE_DARK,
        fontSize: 18
    },
    btnDelete: {
        width: 40,
        height: 40,
        backgroundColor: Colors.RED,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})


export default UserNotesScreen
