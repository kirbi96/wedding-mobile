import axios from 'axios';

class NewsAPI {
    getAllNews = () => {
        return axios.get('news/');
    };

}

const newsAPI = new NewsAPI();
export default newsAPI;
