import {makeAutoObservable, runInAction} from 'mobx';
import API from "../api/Api";
import Notification from "../utils/NotificationUtil";
import {ICity} from "../screens/ProfileStack/CityScreen";

export class UserStore {
    userInfo: any = {};
    city: ICity[] = [];
    cityLoader: boolean = false;
    email: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    getUserInfo = (email: string) => {
        this.email = email;

        API.user.getUserInfo(email).then((res) => {
            runInAction(() => {
                this.userInfo = res.data?.user
            })
        })
    }

    addNote = (note: string) => {
        if(note === "") {
            Notification.showError("Заполните заметку");
            return;
        }

        API.user.addNote(note, this.email).then((res) => {
            runInAction(() => {
                this.userInfo.userNotes = res.data?.notes
            })
        })
    }

    deleteNote = (noteId: string) => {
        API.user.deleteNote(noteId, this.email).then((res) => {
            runInAction(() => {
                this.userInfo.userNotes = res.data?.notes
            })
        })
    }

    addGuest = (guestName: string, personCount: string) => {
        if(guestName === "") {
            Notification.showError("Заполните гостя");
            return;
        }

        API.user.addGuest(guestName, personCount, this.email).then((res) => {
            runInAction(() => {
                this.userInfo.guest = res.data?.guest
            })
        })
    }

    deleteGuest = (guestId: string) => {
        API.user.deleteGuest(guestId, this.email).then((res) => {
            runInAction(() => {
                this.userInfo.guest = res.data?.guest
            })
        })
    }

    addDate = (weddingDate: number) => {
        API.user.addDate(weddingDate, this.email).then((res) => {
            runInAction(() => {
                this.userInfo.personal.weddingDate = res.data?.weddingDate
            })
        })
    }

    clearDate = () => {
        runInAction(() => {
            this.userInfo.personal.weddingDate = null;
        })
    }

    updateUserNames = (manName: string, womanName: string) => {
        API.user.updateUserNames(manName, womanName, this.email).then((res) => {
            runInAction(() => {
                this.userInfo.personal = res.data?.personal
            })

            Notification.showSuccess('Данные успешно обновлены!');
        })
    }

    getCity = () => {
        this.cityLoader = true;

        API.user.getCity().then((res) => {
            runInAction(() => {
                this.city = res.data
            })
        }).finally(() => runInAction(() => {
            this.cityLoader = false
        }))
    }

    citySearch = (query: string) => {

        API.user.getCitySearch(query).then((res) => {
            runInAction(() => {
                this.city = res.data
            })
        })
    }

    changeCity = (cityName: string) => {
        console.log(222, cityName)
        // API.user.getCitySearch(query).then((res) => {
        //     runInAction(() => {
        //         this.city = res.data
        //     })
        // })
    }

}
