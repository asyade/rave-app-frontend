import { View } from "react-native";
import Bar from "../templates/Bar";
import Button, { ButtonStyles } from "../atomes/Button";
import { IconBtnAdd, IconBtnAlert, IconBtnChat, IconBtnSearch } from '../molecules/Icon';

export default function MainBar() {
    return (
        <View style={{}}>
            <Bar style={{ columnGap: 32 }}>
                <Button style={[ButtonStyles.Icon]}><IconBtnAdd /></Button>
                <Button style={[ButtonStyles.Icon]}><IconBtnSearch /></Button>
                <Button style={[ButtonStyles.Icon]}><IconBtnAlert /></Button>
                <Button style={[ButtonStyles.Icon]}><IconBtnChat /></Button>
            </Bar>
        </View>
    )
}