import { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';
import useLLM from '../../hooks/useLLM';
import { LinearLoader } from '../Loader/LinearLoader';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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

  const { fetchData, isLoading, error } = useLLM();

  const chatContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (error) {
      toast.error('An error occurred while sending the message.', {
        position: 'top-right',
        pauseOnHover: true,
      });
    }
  }, [error]);

  return (
    <div className='max-w-lg mx-auto p-10'>
      <div
        className='h-80  border border-gray-300 rounded-t-lg p-4 bg-white overflow-y-auto'
        ref={chatContainerRef}
      >
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.content}
            sender={message.sender}
          />
        ))}
        {isLoading && <ChatMessage message={<LinearLoader />} sender='bot' />}
      </div>
      <div className='flex rounded-b-lg border border-gray-300 items-center text-xs font-sans bg-white'>
        <input
          type='text'
          className='w-full rounded-lg bg-transparent p-2 h-12 focus:outline-none focus:none text-black'
          placeholder='Enter your question...'
          value={input.content}
          onChange={(e) => setInput({ ...input, content: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button
          className='m-2 bg-blue-800 text-white rounded-full focus:outline-none'
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
