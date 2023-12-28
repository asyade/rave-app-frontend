import { StyleProp, View, ViewStyle } from "react-native";
import Section from "./Section";
import { COMMON_SIDE_MARGIN, styles } from "../theme";

export type HeaderLayoutProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  logoComponent?: React.ReactNode;
};

export default function HeaderLayout(props: HeaderLayoutProps) {
  const { children, style, logoComponent } = props;

  return (
    <View style={[style, { height: 74, width: "auto" }]}>
      <Section
        style={[
          styles.sectionView,
          {
            flexGrow: 1,
            flexDirection: "row",
            flex: 1,
          },
        ]}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          {logoComponent}
        </View>
        <View style={{flex: 1 }} >
          {children}
        </View>
      </Section>
    </View>
  );
}
