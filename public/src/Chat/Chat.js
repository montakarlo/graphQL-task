import React, {Component} from 'react';
import './Chat.sass'
import ChatContainer from './ChatContainer/ChatContainer'
import Pageheader from './Pageheader/Pageheader'
import Footer from './Footer/Footer'

export const HeaderInfoContext = React.createContext()

export class Chat extends Component {

  render(){
    return(
      <div className = "container">
        <Pageheader text = 'Montakarlo_chat' className="pageHeader"/>
        <HeaderInfoContext.Provider value = {this.fromContext}>
          <ChatContainer />
          
        </HeaderInfoContext.Provider>
        <Footer />
      </div>
    )
  }
}

export default Chat;