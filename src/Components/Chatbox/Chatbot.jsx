import "./Chatbot.css"
import ChatIcon from '../ChatIcon/ChatIcon'

const Chatbot = () => {
  return (
    <div className="container">

      <div className="chatbot-popup">
        {/* header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
        </div>

        {/* body */}
        <div className="chat-body">

          <div className="message bot-message">
           <ChatIcon />
            <p className="message-text">
              Hey there <br /> How can I help you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
        </div>

        {/* footer */}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input type="text" placeholder="Messages..." className="message-input" required />
            <button className="material-symbols-rounded"> arrow_upward </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Chatbot