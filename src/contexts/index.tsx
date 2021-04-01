import React from 'react';
import { create } from 'mobx-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStore} from "../store/AuthStore";
import {OrganizationStore} from "../store/OrganizationStore";
import {UserStore} from "../store/UserStore";
import {NewsStore} from "../store/NewsStore";

const hydrate = create({
    storage: AsyncStorage, // or AsyncStorage in react-native.
    jsonify: true, // if you use AsyncStorage, here shoud be true
});

class Stores {
    authStore;
    organizationStore;
    userStore;
    newsStore;

    constructor() {
        this.authStore = new AuthStore();
        this.organizationStore = new OrganizationStore();
        this.userStore = new UserStore();
        this.newsStore = new NewsStore();
    }
};

export const stores = new Stores();

hydrate('AuthStore', stores.authStore);

export const storesContext = React.createContext(stores);
