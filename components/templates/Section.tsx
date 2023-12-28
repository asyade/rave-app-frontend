import {
  View,
  StyleSheet,
  useWindowDimensions
} from "react-native";

export default function Section({ children, style = {} }) {
  return (<View style={[
    {
      backgroundColor: '#242424',
      width: '100%',
      display: 'flex',
    },
    style
]}>
    {children}
  </View>)
}