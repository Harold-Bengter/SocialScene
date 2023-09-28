import { makeAutoObservable, runInAction } from "mobx";
import { User, UserFormValues } from "../Layout/Models/user";
import agent from "../api/agent";
import { store } from "./store";
import { router } from "../router/Routes";

export default class userStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this)
        
    }

    get isLoggedIn(){
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            router.navigate('/activities');
            store.modalStore.closeModal();;
    }

    Register = async (creds: UserFormValues) => {
        const user = await agent.Account.register(creds);
        store.commonStore.setToken(user.token);
        runInAction(() => this.user = user);
        router.navigate('/activities');
        store.modalStore.closeModal();;
}

    logout = () => {
        store.commonStore.setToken(null);
        this.user = null;
        router.navigate('/');
    }

    getUser = async () => {
        try{
            const user = await agent.Account.current();
            runInAction(() => this.user = user)
        } catch(error){
            console.log(error);
        }
    }
}