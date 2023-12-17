import { useQuery } from '@apollo/client';
import { View, Text } from 'react-native';
import StoryList from '../reusable/StoryList';
import Content from '../layouts/Content';
import { GET_CURRENT_USER_FEED } from '../../services/api';
export default function MainTabHome() {
    const header = <View style={{ paddingBottom: 4 }}><StoryList></StoryList></View>;
    const { loading, error, data } = useQuery(GET_CURRENT_USER_FEED);
    const contentData = (!loading && data && data.getCurrentUserFeed) ? data.getCurrentUserFeed.posts : undefined;
    return (
        <View>
            <Content error={error ? error.message : undefined} ListHeaderComponent={header} data={contentData} />
        </View>
    );
}
