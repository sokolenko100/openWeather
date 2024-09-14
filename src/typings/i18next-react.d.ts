import resources from '../assets/Translations';

declare module 'react-i18next' {
    type DefaultResources = (typeof resources)['en'];
    interface Resources extends DefaultResources {}
}
