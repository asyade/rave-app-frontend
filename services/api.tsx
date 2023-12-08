import { useQuery, gql } from '@apollo/client';

const GET_CURRENT_USER_FEED = gql`
    query {
        getCurrentUserFeed(category: HOME, limit: 10) {
            posts {
                sid,
                ownerSid
                content
            }
        }
    }
`;

export {
    GET_CURRENT_USER_FEED
}