import {
  View,
  StyleSheet
} from "react-native";
import { COMMON_SIDE_MARGIN } from "../theme";

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: COMMON_SIDE_MARGIN,
    flexDirection: 'row',
    width: 'auto',
  }
});

export default function Bar({ children, style = {} }) {
  return (
    <View style={[styles.bar, style]}>
      {children}
    </View>
  )
}