import { computed, ref } from "vue";
import { defineStore } from "pinia";

const LAST_LOGIN_TIME = "last-login-time";
const TOKEN = "token";
const USER = "user"
const MODE = import.meta.env.VITE_ENV_MODE

export const useAuthStore = defineStore("auth", () => {
    const lastLoginTime = ref<string>(localStorage.getItem(LAST_LOGIN_TIME));
    const user = ref<string>(localStorage.getItem(USER));
    const token = ref<string>(sessionStorage.getItem(TOKEN));

    if (MODE == 'DEV') {
        lastLoginTime.value = '20280101'
        //token.value = JSON.stringify({'access_token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzM2MzMxMTkwLCJleHAiOjE3MzY0MTc1OTB9.R6Mo_ALjSj9eXHOyf4zIPuLHrfFflDp_N4m5yGOkHTebeN4YCFpSUDvZWVginrUwUdiNekb948iPxuPZh3zVqw', 
        //    'refresh_token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzM2MzMxMTkwLCJleHAiOjE3MzY0MTc1OTB9.R6Mo_ALjSj9eXHOyf4zIPuLHrfFflDp_N4m5yGOkHTebeN4YCFpSUDvZWVginrUwUdiNekb948iPxuPZh3zVqw'})
    }
    const authorization = computed(() =>
        token.value ? "Bearer " + JSON.parse(token.value)['access_token']: undefined
    );

    const reAuthorization = computed(() =>
        token.value ? JSON.parse(token.value)['refresh_token'] : undefined
    );


    const isAuthorized = computed(() => {
        if (MODE == 'DEV') {
            return true
        }
        return lastLoginTime.value != undefined && token.value != undefined
    }
        
    );
    
    const userInfo = computed(() => 
        user.value
    );
    
    function login(sid: string): void {
        lastLoginTime.value = new Date().getTime().toString();
        localStorage.setItem(LAST_LOGIN_TIME, lastLoginTime.value);
       
    
        token.value = sid;
        console.log("token value: ", sid)
        localStorage.setItem(USER, token.value);
        sessionStorage.setItem(TOKEN, token.value);        
    }

    function logout(): void {
        
        lastLoginTime.value = undefined;
        localStorage.removeItem(LAST_LOGIN_TIME);
        localStorage.removeItem(USER);
        token.value = undefined;
        sessionStorage.removeItem(TOKEN);
    
        userInfo.value = undefined;
      }
    return {
        lastLoginTime,
        token,
        userInfo,
        authorization,
        reAuthorization,
        isAuthorized,
        login,
        logout
      };
})