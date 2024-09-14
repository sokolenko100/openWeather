import { TFunction, UseTranslationResponse } from 'react-i18next';
import i18next from 'i18next';

export * from 'react-i18next';

export const useTranslation = (): UseTranslationResponse<any> =>
  ({
    t: (str): TFunction<any> => str as string,
    i18n: i18next,
    ready: true,
  } as UseTranslationResponse<any>);
