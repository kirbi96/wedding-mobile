import {makeAutoObservable, runInAction} from 'mobx';
import API from "../api/Api";
import NavigationService from "../navigation/NavigationService";

export class OrganizationStore {
    category: any = [];
    categoryLoader: boolean = false;
    organization: any = {};
    organizationLoader: boolean = false;
    organizationList: any = [];
    organizationListLoader: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    goToShop = (id: string | number) => {
        NavigationService.navigate("OrganizationScreen", {id})
    }

    getCategory = () => {
        this.categoryLoader = true;

        API.organization.getCategory().then((res) => {
            runInAction(() => {
                this.category = res.data
            })
        }).finally(() => {
            runInAction(() => {
                this.categoryLoader = false
            })
        })
    }

    getOrganization = (id: string) => {
        this.organizationLoader = true;

        API.organization.getOrganization(id).then((res) => {
            runInAction(() => {
                this.organization = res.data
                this.organizationLoader = false;
            })
        })
    }

    getDressOrganizations = () => {
        this.organizationListLoader = true;
        API.organization.getDressOrganizations().then((res) => {
            runInAction(() => {
                this.organizationList = res.data
                this.organizationListLoader = false;
            })
        })
    }

    getSuitOrganizations = () => {
        this.organizationListLoader = true;
        API.organization.getSuitOrganizations().then((res) => {
            runInAction(() => {
                this.organizationList = res.data
                this.organizationListLoader = false;
            })
        })
    }

    getRingOrganizations = () => {
        this.organizationListLoader = true;
        API.organization.getRingOrganizations().then((res) => {
            runInAction(() => {
                this.organizationList = res.data
                this.organizationListLoader = false;
            })
        })
    }

    getRestaurantOrganizations = () => {
        this.organizationListLoader = true;
        API.organization.getRestaurantOrganizations().then((res) => {
            runInAction(() => {
                this.organizationList = res.data
                this.organizationListLoader = false;
            })
        })
    }

    getToastOrganizations = () => {
        this.organizationListLoader = true;
        API.organization.getToastOrganizations().then((res) => {
            runInAction(() => {
                this.organizationList = res.data
                this.organizationListLoader = false;
            })
        })
    }

    getPhotoOrganizations = () => {
        this.organizationListLoader = true;
        API.organization.getPhotoOrganizations().then((res) => {
            runInAction(() => {
                this.organizationList = res.data
                this.organizationListLoader = false;
            })
        })
    }

    getAutoOrganizations = () => {
        this.organizationListLoader = true;
        API.organization.getAutoOrganizations().then((res) => {
            runInAction(() => {
                this.organizationList = res.data
                this.organizationListLoader = false;
            })
        })
    }

}
