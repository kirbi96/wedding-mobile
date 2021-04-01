import { showMessage } from 'react-native-flash-message';

// interface INotificationProps {
//     message: string;
// }

class NotificationUtilC {
    showSuccess = (successMessage: string) => {
        showMessage({
            message: 'Успех',
            description: successMessage,
            type: 'success',
            icon: 'success',
        });
    };

    showError = (errorMessage: string) => {
        showMessage({
            message: 'Ошибка',
            description: errorMessage,
            type: 'danger',
            icon: 'danger',
        });
    };
}

const NotificationUtil = new NotificationUtilC();
export default NotificationUtil;
