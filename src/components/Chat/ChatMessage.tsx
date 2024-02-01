import React from 'react';

interface ChatMessageProps {
  message: string | JSX.Element;
  sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
  const messageClass = sender === 'user' ? 'text-right' : 'text-left';

  return (
    <div className={messageClass}>
      <div
        className={`${
          sender === 'user'
            ? 'bg-blue-700 text-white'
            : 'bg-blue-100 text-black'
        } rounded-lg p-2 inline-block my-1 mx-2 font-sans text-sm max-w-xs`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
