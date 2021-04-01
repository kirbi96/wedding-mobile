import axios from 'axios';

class OrganizationAPI {
    getCategory = () =>{
        return axios.get('category/')
    }

    getOrganization = (id: string) =>{
        return axios.get(`organization/${id}`)
    }

    getDressOrganizations = () =>{
        return axios.get('organization/dress')
    }

    getSuitOrganizations = () =>{
        return axios.get('organization/suit')
    }

    getRingOrganizations = () =>{
        return axios.get('organization/ring')
    }

    getRestaurantOrganizations = () =>{
        return axios.get('organization/restaurant')
    }

    getToastOrganizations = () =>{
        return axios.get('organization/toast')
    }

    getPhotoOrganizations = () =>{
        return axios.get('organization/photo')
    }

    getAutoOrganizations = () =>{
        return axios.get('organization/auto')
    }
}

const organizationAPI = new OrganizationAPI();
export default organizationAPI;
