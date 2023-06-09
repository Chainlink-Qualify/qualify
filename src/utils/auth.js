import Cookies from "js-cookie";

export const setAuthToken = (key, value) => {
    try {
        Cookies.set(key, value, { expires: 7 })
        return true;
    } catch (err) {
        return false;
    }
}

export const isAuth = (keyId) => {
    const key = Cookies.get(keyId)
    return !key ? false : true;
}

export const getAuthToken = (key) => {
    return Cookies.get(key)
}

export const clearAuthToken = (key) => {
    Cookies.remove(key)
}