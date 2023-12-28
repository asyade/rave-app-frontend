import { View } from "react-native";
import Button, { ButtonStyles } from "../molecules/Button";
import { IconBtnImage, IconBtnSearch } from "../atomes/Icon";
import { styles } from "../theme";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export type ContentResolverProps = {
  onImageSelected?: (image: string) => void;
};

export default function ContentResolver({
  onImageSelected,
}: ContentResolverProps | undefined) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && onImageSelected) {
      onImageSelected(result.assets[0].uri);
    }
  };

  return (
    <View
      style={[
        styles.sectionView,
        {
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#363636",
        },
      ]}
    >
      <Button onClick={() => pickImage()} style={[ButtonStyles.Icon]}>
        <IconBtnImage />
      </Button>
    </View>
  );
}
