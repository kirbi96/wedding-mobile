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

  getDressOrganizations = (city: string) => {
    this.organizationListLoader = true;
    API.organization.getDressOrganizations(city).then((res) => {
      runInAction(() => {
        this.organizationList = res.data
        this.organizationListLoader = false;
      })
    })
  }

  getSuitOrganizations = (city: string) => {
    this.organizationListLoader = true;
    API.organization.getSuitOrganizations(city).then((res) => {
      runInAction(() => {
        this.organizationList = res.data
        this.organizationListLoader = false;
      })
    })
  }

  getRingOrganizations = (city: string) => {
    this.organizationListLoader = true;
    API.organization.getRingOrganizations(city).then((res) => {
      runInAction(() => {
        this.organizationList = res.data
        this.organizationListLoader = false;
      })
    })
  }

  getRestaurantOrganizations = (city: string) => {
    this.organizationListLoader = true;
    API.organization.getRestaurantOrganizations(city).then((res) => {
      runInAction(() => {
        this.organizationList = res.data
        this.organizationListLoader = false;
      })
    })
  }

  getToastOrganizations = (city: string) => {
    this.organizationListLoader = true;
    API.organization.getToastOrganizations(city).then((res) => {
      runInAction(() => {
        this.organizationList = res.data
        this.organizationListLoader = false;
      })
    })
  }

  getPhotoOrganizations = (city: string) => {
    this.organizationListLoader = true;
    API.organization.getPhotoOrganizations(city).then((res) => {
      runInAction(() => {
        this.organizationList = res.data
        this.organizationListLoader = false;
      })
    })
  }

  getAutoOrganizations = (city: string) => {
    this.organizationListLoader = true;
    API.organization.getAutoOrganizations(city).then((res) => {
      runInAction(() => {
        this.organizationList = res.data
        this.organizationListLoader = false;
      })
    })
  }

}
