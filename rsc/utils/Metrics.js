import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');
const screenWidth = width > height ? height : width;
const screenHeight = width > height ? width : height;
const density = PixelRatio.get();

const ratio = {
  x: screenWidth / 414.0,
  y: Math.min(screenHeight, screenWidth / 0.5625) / 736.0,
};

export default {
  getWidth: value => value * ratio.x,
  getHeight: value => value * ratio.y,
  ratio,
  screenWidth,
  screenHeight,
  density,
};
