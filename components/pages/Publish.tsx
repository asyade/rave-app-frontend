import { View, TextInput, Text, Image } from "react-native";
import React, { FC, useEffect, useMemo, useState } from "react";
import Container from "../templates/Container";
import AvatarButton from "../molecules/AvatarButton";
import Section from "../templates/Section";
import { useAuth0 } from "react-native-auth0";
import DropDownButton from "../atomes/DropDownButton";
import { IconBtnSearch, IconDropdownHome } from "../atomes/Icon";
import { styles } from "../theme";
import Button, { ButtonStyles } from "../molecules/Button";
import ContentResolver from "../cells/ContentResolver";
import { useAppContext } from "../../AppContext";

export type Attachment = {
  uri: String;
  kind: AttachmentKund;
};

export enum AttachmentKund {
  Image = "image",
  Video = "video",
  Audio = "audio",
  File = "file",
}

export type PublishProps = {
};

const Publish: FC<PublishProps> = (props) => {
  const data = [
    { label: "Feed", value: "1", icon: <IconDropdownHome /> },
    { label: "Gems", value: "2", icon: <IconDropdownHome /> },
  ];

  const [attachemnt, setAttachment] = useState(null);
  const [content, setContent] = useState("");

  const { lastPopupAction, dispatchPopupAction } = useAppContext();

  useEffect(() => {
    dispatchPopupAction(null);
    if (lastPopupAction?.type === "submit") {
      submit();
    }
  }, [lastPopupAction]);

  const submit = () => {
    console.log("submit", content, attachemnt);
  }

  const { user } = useAuth0();
  return (
    <Container>
      <Section style={{ height: 64 }}>
        <View
          style={{ margin: 8, flex: 1, columnGap: 8, flexDirection: "row" }}
        >
          <AvatarButton avatarUrl={user.picture} />
          <View style={{ flex: 1, flexDirection: "column" }}>
            <DropDownButton default={data[0]?.value} data={data} />
            <Text style={styles.textTitle}>{user.name}</Text>
          </View>
        </View>
      </Section>
      <Section style={{ flex: 1 }}>
        <TextInput
          onChangeText={(text) => setContent(text)}
          textAlignVertical={"top"}
          multiline={true}
          placeholderTextColor={"gray"}
          placeholder="What's on your mind?"
          style={{ color: "white", margin: 8 }}
        />
      </Section>
      {attachemnt != null && (
        <Section>
          <Image style={{width: '100%', height: 200}} resizeMode={"cover"} source={{ uri: attachemnt.uri }} />
        </Section>
      )}
      <Section
        style={{
          height: 64,
        }}
      >
        <ContentResolver
          onImageSelected={(uri) => {
            console.log("uri", uri);
            setAttachment({ uri: uri, kind: AttachmentKund.Image });
          }}
        />
      </Section>
    </Container>
  );
}

export default Publish;
