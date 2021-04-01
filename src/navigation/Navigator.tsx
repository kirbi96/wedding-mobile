import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Screens from './Screens';
import {HomeScreen} from '../screens/HomeStack/HomeScreen';
import DressScreen from "../screens/HomeStack/DressScreen";
import SuitScreen from "../screens/HomeStack/SuitScreen";
import RingScreen from "../screens/HomeStack/RingScreen";
import RestaurantScreen from "../screens/HomeStack/RestaurantScreen";
import ToastScreen from "../screens/HomeStack/ToastScreen";
import PhotoScreen from "../screens/HomeStack/PhotoScreen";
import AutoScreen from "../screens/HomeStack/AutoScreen";
import {theme} from "./default";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import IconBottomHome from "../assets/icons/IconBottomHome";
import IconBottomNotes from "../assets/icons/IconBottomNotes";
import IconBottomProfile from "../assets/icons/IconBottomProfile";
import IconBottomNews from "../assets/icons/IconBottomNews";
import NotesScreen from "../screens/NotesStack/NotesScreen";
import NewsScreen from "../screens/NewsStack/NewsScreen";
import ProfileScreen from "../screens/ProfileStack/ProfileScreen";
import {Colors} from "../styles/Colors";
import UserFavoriteScreen from "../screens/NotesStack/UserFavoriteScreen";
import UserGuestScreen from "../screens/NotesStack/UserGuestScreen";
import UserNotesScreen from "../screens/NotesStack/UserNotesScreen";
import WeddingDateScreen from "../screens/NotesStack/WeddingDateScreen";
import InNewsScreen from "../screens/NewsStack/InNewsScreen";
import OrganizationScreen from "../screens/HomeStack/OrganizationScreen";
import {observer} from "mobx-react";
import {useStores} from "../hooks/use-stores";
import {AuthScreen} from "../screens/AuthStack/AuthScreen";
import {StatusBar} from "react-native";
import {RegScreen} from "../screens/AuthStack/RegScreen";

const Tab = createBottomTabNavigator()

const BottomMenu = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: () => {
                    switch (route.name) {
                        case Screens.HOME:
                            return <IconBottomHome/>
                            break;
                        case Screens.NOTE:
                            return <IconBottomNotes color={Colors.BLACK}/>
                            break;
                        case Screens.NEWS:
                            return <IconBottomNews/>
                            break;
                        case Screens.PROFILE:
                            return <IconBottomProfile/>
                            break;
                        default:
                            return false
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.BLUE_DARK,
                inactiveTintColor: "gray",
            }}
        >
            <Tab.Screen name={Screens.HOME} options={{tabBarLabel: 'Главная'}} component={HomeScreen}/>
            <Tab.Screen name={Screens.NOTE} options={{tabBarLabel: 'Заметки'}} component={NotesScreen}/>
            <Tab.Screen name={Screens.NEWS} options={{tabBarLabel: 'Новости'}} component={NewsScreen}/>
            <Tab.Screen name={Screens.PROFILE} options={{tabBarLabel: 'Профиль'}} component={ProfileScreen}/>
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();

export const Home = observer(() => {
    const {authStore} = useStores()
    const {token} = authStore

    return (
        <NavigationContainer ref={navigationRef} theme={theme}>
            <StatusBar backgroundColor="#FFFFFF" barStyle={'dark-content'}/>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {!token ? (
                    <>
                        <Stack.Screen name={Screens.AUTH} component={AuthScreen}/>
                        <Stack.Screen name={Screens.REG} component={RegScreen}/>
                    </>
                ) : (
                    <>

                        <Stack.Screen name={Screens.BOTTOM} component={BottomMenu}/>
                        {/*Home*/}
                        <Stack.Screen name={Screens.DRESS} component={DressScreen} options={{}}/>
                        <Stack.Screen name={Screens.SUIT} component={SuitScreen} options={{}}/>
                        <Stack.Screen name={Screens.RING} component={RingScreen} options={{}}/>
                        <Stack.Screen name={Screens.RESTAURANT} component={RestaurantScreen} options={{}}/>
                        <Stack.Screen name={Screens.TOAST} component={ToastScreen} options={{}}/>
                        <Stack.Screen name={Screens.PHOTO} component={PhotoScreen} options={{}}/>
                        <Stack.Screen name={Screens.AUTO} component={AutoScreen}/>
                        <Stack.Screen name={Screens.ORGANIZATION} component={OrganizationScreen}/>
                        {/*Notes*/}
                        <Stack.Screen name={Screens.FAVORITES} component={UserFavoriteScreen}/>
                        <Stack.Screen name={Screens.GUEST} component={UserGuestScreen}/>
                        <Stack.Screen name={Screens.NOTES} component={UserNotesScreen}/>
                        <Stack.Screen name={Screens.DATE} component={WeddingDateScreen}/>
                        {/*News*/}
                        <Stack.Screen name={Screens.INNEWS} component={InNewsScreen}/>
                    </>
                )}

            </Stack.Navigator>
        </NavigationContainer>
    );
});

export const Navigator = () => <Home/>
