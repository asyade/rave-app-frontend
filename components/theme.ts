import {
    StyleSheet,
  } from 'react-native';
  
const COMMON_SIDE_MARGIN = 16;

const SECTION_WIDTH_NORMAL = 600;
const SECTION_WIDTH_BIG = 800;

const styles = StyleSheet.create({
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151414',
  },
  sectionView: {
    flex: 1,
    columnGap: COMMON_SIDE_MARGIN,
    rowGap: COMMON_SIDE_MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,//TODO: uniform,
    paddingBottom: 8,//TODO: uniform,
    paddingLeft: COMMON_SIDE_MARGIN,
    paddingRight: COMMON_SIDE_MARGIN,
  }
});
  

function responsive(dimensions, windowWidth) {
  if (windowWidth <= 640) {
    return windowWidth;
  } else if (windowWidth <= 1024) {
    return dimensions.Normal;
  } else {
    return dimensions.Big;
  }
}
  
export {
  COMMON_SIDE_MARGIN,
  SECTION_WIDTH_BIG,
  SECTION_WIDTH_NORMAL,
  styles,
  responsive,
}
