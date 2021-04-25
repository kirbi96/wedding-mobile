import axios from 'axios';

class OrganizationAPI {
  getCategory = () => {
    return axios.get('category/')
  }

  getOrganization = (id: string) => {
    return axios.get(`organization/${id}`)
  }

  getDressOrganizations = (city: string) => {
    if (city) {
      return axios.post('organization/dress', {city})
    } else {
      return axios.get('organization/dress')
    }
  }

  getSuitOrganizations = (city: string) => {
    if(city){
      return axios.post('organization/suit', {city})
    } else {
      return axios.get('organization/suit')
    }
  }

  getRingOrganizations = (city: string) => {
    if(city){
      return axios.post('organization/ring', {city})
    } else {
      return axios.get('organization/ring')
    }
  }

  getRestaurantOrganizations = (city: string) => {
    if(city){
      return axios.post('organization/restaurant', {city})
    } else {
      return axios.get('organization/restaurant')
    }
  }

  getToastOrganizations = (city: string) => {
    if(city){
      return axios.post('organization/toast', {city})
    } else {
      return axios.get('organization/toast')
    }
  }

  getPhotoOrganizations = (city: string) => {
    if(city){
      return axios.post('organization/photo', {city})
    } else {
      return axios.get('organization/photo')
    }
  }

  getAutoOrganizations = (city: string) => {
    if(city){
      return axios.post('organization/auto', {city})
    } else {
      return axios.get('organization/auto')
    }
  }
}

const organizationAPI = new OrganizationAPI();
export default organizationAPI;
