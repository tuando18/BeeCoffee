// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import {defaultNS, resources} from '../i18n/i18n.js';

declare module "i18next" {
    interface CustomTypeOptions {
        defaulNS: typeof defaultNS,
        resources: typeof resources['en']
    }
}