import {makeAutoObservable, runInAction} from 'mobx';
import API from "../api/Api";
import {INews} from "../screens/NewsStack/NewsScreen";
import NavigationService from "../navigation/NavigationService";


export class NewsStore {
    loadingNews: boolean = false;
    allNews: INews[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    goToNews = ( news: INews ) =>{
        NavigationService.navigate("InNewsScreen", {newsData: news})
    }

    getAllNews = () => {
        this.loadingNews = true;

        API.news.getAllNews().then((res) => {
            runInAction(() => {
                this.allNews = res.data
                this.loadingNews = false
            })
        })
    }

}