import { useQuery, gql } from '@apollo/client';
import { View, Text } from 'react-native';
import StoryList from '../reusable/StoryList';
import Content from '../layouts/Content';
import { GET_CURRENT_USER_FEED } from '../../services/api';

export default function MainTabHome() {
    const header = <View style={{ paddingBottom: 4 }}><StoryList></StoryList></View>;
    
    const { loading, error, data } = useQuery(GET_CURRENT_USER_FEED);

    if (loading) return <Text style={{color: 'green'}} >Loading...</Text>;
    if (error) return <Text style={{color: 'red'}}>Error : {error.message}</Text>;
  
    return <Content ListHeaderComponent={header} data={[
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
        { id: "7" },
        { id: "8" },
        { id: "9" },
    ]} />
}
