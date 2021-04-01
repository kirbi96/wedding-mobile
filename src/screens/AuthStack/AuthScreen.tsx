import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {Colors} from "../../styles/Colors";
import {observer} from "mobx-react";
import {useStores} from "../../hooks/use-stores";
import NavigationService from "../../navigation/NavigationService";
import Screens from "../../navigation/Screens";


export const AuthScreen = observer(() => {
    const {authStore} = useStores()
    const {login} = authStore

    // const [email, setEmail] = useState("repetitorkazan@mail.ru")
    // const [password, setPassword] = useState("123123123")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerHandlerMail = (text: string) => {
        setEmail(text)
    }

    const registerHandlerPassword = (text: string) => {
        setPassword(text)
    }

    const registerHandler = () =>{
        const data = {email, password}
        login(data)
    }

    return(
        <View style={styles.mainContainer}>
            <View style={{marginTop: 140}}/>
            <Text style={{textAlign: "center", color: Colors.BLUE_DARK, fontSize: 30, fontWeight: "bold"}}>Вход</Text>
            <TextInput
                placeholder="Почта"
                style={styles.input}
                onChangeText={text => registerHandlerMail(text)}
                value={email}
            />

            <TextInput
                placeholder="Пароль"
                style={styles.input}
                onChangeText={text => registerHandlerPassword(text)}
                value={password}
            />

            <TouchableOpacity onPress={() => NavigationService.navigate(Screens.REG)} style={{marginTop: 15}}>
                <Text style={styles.regText}>
                    Регистрация
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={registerHandler} style={styles.bigButton}>
                <Text style={styles.bigButtonText}>
                    Войти
                </Text>
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        paddingHorizontal: 20
    },
    profileBanner: {
        width: "100%",
        height: 200,
        borderRadius: 5,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
    },
    input: {
        marginTop: 10,
        width: "100%",
        height: 50,
        fontSize: 16,
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
    label: {
        marginTop: 15,
        color: Colors.BLUE_DARK,
        fontSize: 12,
        marginLeft: 15,
        paddingBottom: 2,
    },
    bigButton: {
        width: "100%",
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: Colors.BLUE_DARK,
    },
    bigButtonText: {
        color: Colors.WHITE,
        textAlign: "center",
        fontSize: 16
    },
    regText: {
        fontSize: 14,
        color: Colors.BLUE_DARK,
        textAlign: "center"
    }
})
