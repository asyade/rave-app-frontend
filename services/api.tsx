import { useQuery, gql } from '@apollo/client';

const GET_CURRENT_USER_FEED = gql`
    query {
        getCurrentUserFeed(category: HOME, limit: 10) {
            posts {
                uid,
            }
        }
    }
`;

export {
    GET_CURRENT_USER_FEED
}