import { StyleSheet } from "react-native";

export const COMMON_SIDE_MARGIN = 16;
export const COMMON_SECTION_GAP = 16;

export const SECTION_WIDTH_NORMAL = 600;
export const SECTION_WIDTH_BIG = 800;

export const PRIMARY_COLOR = "#EC6F02";
export const PRIMARY_COLOR_LIGHT = "#EE8D35";

export const styles = StyleSheet.create({
  textTitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  absoluteFill: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#151414",
  },
  sectionView: {
    flex: 1,
    columnGap: COMMON_SIDE_MARGIN,
    rowGap: COMMON_SIDE_MARGIN,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8, //TODO: uniform,
    paddingBottom: 8, //TODO: uniform,
    paddingLeft: COMMON_SIDE_MARGIN,
    paddingRight: COMMON_SIDE_MARGIN,
  },
});
