import React, {useState} from "react";
import {Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Title from "../../components/Title/Title";
import FastImage from "react-native-fast-image";
import {Colors} from "../../styles/Colors";
import NavigationService from "../../navigation/NavigationService";
import {observer} from "mobx-react";
import {useStores} from "../../hooks/use-stores";
import moment from "moment";

const profileBanner = "https://wfc.tv/f/Post/36701/thumb_analise-benevides-gwedi4swshq-unsplash-2.jpg";

export enum UserFormTypes {
    MAN = 'manName',
    WOMAN = 'womanName',
}

const ProfileScreen = observer(() => {
    const {authStore, userStore} = useStores()
    const {logout} = authStore
    const {weddingDate, city, manName, womanName} = userStore.userInfo.personal

    const [userInfo, setUserInfo] = useState(userStore.userInfo.personal)

    const registerHandler = (text: string, type: string) => {
        if (type === UserFormTypes.MAN) {
            setUserInfo({...userInfo, manName: text})
        }
        if (type === UserFormTypes.WOMAN) {
            setUserInfo({...userInfo, womanName: text})
        }
    }

    const sendData = () => {
        if (!userInfo.manName && !userInfo.womanName) {
            Alert.alert("Внимание", "Заполните Имя Жениха, и Имя Невесты");
            return;
        }

        userStore.updateUserNames(userInfo.manName, userInfo.womanName)
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={{marginTop: 20, paddingBottom: 20}}>
                <Title title="Профиль"/>
                <FastImage
                    style={styles.profileBanner}
                    source={{
                        uri: profileBanner
                    }}
                />

                <Text style={styles.label}>Имя жениха</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => registerHandler(text, UserFormTypes.MAN)}
                        value={userInfo?.manName}
                    />
                    {/*<TouchableOpacity style={styles.btn}>*/}
                    {/*    <IconBottomNotes color={Colors.WHITE}/>*/}
                    {/*</TouchableOpacity>*/}
                </View>

                <Text style={styles.label}>Имя невесты</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => registerHandler(text, UserFormTypes.WOMAN)}
                        value={userInfo?.womanName}
                    />
                    {/*<TouchableOpacity style={styles.btn}>*/}
                    {/*    <IconBottomNotes color={Colors.WHITE}/>*/}
                    {/*</TouchableOpacity>*/}
                </View>

                <Text style={styles.label}>Дата свадьбы</Text>
                <TouchableOpacity onPress={() => NavigationService.navigate("WeddingDateScreen")}
                                  style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Text style={styles.dateText}>
                            {moment(weddingDate).toISOString().substring(0, 10) || ''}
                        </Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.label}>Город</Text>
                {/*<TouchableOpacity onPress={() => NavigationService.navigate("HomeScreen")}*/}
                <TouchableOpacity onPress={() => Alert.alert('Внимание', 'Раздел в разработке')}
                                  style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Text style={styles.dateText}>
                            {city || 'Не выбрано'}
                        </Text>
                    </View>
                </TouchableOpacity>

                {userInfo?.womanName !== womanName || userInfo?.manName !== manName && (
                    <TouchableOpacity onPress={() => sendData()} style={styles.bigButton}>
                        <Text style={styles.bigButtonText}>
                            Сохранить
                        </Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => logout()} style={styles.bigButton}>
                    <Text style={styles.bigButtonText}>
                        Выйти
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
        width: "100%",
        height: 50,
        fontSize: 16,
        borderColor: Colors.BLUE_DARK,
        borderWidth: 1,
        borderRadius: 8,
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
        borderRadius: 8,
        backgroundColor: Colors.BLUE_DARK,
    },
    bigButtonText: {
        color: Colors.WHITE,
        textAlign: "center",
        fontSize: 16
    },
})

export default ProfileScreen
