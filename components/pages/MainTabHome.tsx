import { useQuery } from '@apollo/client';
import { View, Text } from 'react-native';
import StoryList from '../cells/StoriesBar';
import Content from '../templates/ContentList';
import { GET_CURRENT_USER_FEED } from '../../services/api';
export default function MainTabHome() {
    const header = <View style={{ paddingBottom: 4 }}><StoryList></StoryList></View>;
    const { loading, error, data } = useQuery(GET_CURRENT_USER_FEED);
    console.log(loading, error, data);
    return (
        <View>
           { !loading && <Content error={error ? error.message : undefined} ListHeaderComponent={header} data={data} /> }
        </View>
    );
}
