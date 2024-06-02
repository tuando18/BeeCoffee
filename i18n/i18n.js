import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import HOME_EN from '../locales/en/home.json'
import PRODUCT_EN from '../locales/en/product.json'
import FAVOURITE_EN from '../locales/en/favourite.json'
import CART_EN from '../locales/en/cart.json'
import ORDER_EN from '../locales/en/order.json'
import ORDERDETAIL_EN from '../locales/en/orderdetail.json'
import HISTORY_EN from '../locales/en/history.json'
import PROFILE_EN from '../locales/en/profile.json'
import SETTING_EN from '../locales/en/setting.json'
import REGISTER_EN from '../locales/en/sign.json'
import LOGIN_EN from '../locales/en/login.json'
import LANGUAGE_EN from '../locales/en/language.json'
import MENU_EN from '../locales/en/menu.json'

import HOME_VI from '../locales/vi/home.json'
import PRODUCT_VI from '../locales/vi/product.json'
import FAVOURITE_VI from '../locales/vi/favourite.json'
import CART_VI from '../locales/vi/cart.json'
import ORDER_VI from '../locales/vi/order.json'
import ORDERDETAIL_VI from '../locales/vi/orderdetail.json'
import HISTORY_VI from '../locales/vi/history.json'
import PROFILE_VI from '../locales/vi/profile.json'
import SETTING_VI from '../locales/vi/setting.json'
import REGISTER_VI from '../locales/vi/sign.json'
import LOGIN_VI from '../locales/vi/login.json'
import LANGUAGE_VI from '../locales/vi/language.json'
import MENU_VI from '../locales/vi/menu.json'


export const locales = {
    en: "English",
    vi: "Tiếng Việt"
}

export const resources = {
    en: {
        home: HOME_EN,
        product: PRODUCT_EN,
        favourite: FAVOURITE_EN,
        cart: CART_EN,
        order: ORDER_EN,
        orderdetail: ORDERDETAIL_EN,
        history: HISTORY_EN,
        profile: PROFILE_EN,
        setting: SETTING_EN,
        register: REGISTER_EN,
        login: LOGIN_EN,
        language: LANGUAGE_EN,
        menu: MENU_EN,
    },
    vi: {
        home: HOME_VI,
        product: PRODUCT_VI,
        favourite: FAVOURITE_VI,
        cart: CART_VI,
        order: ORDER_VI,
        orderdetail: ORDERDETAIL_VI,
        history: HISTORY_VI,
        profile: PROFILE_VI,
        setting: SETTING_VI,
        register: REGISTER_VI,
        login: LOGIN_VI,
        language: LANGUAGE_VI,
        menu: MENU_VI,

    }
};

export const defaultNS = 'home'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        ns: ['home', 'product', 'favourite', 'cart', 'order', 'orderdetail', 'history', 'profile', 'setting', 'register', 'login', 'language', 'register', 'menu'],
        fallbackLng: "vi",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;