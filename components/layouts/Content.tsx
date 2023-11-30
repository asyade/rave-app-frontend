import { FlatList, ScrollView, View, useWindowDimensions } from "react-native";
import { SECTION_WIDTH_BIG, SECTION_WIDTH_NORMAL, responsive } from "../theme";
import { useEffect, useRef, useState } from "react";
import PreviewPost from "../reusable/PreviewPost";
import StoryList from "../reusable/StoryList";

function renderItem(item) {
    return (
        <View style={{ paddingBottom: 4 }} id={item.id}>
            <PreviewPost></PreviewPost>
        </View>
    )
}

export default function Content({ ListHeaderComponent=null, data }) {
    return <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={data}
        renderItem={({item}) => <>{renderItem(item)}</>}
        keyExtractor={item => item.id}
    />
}