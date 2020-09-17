import React, {useState} from 'react';
import './InputArea.sass'
import {Mutation} from 'react-apollo'
import {POST_MESSAGE_MUTATION, MESSAGE_QUERY} from '../../../../src/queries'

const InputArea = (props) => {
  const [name, setName] = useState('Dima');
  const [text, setText] = useState('');

  const _updateStoreAfterAddingMessage = (store, newMessage) => {
    const orderBy = 'createdAt_ASC'
    const data = store.readQuery({
      query: MESSAGE_QUERY,
      variables: {
        orderBy
      }
    });
    data.messages.messageList.unshift(newMessage);
    store.writeQuery({
      query: MESSAGE_QUERY,
      data,
    })
  }
  
    return (
      <div className="inputArea">
        <div className="inputAreaContainer">
          <textarea
            type="text"
            id="input_message"
            name="input_text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type message!"
            >
          </textarea>
        </div>
        <Mutation
          mutation = {POST_MESSAGE_MUTATION}
          variables = {{name, text}}
          update={(store, {data:{postMessage}}) => {
            _updateStoreAfterAddingMessage(store, postMessage);
          }}
        >
          {postMutation => 
            <button
              type="submit"
              value="Submit"
              className="inputArea__button"
              onClick={ () => {
                postMutation();
                document.getElementById('input_message').value = "";
                }
              }>Send
            </button>
          }
        </Mutation>
      </div>
    )
  }

export default InputArea;
