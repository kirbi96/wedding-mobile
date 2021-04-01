import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Navigator } from './src/navigation/Navigator';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

// // @ts-ignore
// import KeyboardManager from 'react-native-keyboard-manager';
// import * as Sentry from '@sentry/react-native';
// import { Platform } from 'react-native';


enableScreens();
// IOS Keyboard settings
// if (Platform.OS === 'ios') {
//     KeyboardManager.setEnable(true);
//     KeyboardManager.setEnableDebugging(false);
//     KeyboardManager.setKeyboardDistanceFromTextField(10);
//     KeyboardManager.setPreventShowingBottomBlankSpace(true);
//     KeyboardManager.setEnableAutoToolbar(true);
//     KeyboardManager.setToolbarDoneBarButtonItemText('ОК');
//     KeyboardManager.setToolbarManageBehaviour(0);
//     KeyboardManager.setToolbarPreviousNextButtonEnable(false);
//     KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);
//     KeyboardManager.setShouldShowTextFieldPlaceholder(true); // deprecated, use setShouldShowToolbarPlaceholder
//     KeyboardManager.setShouldShowToolbarPlaceholder(true);
//     KeyboardManager.setOverrideKeyboardAppearance(false);
//     KeyboardManager.setShouldResignOnTouchOutside(true);
//     KeyboardManager.resignFirstResponder();
// }

const App = () => {
    return (
        <>
            <SafeAreaProvider>
                <FlashMessage position="top" />
                <Navigator />

            </SafeAreaProvider>
        </>
    );
};

export default App;
