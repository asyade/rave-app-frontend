import {
    View,
    StyleSheet
} from "react-native";
import { COMMON_SIDE_MARGIN } from "../theme";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000000',
    },
  });

export default function Container({style = {}, children}) {
    return (
      <View style={[styles.container, StyleSheet.absoluteFill]}>
        <View style={[{
          flex: 1,
          alignItems: 'center',
          justifyContent:'flex-start',
          rowGap: 4,
        }, style]}>
          { children }
        </View>
      </View>
    )
}