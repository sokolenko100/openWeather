import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

// Platform constants
const isAndroid = Platform.OS === 'android';

// Retrieve initial screen's width
export const screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
export const screenHeight = isAndroid
  ? Dimensions.get('window').height - StatusBar.currentHeight
  : Dimensions.get('window').height;

// !!! Don't change to "const" !!!
const orientationIsPortrait = screenWidth < screenHeight;
const orientationIsLandscape = screenWidth > screenHeight;

/**
 * Converts provided width percentage to independent pixel (dp).
 *
 * @param  {number} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercent: number): number => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 *
 * @param  {number} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercent: number): number => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};

/*
 * Font size
 *
 * @param {number fontPercent
 *
 * @return {number}
 */
const fontSizePercentageToDP = (fontPercent: number): number => {
  return PixelRatio.roundToNearestPixel(
    ((screenWidth < screenHeight ? screenWidth : screenHeight) * fontPercent) / 100,
  );
};

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  fontSizePercentageToDP as fs,
  orientationIsPortrait as orIsP,
  orientationIsLandscape as orIsL,
};
