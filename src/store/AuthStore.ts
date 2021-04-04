import {makeAutoObservable, runInAction} from 'mobx';
import {persist} from 'mobx-persist';
import API from "../api/Api";
import NavigationService from "../navigation/NavigationService";
import Screens from "../navigation/Screens";
import Notification from "../utils/NotificationUtil";

export class AuthStore {
    @persist token?: string;
    @persist email?: string;
    authLoader: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    login = (data: any) => {
        this.authLoader = true;
        API.auth.signIn(data).then((res) => {
            const token = res?.data?.token;
            const email = res?.data?.email;
            API.setToken(token);
            runInAction(() => {
                this.token = token;
                this.email = email;
                this.authLoader = false;
            });
        })
    };

    reg = (data: any) => {
        this.authLoader = true;
        API.auth.reg(data).then((res) => {
            if (res.data) {
                Notification.showSuccess('Пользователь создан');
                NavigationService.navigate(Screens.AUTH)
            }
            this.authLoader = false;
        })
    };

    logout = () => {
        this.clearToken();
    };

    clearToken = () => {
        this.token = undefined;
        API.clearToken();
    };
}
