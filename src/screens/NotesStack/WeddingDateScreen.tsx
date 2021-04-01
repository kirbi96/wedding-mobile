import React, {useEffect, useState} from "react";
import {Animated, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Title from "../../components/Title/Title";
import HeaderBack from "../../components/HeaderBack/HeaderBack";
// @ts-ignore
import CalendarPicker from 'react-native-calendar-picker';
import {Colors} from "../../styles/Colors";
import moment from "moment";
import {observer} from "mobx-react";
import {useStores} from "../../hooks/use-stores";


const WeddingDateScreen = observer(() =>{
    const {userStore} = useStores()
    const {addDate, userInfo, clearDate} = userStore
    const {weddingDate} = userInfo.personal

    const [timeTotal, setTimeTotal] = useState(0)
    const [timeMinute, setTimeMinute] = useState(60)

    const onDateChange = (date: any) =>{
        if(date){
            addDate(date.valueOf())
        }
    }

    const getSecond = () =>{
        const now = moment().valueOf();
        const diff = weddingDate - now
        setTimeTotal(Math.floor(diff/1000))
    }

    const onSelectDate = () =>{
        clearDate()
        setTimeMinute(60)
    }

    useEffect(() =>{
        getSecond()
    },[weddingDate])

    useEffect(() => {
        const interval = setInterval(() => {
            if(timeMinute === 1){
                setTimeMinute(60)
            } else {
                setTimeMinute(timeMinute - 1)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timeMinute])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeTotal(timeTotal - 1)
        }, 1000);
        return () => clearInterval(interval);
    }, [timeTotal])



    return(
        <View style={styles.mainContainer}>

            <View>
                <HeaderBack/>
                <Title title="Дата свадьбы"/>
                {weddingDate ? (
                    <View>
                        <Text style={styles.dateText}>{moment(weddingDate).toISOString().substring(0,10)}</Text>
                        <View style={[styles.rowCenter, {marginTop: 40}]}>
                            <CountdownCircleTimer
                                onComplete={() => [true, 100]}
                                isPlaying
                                duration={60}
                                colors={[
                                    ['#e659f6', 0.2],
                                    ['#004777', 0.2],
                                    ['#A30000', 0.2],
                                    ['#F7B801', 0.2],
                                    ['#5bf10a', 0.2]
                                ]}
                            >
                                {() => (
                                    <Animated.Text style={styles.timer}>
                                        {timeMinute}
                                    </Animated.Text>
                                )}
                            </CountdownCircleTimer>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text style={[styles.dateTextBottom, {color: '#59d094'}]}>Осталось дней {Math.floor(timeTotal/86400)}</Text>
                            <Text style={[styles.dateTextBottom, {color: '#46aaee'}]}>Осталось часов {Math.floor(timeTotal/3600)}</Text>
                            <Text style={[styles.dateTextBottom, {color: '#f66d6d'}]}>Осталось минут {Math.floor(timeTotal/60)}</Text>
                            <Text style={[styles.dateTextBottom, {color: '#ea6df8'}]}>Осталось секунд {timeTotal}</Text>
                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity onPress={onSelectDate} style={styles.btn}>
                                <Text style={styles.btnText}>
                                    Установить дату
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View>
                        <CalendarPicker
                            onDateChange={(date: any) => onDateChange(date)}
                            previousTitle='Назад'
                            nextTitle='Далее'
                            selectMonthTitle='Выбберите месяц'
                            selectYearTitle='Выберите год'
                        />

                        <Text style={styles.textBottom}>Выберите дату</Text>
                    </View>
                )}
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    dateText: {
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
    },
    textBottom: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 26,
    },
    dateTextBottom:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    rowCenter: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    bottom: {
        height: 60,
    },
    timer: {
        fontSize: 42,
        color: "#004777",
        fontWeight: "bold",
        width: "90%",
        textAlign: "center"
    },
    btn:{
        backgroundColor: Colors.BLUE,
        marginTop: 16,
        paddingVertical: 15,
        borderRadius: 10,
    },
    btnText:{
        textAlign: "center",
        fontSize: 18,
        color: Colors.WHITE
    }
})

export default WeddingDateScreen
