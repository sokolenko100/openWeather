import { Alert } from 'react-native';

interface IPromptParams {
    title: string;
    message: string;
    value?: string;
    okBtnTxt: string;
    cancelBtnTxt: string;
    onOk?: (value?: string) => void;
    onCancel?: () => void;
}

/**
 * System Alert to confirm an action before executing it
 */
export const showPrompt = (params: IPromptParams): void => {
    const { title, message, value, okBtnTxt, cancelBtnTxt, onOk, onCancel } = params;
    Alert.alert(title, message, [
        {
            text: cancelBtnTxt,
            onPress: (): void => {
                onCancel && onCancel();
            },
        },
        {
            text: okBtnTxt,
            onPress: (): void => {
                onOk && onOk(value);
            },
        },
    ]);
};
