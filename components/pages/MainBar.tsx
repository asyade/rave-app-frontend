import { View, Text } from "react-native";
import Bar from "../templates/Bar";
import Button, { ButtonStyles } from "../molecules/Button";
import {
  IconBtnAdd,
  IconBtnAlert,
  IconBtnChat,
  IconBtnSearch,
} from "../atomes/Icon";
import { useAppContext } from "../../AppContext";

export default function MainBar() {
  const { addStackedView } = useAppContext();

  const createActivity = () => {
    addStackedView({
      id: 0,
      title: "Create publication",
      action: (
        <Button style={[ButtonStyles.Primary]}>
          <Text>Create</Text>
        </Button>
      ),
      content: <View style={{ flex: 1, backgroundColor: "red" }}></View>,
      props: {},
    });
  };

  return (
    <Bar>
      <Button onClick={() => createActivity()} style={[ButtonStyles.Icon]}>
        <IconBtnAdd />
      </Button>
      <Button style={[ButtonStyles.Icon]}>
        <IconBtnSearch />
      </Button>
      <Button style={[ButtonStyles.Icon]}>
        <IconBtnAlert />
      </Button>
      <Button style={[ButtonStyles.Icon]}>
        <IconBtnChat />
      </Button>
    </Bar>
  );
}
