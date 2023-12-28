import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { PRIMARY_COLOR } from "../theme";
import Ripple from "react-native-material-ripple";

const ButtonStyles = StyleSheet.create({
  Icon: {
    padding: 8,
    alignItems: "center",
    alignContent: "center",
  },
  Primary: {
    padding: 8,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: PRIMARY_COLOR,
    color: "white",
  },
});

export { ButtonStyles };

export type ButtonProps = {
  style?: StyleProp<ViewStyle> | undefined;
  children?: any;
  onClick?: () => void;
}

export default function Button({
  style = [ButtonStyles.Icon, {}],
  children,
  onClick = null,
}: ButtonProps) {
  return (
      <Ripple onPress={() => onClick && onClick()}>
        <View style={style}>{children}</View>
      </Ripple>
  );
}
