import { ActivityIndicator, View, StyleSheet } from 'react-native';
import React,{useState} from 'react';

import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
export default function Messages() {
    const [messages, setMessages] = useState([
        /**
         * Mock message data
         */
        // example of system message
        {
          _id: 0,
          text: 'New room created.',
          createdAt: new Date().getTime(),
          system: true
        },
        // example of chat message
        {
          _id: 1,
          text: 'Henlo!',
          createdAt: new Date().getTime(),
          user: {
            _id: 2,
            name: 'Test User'
          }
        }
      ]);
      function handleSend(newMessage = []) {
        setMessages(GiftedChat.append(messages, newMessage));
      }

  // Step 2: add a helper method

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#bad759' />
      </View>
    );
  }
  
  function renderBubble(props) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }
  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
      </View>
    );
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1, name: 'User Test' }}
      renderBubble={renderBubble}
      placeholder='Type your message here...'
      showUserAvatar
      alwaysShowSend
      
      scrollToBottomComponent={scrollToBottomComponent}
      // Step 3: add the prop
      renderLoading={renderLoading}
    />
  );
}

// Step 4: add corresponding styles
const styles = StyleSheet.create({
  // rest remains same
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
