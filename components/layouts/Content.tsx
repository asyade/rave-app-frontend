import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { COMMON_SECTION_GAP } from "../theme";
import PreviewPost from "../reusable/PreviewPost";

function renderItem(item) {
    return (
        <View style={{ paddingBottom: 4 }} id={item.id}>
            <PreviewPost></PreviewPost>
        </View>
    )
}

type ContentProps = {
    ListHeaderComponent?: any,
    data: any[] | undefined,
    error: string | undefined,
}

export default function Content({ ListHeaderComponent = null, data, error }: ContentProps) {
    return (
        <View style={{position: 'relative'}}>
            { error &&
                <View><Text> { error } </Text></View>
            || 
                <FlatList
                    ListHeaderComponent={ListHeaderComponent}
                    data={data}
                    renderItem={({ item }) => <>{ renderItem(item) }</>}
                    keyExtractor={item => item.id}
                />
            }
            {
                (!data) && (
                    <View style={{ flex: 1, paddingTop: COMMON_SECTION_GAP }}><ActivityIndicator></ActivityIndicator></View>
                )
            }
        </View>
    )
}