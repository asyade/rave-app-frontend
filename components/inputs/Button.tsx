import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable
} from "react-native";
import { PRIMARY_COLOR } from "../theme";

enum ButtonVariants {
  Primary,
  Secondary,
  Flat,
  Icon,
}

enum State {
  None,
  Pressed,
  Disabled,
}

const ButtonStyles = StyleSheet.create({
  "Icon": {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    width: 32,
  },
  "Primary": {
    padding: 10,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    color: 'white',
  }
});

export { ButtonStyles };

export default function Button({ style = [ButtonStyles.Icon, {}], children, onClick = null }) {
  return (
    <Pressable
      style={({ pressed, }) => style}
      onPress={() => { if (onClick) onClick() }}>
      {children}
    </Pressable>
  )
}