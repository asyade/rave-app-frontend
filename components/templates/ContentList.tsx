import { FlatList, View, Text } from "react-native";
import { COMMON_SECTION_GAP } from "../theme";
import PreviewPost from "../cells/PreviewPost";
import Spinner from "../atomes/Spinner";

function renderItem(item) {
    return (
        <View style={{ paddingBottom: 4 }} id={item.uid}>
            <PreviewPost></PreviewPost>
        </View>
    )
}

type ContentProps = {
    ListHeaderComponent?: any,
    data: any[] | undefined | null,
    error: string | undefined | null,
}

export default function Content({ ListHeaderComponent = null, data, error }: ContentProps) {
    return (
        <View style={{}}>
            { error &&
                <View><Text> { error } </Text></View>
            || 
                <FlatList
                    ListHeaderComponent={ListHeaderComponent}
                    data={data}
                    renderItem={({ item }) => <>{ renderItem(item) }</>}
                    keyExtractor={item => item.uid}
                />
            }
            {
                (!data) && (
                    <View style={{ flex: 1, paddingTop: COMMON_SECTION_GAP }}><Spinner /></View>
                )
            }
        </View>
    )
}