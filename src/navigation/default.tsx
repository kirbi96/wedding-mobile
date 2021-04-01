import {DefaultTheme} from '@react-navigation/native';
import {Colors} from '../styles/Colors';
import {StackNavigationOptions} from '@react-navigation/stack';

export const theme: typeof DefaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.BLACK,
        card: Colors.WHITE,
        background: Colors.WHITE,
        text: Colors.BLACK,
    },
};

export const defaultOptions: StackNavigationOptions = {
    headerTitleStyle: {marginLeft: -15},
    // headerLeft: () => <MenuIcon />,
};
