import axios from 'axios';

class UserAPI {
    getUserInfo = (email: string) => {
        return axios.post('user', {email});
    };

    addNote = (note: string, email: string) => {
        return axios.post('user/note/add', {noteText: note, email});
    };

    deleteNote = (noteId: string, email: string) => {
        return axios.post('user/note/delete', {noteId, email});
    };

    addGuest = (guestName: string, personCount: string, email: string) => {
        return axios.post('user/guest/add', {guestName, personCount, email});
    };

    deleteGuest = (guestId: string, email: string) => {
        return axios.post('user/guest/delete', {guestId, email});
    };

    addDate = (weddingDate: number, email: string) => {
        return axios.post('user/date/add', {weddingDate ,email});
    };

    updateUserNames = (manName: string, womanName: string, email: string) => {
    return axios.post('user/update', {manName, womanName, email});
};
}

const userAPI = new UserAPI();
export default userAPI;
