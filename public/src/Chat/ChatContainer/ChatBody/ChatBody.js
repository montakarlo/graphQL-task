import React from 'react';
import './ChatBody.sass'
import MessageItem from './MessageItem/MessageItem'
import {HeaderInfoContext} from '../../../Chat/Chat'
import {Query} from 'react-apollo'
import {NEW_MESSAGES_SUBSCRIPTION, MESSAGE_QUERY} from '../../../../src/queries'
import * as ReactBootStrap from 'react-bootstrap'

export default () => {

  const orderBy = 'createdAt_ASC'

  const _subscribeToNewMessages = subscribeToMore => {
    subscribeToMore({
      document: NEW_MESSAGES_SUBSCRIPTION,
      updateQuery: (prev, {subscriptionData}) => {
        if (!subscriptionData.data) return prev;
        const {newMessage} = subscriptionData.data;
        const exist = prev.messages.messageList.find(({id}) => id === newMessage.id);
        if (exist) return prev;
        return {...prev, messages:{
          messageList: [newMessage, ...prev.messages.messageList],
          count: prev.messages.messageList.length + 1,
          __typename: prev.messages.__typename
        }}
      }
    })
  }

  return (

    <Query query = {MESSAGE_QUERY} variables={{orderBy}}>
      {({loading, error, data, subscribeToMore}) =>{
        if (loading) return <ReactBootStrap.Spinner animation="border" variant="light"/>
        if (error) return <div style={{color: 'white'}}>Error:(</div>
        _subscribeToNewMessages(subscribeToMore);
        const {messages: {messageList}} = data;
        console.log(messageList);

        return(
          <div className="chatBody">
            <div className="chatBody__container" id="chatBody__container">
              {messageList.map((message, index) => {
                return(

                    <MessageItem 
                    text = {message.text}
                    // date = {new Date(message.createdAt).toString().slice(16,21)}
                    key = {index}
                    messageId = {message.id}

                    /> 
                  )
                })
              }
            </div>
          </div>
        )
      }}
    </Query>
  )
}


