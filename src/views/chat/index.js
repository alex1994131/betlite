import React from 'react';
import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader, addLinkSnippet,addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import avatar from "../../assets/avatar.png"

class Chat extends React.Component {
    constructor(){
        super()
        this.state = {
            title: 'Welcome',
            subtitle: 'This is your chat subtitle',
            senderPlaceHolder: 'Type a message...',
            showCloseButton: true,
            fullScreenMode: false,
            autofocus: true,
            chatId: 'rcw-chat-container',
            launcherOpenLabel: 'Open chat',
            launcherCloseLabel: 'Close chat',
            sendButtonAlt: 'Send',
            showTimeStamp: true,
            imagePreview: false,
            zoomStep: 80,
        }
    }

    handleNewUserMessage = (newMessage) => {
        toggleMsgLoader();
    
        setTimeout(() => {
          toggleMsgLoader();
          if (newMessage === 'fruits') {
            setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
          } else {
            addResponseMessage(newMessage);
          }
        }, 1000);
      }
    
      handleQuickButtonClicked = (e) => {
        addResponseMessage('Selected ' + e);
        setQuickButtons([]);
      }
    
      handleSubmit = (msgText) => {
        // if(msgText.length < 80) {
        //   addUserMessage("Uh oh, please write a bit more.");
        //   return false;
        // }
        // return true;
      }

    render(){
        return (
            <Widget
            title={this.state.title}
            titleAvatar={this.state.titleAvatar}
            subtitle={this.state.subtitle}
            handleNewUserMessage={this.handleNewUserMessage}
            handleQuickButtonClicked={this.handleQuickButtonClicked}
            senderPlaceHolder={this.state.senderPlaceHolder}
            profileAvatar={avatar}
            showCloseButton={this.state.showCloseButton}
            fullScreenMode={this.state.fullScreenMode}
            autofocus={this.state.autofocus}
            customLauncher={this.launcher}
            handleTextInputChange={this.handleTextInputChange}
            chatId={this.state.chatId}
            launcherOpenLabel={this.state.launcherOpenLabel}
            launcherCloseLabel={this.state.launcherCloseLabel}
            sendButtonAlt={this.state.sendButtonAlt}
            showTimeStamp={this.state.showTimeStamp}
            imagePreview={this.state.imagePreview}
            zoomStep={this.state.zoomStep}
            handleSubmit={this.handleSubmit}
          />
        )
    }
}
export default Chat