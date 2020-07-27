import React, {Component} from 'react';
import './InputArea.sass'
// import {HeaderInfoContext} from '../../../Chat/Chat'
import {Mutation} from 'react-apollo'
import {POST_MESSAGE_MUTATION, MESSAGE_QUERY} from '../../../../src/queries'

export class InputArea extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '', name: 'Dima'}
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
  }
  onChangeMessage(event){
    let id = '_' + Math.random().toString(36).substr(2, 20);
    this.setState({text: event.target.value});
  }

  clearArea(){
    document.getElementById('input_message').value = "";
  }

  _updateStoreAfterAddingMessage = (store, newMessage) => {
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
  

  render(){
    return (

          <form onSubmit={this.onSubmit}>
            <div className="inputArea">
              <div className="inputAreaContainer">
                <textarea
                  type="text"
                  id="input_message"
                  name="input_text"
                  value={this.state.message}
                  onChange={this.onChangeMessage}
                  placeholder="Type message!"
                  >
                </textarea>
              </div>
              <Mutation
                mutation = {POST_MESSAGE_MUTATION}
                variables = {{name: this.state.name, text: this.state.text}}
                update={(store, {data:{postMessage}}) => {
                  this._updateStoreAfterAddingMessage(store, postMessage);
                }}
              >
                {postMutation => 
                  <button
                    type="submit"
                    value="Submit"
                    className="inputArea__button"
                    onClick={ () => {
                      postMutation();
                      this.clearArea();
                      }
                    }>Send
                  </button>
                }
              </Mutation>
            </div>
          </form>
    )
  }
}
export default InputArea;
