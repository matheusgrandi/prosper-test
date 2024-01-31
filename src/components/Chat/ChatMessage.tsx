import React from 'react';

interface ChatMessageProps {
  message: string;
  sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
  const messageClass = sender === 'user' ? 'text-right' : 'text-left';

  return (
    <div className={messageClass}>
      <div
        className={`${
          sender === 'user' ? 'bg-blue-300' : 'bg-gray-300'
        } rounded-lg p-2 inline-block my-1 mx-2`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
