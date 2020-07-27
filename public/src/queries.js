import gql from 'graphql-tag';

export const MESSAGE_QUERY = gql`
  query messageQuery($orderBy: MessageOrderByInput){
    messages(orderBy: $orderBy){
      count
      messageList {
        id
        name
        text
        likes
        dislikes
        createdAt
      }
    }
  }
`;

export const POST_MESSAGE_MUTATION = gql`
  mutation PostMutation($name: String!, $text: String!){
    postMessage(name: $name, text: $text) {
      name
      text
    }
  }
`;

export const NEW_MESSAGES_SUBSCRIPTION = gql`
  subscription{
    newMessage {
      id
      name
      text
      likes
      dislikes
    }
  }
`;