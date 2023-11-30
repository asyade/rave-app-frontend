import {
  View,
  StyleSheet,
  useWindowDimensions
} from "react-native";

import { COMMON_SIDE_MARGIN, SECTION_WIDTH_BIG, SECTION_WIDTH_NORMAL, responsive } from "../theme";

export default function Section({ children, style = {} }) {
  const { width } = useWindowDimensions();

  return (<View style={[
    {
      backgroundColor: '#151414',
      width: responsive({
        Normal: SECTION_WIDTH_NORMAL,
        Big: SECTION_WIDTH_BIG,
      }, width)
    },
    style
]}>
    {children}
  </View>)
}