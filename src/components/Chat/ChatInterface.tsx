import { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import useLLM from '../../hooks/useLLM';

type Message = {
  sender: 'user' | 'bot';
  content: string;
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<Message>({
    sender: 'user',
    content: '',
  });

  const { fetchData } = useLLM();

  const handleSendMessage = () => {
    if (input.content.trim() !== '') {
      setMessages([...messages, input]);
      setInput({ ...input, content: '' });

      fetchData(input.content).then((response) => {
        if (response === undefined) return;
        const responseMessage: Message = { sender: 'bot', content: response };
        setMessages((prevMessages) => [...prevMessages, responseMessage]);
      });
    }
  };

  useEffect(() => {}, [messages]);

  return (
    <div className='max-w-lg mx-auto'>
      <div className='h-80 overflow-y-auto border border-gray-300 rounded-lg p-4'>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.content}
            sender={message.sender}
          />
        ))}
      </div>
      <div className='mt-4 flex'>
        <input
          type='text'
          className='w-full border border-gray-300 rounded-lg p-2'
          placeholder='Type your message...'
          value={input.content}
          onChange={(e) => setInput({ ...input, content: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button
          className='ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg'
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
