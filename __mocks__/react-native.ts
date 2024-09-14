import { UIManager } from 'react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/LayoutAnimation/LayoutAnimation.js');
jest.mock('react-native/Libraries/ReactNative/PaperUIManager');

UIManager.setLayoutAnimationEnabledExperimental = jest.fn();

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

export * from 'react-native';
