import { ActivityIndicator, StyleProp, ViewStyle } from "react-native";
import { PRIMARY_COLOR } from "../theme";

export type SpinnerProps = {
  style?: StyleProp<ViewStyle> | undefined;
};

export default function Spinner(props: SpinnerProps | undefined) {
  return <ActivityIndicator size={32} style={props.style} color={PRIMARY_COLOR} />
}
