import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { IconDropdownHome, IconTabHome } from "../atomes/Icon";
import { PRIMARY_COLOR, PRIMARY_COLOR_LIGHT } from "../theme";
import { ReactComponentElement, useState } from 'react';


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242424",
    padding: 12,
  },
  dropdown: {
    flex: 1,
    height: 20,
    backgroundColor: PRIMARY_COLOR_LIGHT,
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 8,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 12,
    color: "black",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export type DropDownItem = {
  label: string;
  value: string;
  icon: ReactComponentElement<any, any> | null | undefined;
};

export type DropDownButtonProps = {
  style?: StyleProp<ViewStyle> | undefined;
  default?: string,
  data: DropDownItem[];
}

export default function DropDownButton(props: DropDownButtonProps) {
  const [value, setValue] = useState(props.default);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: PRIMARY_COLOR }, props.style]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={props.data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? "Select item" : "..."}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  );
}
